#!/usr/bin/env python3
"""Validate the structural, privacy and progress contract of a UCU portfolio.

This validator is intentionally formative. Errors block publishing because the
portfolio would be unsafe or structurally broken. Warnings describe incomplete
learning evidence but do not fail the workflow.
"""
from __future__ import annotations

import argparse
import os
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import unquote


ALLOWED_STATUSES = ("Pendiente", "Mínimo", "Defendible", "Revisado")
ESSENTIAL_FILES = (
    "mkdocs.yml",
    "docs/index.md",
    "docs/onboarding-primera-semana.md",
    "docs/politica-uso-ia.md",
    "docs/portfolio/index.md",
    "docs/portfolio/mapa-evidencias.md",
    "docs/portfolio/plantilla.md",
)
REQUIRED_SECTIONS = {
    "objetivo": ("## Objetivo",),
    "evidencia": ("## Evidencia",),
    "reproducibilidad": ("## Reproducibilidad",),
    "decisiones y límites": ("## Decisiones y límites", "## Decisión técnica", "## Decisiones"),
    "uso de IA": ("## Uso de IA",),
    "microdefensa": ("## Microdefensa",),
}
SECRET_PATTERNS = {
    "clave privada": re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
    "token GitHub": re.compile(r"\b(?:ghp|gho|ghu|ghs|github_pat)_[A-Za-z0-9_]{20,}\b"),
    "access key AWS": re.compile(r"\bAKIA[0-9A-Z]{16}\b"),
    "secreto asignado": re.compile(
        r"(?im)^\s*(?:api[_-]?key|secret|token|password)\s*[:=]\s*['\"]?(?!<|\$\{|example|placeholder|changeme)[^\s'\"]{12,}"
    ),
}
LINK_RE = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")
PLACEHOLDER_RE = re.compile(r"(?i)(?:\bTODO\b|\[completar\]|<propósito>|<herramienta>|reemplazá este texto)")


@dataclass(frozen=True)
class Issue:
    severity: str
    message: str


@dataclass(frozen=True)
class ProgressRow:
    number: int
    suggested_file: str
    status: str


def _normalise_status(value: str) -> str | None:
    """Return the canonical Spanish status matching a table cell."""
    compact = " ".join(value.replace("`", "").split()).casefold()
    return next((status for status in ALLOWED_STATUSES if status.casefold() == compact), None)


def parse_progress_map(path: Path) -> tuple[list[ProgressRow], list[Issue]]:
    """Parse the evidence map and report structural or status errors."""
    issues: list[Issue] = []
    rows: list[ProgressRow] = []
    if not path.exists():
        return rows, [Issue("error", f"Falta {path.as_posix()}")]
    for line_number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
        if not line.lstrip().startswith("|"):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if not cells or not cells[0].isdigit() or len(cells) < 3:
            continue
        status = _normalise_status(cells[-1])
        if status is None:
            issues.append(Issue("error", f"Estado inválido en {path.name}:{line_number}: {cells[-1]!r}"))
            status = cells[-1]
        suggested = cells[-2].strip("`")
        rows.append(ProgressRow(int(cells[0]), suggested, status))
    found = {row.number for row in rows}
    missing = sorted(set(range(1, 17)) - found)
    if missing:
        issues.append(Issue("error", f"El mapa no contiene las clases: {', '.join(map(str, missing))}"))
    duplicates = sorted(number for number in found if sum(row.number == number for row in rows) > 1)
    if duplicates:
        issues.append(Issue("error", f"El mapa repite las clases: {', '.join(map(str, duplicates))}"))
    return rows, issues


def validate_entry(path: Path) -> list[Issue]:
    """Validate the sections and placeholders of one started evidence entry."""
    if not path.exists():
        return [Issue("error", f"La evidencia marcada no existe: {path.as_posix()}")]
    text = path.read_text(encoding="utf-8")
    issues: list[Issue] = []
    for label, alternatives in REQUIRED_SECTIONS.items():
        if not any(section in text for section in alternatives):
            issues.append(Issue("error", f"{path.name} no contiene la sección {label!r}"))
    if PLACEHOLDER_RE.search(text):
        issues.append(Issue("warning", f"{path.name} todavía contiene texto de plantilla"))
    return issues


def validate_local_links(root: Path) -> list[Issue]:
    """Report unresolved relative Markdown links in public documentation."""
    issues: list[Issue] = []
    for path in sorted((root / "docs").rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        for raw_target in LINK_RE.findall(text):
            target = raw_target.strip().strip("<>").split("#", 1)[0].split("?", 1)[0]
            if not target or re.match(r"^(?:https?:|mailto:|tel:)", target):
                continue
            candidate = (path.parent / unquote(target)).resolve()
            if not candidate.exists():
                issues.append(
                    Issue("error", f"Enlace local roto en {path.relative_to(root).as_posix()}: {raw_target}")
                )
    return issues


def scan_secrets(root: Path) -> list[Issue]:
    """Scan likely text and configuration files for credential patterns."""
    issues: list[Issue] = []
    skip_parts = {".git", ".venv", "venv", "site", "__pycache__"}
    text_suffixes = {".md", ".yml", ".yaml", ".json", ".py", ".txt", ".toml", ".ini"}
    secret_names = {".npmrc", ".pypirc", "credentials", "id_dsa", "id_ecdsa", "id_ed25519", "id_rsa"}
    for path in sorted(root.rglob("*")):
        if not path.is_file() or any(part in skip_parts for part in path.parts):
            continue
        name = path.name.lower()
        if path.suffix.lower() not in text_suffixes and name not in secret_names and not name.startswith(".env"):
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        for label, pattern in SECRET_PATTERNS.items():
            if pattern.search(text):
                issues.append(Issue("error", f"Posible {label} en {path.relative_to(root).as_posix()}"))
    return issues


def validate(root: Path) -> list[Issue]:
    """Run every portfolio validation rule for a repository root."""
    issues: list[Issue] = []
    for relative in ESSENTIAL_FILES:
        if not (root / relative).exists():
            issues.append(Issue("error", f"Falta el archivo esencial {relative}"))

    map_path = root / "docs" / "portfolio" / "mapa-evidencias.md"
    rows, map_issues = parse_progress_map(map_path)
    issues.extend(map_issues)
    for row in rows:
        if row.status not in ALLOWED_STATUSES or row.status == "Pendiente":
            continue
        suggested = row.suggested_file.replace("\\", "/").removeprefix("docs/")
        issues.extend(validate_entry(root / "docs" / suggested))

    issues.extend(validate_local_links(root))
    issues.extend(scan_secrets(root))
    return issues


def render_summary(issues: list[Issue]) -> str:
    """Render errors and warnings as a GitHub-friendly Markdown summary."""
    errors = [issue for issue in issues if issue.severity == "error"]
    warnings = [issue for issue in issues if issue.severity == "warning"]
    lines = ["# Calidad del portafolio", "", f"- Errores: **{len(errors)}**", f"- Advertencias: **{len(warnings)}**"]
    for title, group in (("Errores bloqueantes", errors), ("Advertencias formativas", warnings)):
        if group:
            lines.extend(("", f"## {title}", ""))
            lines.extend(f"- {issue.message}" for issue in group)
    if not issues:
        lines.extend(("", "El contrato estructural, de progreso y privacidad está correcto."))
    return "\n".join(lines) + "\n"


def main(argv: list[str] | None = None) -> int:
    """Validate the selected root and return a blocking exit code on errors."""
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path.cwd())
    args = parser.parse_args(argv)
    root = args.root.resolve()
    issues = validate(root)
    summary = render_summary(issues)
    print(summary)
    step_summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if step_summary:
        with Path(step_summary).open("a", encoding="utf-8") as handle:
            handle.write(summary)
    return 1 if any(issue.severity == "error" for issue in issues) else 0


if __name__ == "__main__":
    sys.exit(main())
