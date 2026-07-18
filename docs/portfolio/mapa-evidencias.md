---
title: "Mapa de evidencias"
date: 2026-07-01
---

# Mapa de evidencias del portafolio

Este archivo es tu checklist dentro del repo editable de portafolio de Ingeniería de Datos. Usalo para decidir qué entrada crear, qué falta completar y qué vas a defender.

## Cómo usar este mapa

1. Copiá [plantilla.md](plantilla.md) para cada evidencia importante.
2. Usá nombres numerados en `docs/portfolio/` para que el semestre sea fácil de revisar.
3. Marcá cada fila como `Pendiente`, `Mínimo`, `Defendible` o `Revisado`.
4. No publiques respuestas A0 completas, feedback docente privado, notas, datos de compañeros, `.env`, tokens ni claves.
5. Para WebAsignatura entregá solo el link o archivo pedido por la consigna.

## Tabla de avance por clase

<div class="ucu-progress-dashboard" data-ucu-progress-dashboard>
El resumen visual aparece cuando JavaScript está disponible. La tabla siguiente siempre conserva el progreso.
</div>

<div class="ucu-progress-source" data-ucu-progress-source markdown="1">

| # | Foco en lenguaje simple | Evidencia mínima | Tipo | Archivo sugerido | Estado |
|---|---|---|---|---|---|
| 1 | Arranque, rol de ingeniería de datos y portafolio reproducible. | Repo publicado, primera entrada y declaración de uso de IA. | Clase | `portfolio/01-primera-entrada.md` | Pendiente |
| 2 | EDA con Python, SQL y Pandas. | Informe EDA con gráficos, supuestos y riesgos. | Clase | `portfolio/02-eda.md` | Pendiente |
| 3 | Distribuciones y decisiones sobre outliers. | Perfil de distribuciones y decisión trazable sobre un outlier. | Clase | `portfolio/03-distribuciones-outliers.md` | Pendiente |
| 4 | Ingesta multifuente, joins y contratos de datos. | Inventario de fuentes, controles de join y contrato v0. | Clase | `portfolio/04-multifuente.md` | Pendiente |
| 5 | Missing data, outliers y validaciones ejecutables. | Pipeline de limpieza, casos rotos y validaciones. | Clase | `portfolio/05-calidad.md` | Pendiente |
| 6 | Leakage, fairness, privacidad y uso responsable de IA. | Nota de riesgo con métrica, mitigación y datos excluidos de IA. | Clase | `portfolio/06-fairness.md` | Pendiente |
| 7 | Parcial 1 y extensión opcional de ingeniería de atributos. | Registro del parcial; variables v1 sólo si realizás la extensión. | Parcial 1 + reflexión | `portfolio/07-parcial-1-reflexion.md` | Pendiente |
| 8 | Encoding y validación anti-leakage. | Comparación de encoders y nota de leakage. | Clase | `portfolio/08-encoding.md` | Pendiente |
| 9 | PCA, selección y comparación de modelos. | Comparación con baseline, análisis de error y compromiso elegido. | Clase | `portfolio/09-reduccion.md` | Pendiente |
| 10 | Variables temporales y split cronológico. | Pipeline temporal, corte justificado y prueba anti-leakage. | Clase | `portfolio/10-temporal.md` | Pendiente |
| 11 | Ventanas temporales y snapshot RFM. | Ventanas por evento, snapshot por cliente y comparación cronológica. | Clase | `portfolio/11-ventanas-rfm.md` | Pendiente |
| 12 | Geodatos, CRS y predicados espaciales. | Mapa, política de frontera, cardinalidad y limitación. | Clase | `portfolio/12-geoespacial.md` | Pendiente |
| 13 | Parcial 2 y extensión opcional de imagen. | Registro del Parcial 2; imagen sólo si se realiza como extensión separada. | Parcial 2 + reflexión | `portfolio/13-parcial-2-reflexion.md` | Pendiente |
| 14 | Audio como dato y atributos reproducibles. | Configuración, espectrograma, tabla de atributos y control conocido. | Clase | `portfolio/14-audio.md` | Pendiente |
| 15 | ETL/ELT, batch, streaming y DataOps. | Pipeline local, DAG, reportes y falla controlada. | Clase | `portfolio/15-etl-dataops.md` | Pendiente |
| 16 | Defensa final del portafolio. | 2–3 evidencias, reproducción o fallback y variación individual sin IA. | Defensa final | `portfolio/16-cierre-defensa.md` | Pendiente |


</div>

## Parciales y defensa final

- Parcial 1: guardá una reflexión posterior, sin copiar el núcleo A0 reservado.
- Parcial 2: conectá sistemas de datos aplicados, reproducibilidad, seguridad y toma de decisiones.
- Defensa final: elegí 2-3 entradas `Defendible` o `Revisado` y prepará una variación oral sin IA.
- El portafolio vale 30%, pero la defensa final lo valida. Si una evidencia no se puede defender, corregila o marcala como limitada.

## Ranking interno

El ranking interno puede dar bonificación sobre portafolio, con tope 100/100. Para que cuente, la entrada debe mostrar:

- ronda y alias de equipo;
- evidencia reproducible;
- análisis de error o incidente;
- declaración de uso de IA;
- aprendizaje transferible a otra práctica o al proyecto.
