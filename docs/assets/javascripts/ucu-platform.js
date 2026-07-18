(function () {
  "use strict";

  const statuses = ["Pendiente", "Mínimo", "Defendible", "Revisado"];

  function normalise(value) {
    const compact = value.replace(/\s+/g, " ").trim().toLocaleLowerCase("es");
    return statuses.find((status) => status.toLocaleLowerCase("es") === compact) || null;
  }

  function statusSlug(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
  }

  function enhanceHeaderToggle({ selector, controlId, targetSelector, compactQuery, labels }) {
    const toggle = document.querySelector(selector);
    const control = document.getElementById(controlId);
    const target = document.querySelector(targetSelector);
    if (!toggle || !control || toggle.dataset.ucuAccessibleToggle === "true") return;

    const compactViewport = window.matchMedia(compactQuery);
    if (target && !target.id) target.id = `ucu-${controlId.replace(/^__/, "")}-panel`;
    toggle.setAttribute("role", "button");
    toggle.setAttribute("tabindex", "0");
    if (target && target.id) toggle.setAttribute("aria-controls", target.id);

    const updateState = () => {
      const expanded = Boolean(control.checked);
      if (target) {
        target.inert = compactViewport.matches && !expanded;
        if (!expanded && target.contains(document.activeElement)) toggle.focus();
      }
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.setAttribute("aria-label", expanded ? labels.close : labels.open);
    };

    const isActivationKey = (event) => event.key === "Enter" || event.key === " ";
    let keyboardActivation = false;
    toggle.addEventListener("click", (event) => {
      if (!keyboardActivation || event.detail !== 0) return;
      event.preventDefault();
    });
    toggle.addEventListener("keydown", (event) => {
      if (!isActivationKey(event)) return;
      event.preventDefault();
      keyboardActivation = true;
    });
    toggle.addEventListener("keyup", (event) => {
      if (!isActivationKey(event)) return;
      event.preventDefault();
      control.checked = !control.checked;
      control.dispatchEvent(new Event("change", { bubbles: true }));
      window.setTimeout(() => {
        keyboardActivation = false;
      }, 0);
    });
    control.addEventListener("change", updateState);
    compactViewport.addEventListener("change", updateState);
    toggle.dataset.ucuAccessibleToggle = "true";
    updateState();
  }

  function enhanceHeaderControls() {
    enhanceHeaderToggle({
      selector: '.md-header__button[for="__drawer"]',
      controlId: "__drawer",
      targetSelector: ".md-sidebar--primary .md-sidebar__inner",
      compactQuery: "(max-width: 76.234375em)",
      labels: { open: "Abrir navegación", close: "Cerrar navegación" },
    });
    enhanceHeaderToggle({
      selector: '.md-header__button[for="__search"]',
      controlId: "__search",
      targetSelector: ".md-search",
      compactQuery: "(max-width: 59.984375em)",
      labels: { open: "Abrir búsqueda", close: "Cerrar búsqueda" },
    });
  }

  function enhanceProgress() {
    const dashboard = document.querySelector("[data-ucu-progress-dashboard]");
    const tables = Array.from(document.querySelectorAll("[data-ucu-progress-source] table"));
    if (!dashboard || tables.length === 0 || dashboard.dataset.enhanced === "true") return;

    const counts = Object.fromEntries(statuses.map((status) => [status, 0]));
    const rows = tables.flatMap((table) => Array.from(table.querySelectorAll("tbody tr")));
    rows.forEach((row) => {
      const cell = row.lastElementChild;
      if (!cell) return;
      const status = normalise(cell.textContent || "");
      if (!status) return;
      counts[status] += 1;
      cell.dataset.ucuStatus = status.toLocaleLowerCase("es");
      const label = document.createElement("span");
      label.className = "ucu-status-badge";
      label.textContent = status;
      cell.replaceChildren(label);
    });

    const total = rows.length;
    const started = counts.Mínimo + counts.Defendible + counts.Revisado;
    const title = document.createElement("h2");
    title.id = "ucu-progress-title";
    title.textContent = "Tu avance versionado";

    const summary = document.createElement("p");
    summary.className = "ucu-progress-dashboard__summary";
    summary.textContent = `${started} de ${total} evidencias alcanzaron el nivel mínimo o superior.`;

    const grid = document.createElement("div");
    grid.className = "ucu-progress-dashboard__grid";
    grid.setAttribute("role", "list");
    statuses.forEach((status) => {
      const item = document.createElement("div");
      item.className = `ucu-progress-stat ucu-progress-stat--${statusSlug(status)}`;
      item.setAttribute("role", "listitem");
      const count = document.createElement("strong");
      count.textContent = String(counts[status]);
      const label = document.createElement("span");
      label.textContent = status;
      item.replaceChildren(count, label);
      grid.appendChild(item);
    });

    const progress = document.createElement("progress");
    progress.max = Math.max(total, 1);
    progress.value = started;
    progress.setAttribute("aria-label", "Evidencias con nivel mínimo o superior");

    const hint = document.createElement("small");
    hint.textContent = "La tabla Markdown es la fuente de verdad: actualizala y guardá el cambio con un commit.";

    dashboard.replaceChildren(title, summary, grid, progress, hint);
    dashboard.setAttribute("aria-labelledby", title.id);
    dashboard.dataset.enhanced = "true";
  }

  function initialise() {
    enhanceHeaderControls();
    enhanceProgress();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initialise);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
})();
