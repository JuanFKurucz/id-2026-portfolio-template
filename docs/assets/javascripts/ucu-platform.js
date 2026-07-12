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

  function enhanceProgress() {
    const dashboard = document.querySelector("[data-ucu-progress-dashboard]");
    const table = document.querySelector("[data-ucu-progress-source] table");
    if (!dashboard || !table || dashboard.dataset.enhanced === "true") return;

    const counts = Object.fromEntries(statuses.map((status) => [status, 0]));
    const rows = Array.from(table.querySelectorAll("tbody tr"));
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
    const title = document.createElement("h3");
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
