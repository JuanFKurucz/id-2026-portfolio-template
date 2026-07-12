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
| 1 | Entender cómo se trabaja en el curso y dejar el portafolio listo para mostrar evidencia. | link o captura del portafolio; primer commit o cambio visible | Clase + entrada de portafolio | `portfolio/01-primera-entrada.md` | Pendiente |
| 2 | Mirar un dataset, describir columnas y detectar problemas simples antes de transformar datos. | notebook o reporte EDA; tabla de columnas | Clase + entrada de portafolio | `portfolio/02-eda.md` | Pendiente |
| 3 | Compará Pandas con una herramienta local más escalable sin perder el criterio de validación. | comparación breve; código mínimo ejecutado | Clase + entrada de portafolio | `portfolio/03-procesamiento-escalable.md` | Pendiente |
| 4 | Unir fuentes sin duplicar o perder registros y escribir el primer contrato de datos. | inventario; join validado | Clase + posible ronda de ranking interno | `portfolio/04-joins-contrato.md` | Pendiente |
| 5 | Decidir qué hacer con nulos y outliers, y dejar checks que detecten problemas futuros. | pipeline de limpieza; checks antes/después | Clase + entrada de portafolio | `portfolio/05-calidad.md` | Pendiente |
| 6 | Identificá leakage, datos sensibles y riesgos de fairness antes de confiar en resultados. | nota de riesgo; tabla de variables sensibles/leakage | Clase + posible ronda de ranking interno | `portfolio/06-riesgo-privacidad.md` | Pendiente |
| 7 | Rendir el Parcial 1 A0 y crear variables con hipótesis y evidencia de versionado. | set de variables v1; hipótesis por variable | Parcial 1 + evidencia reflexiva | `portfolio/07-parcial-1-reflexion.md` | Pendiente |
| 8 | Codificar variables categóricas sin filtrar información del target. | experimento de encoding; nota anti-leakage | Clase + posible ronda de ranking interno | `portfolio/08-encoding.md` | Pendiente |
| 9 | Reducir variables o elegir atributos sin perder de vista interpretabilidad y evidencia. | gráfico PCA; reporte comparativo | Clase + entrada de portafolio | `portfolio/09-pca-seleccion.md` | Pendiente |
| 10 | Crear variables temporales respetando el orden del tiempo y evitando mirar el futuro. | pipeline temporal; diagrama o tabla de ventanas | Clase + posible ronda de ranking interno | `portfolio/10-temporal.md` | Pendiente |
| 11 | Usar ubicación o relaciones como datos sin perder el significado de coordenadas y nodos. | mapa o grafo; métrica explicada | Clase + entrada de portafolio | `portfolio/11-geoespacial-grafos.md` | Pendiente |
| 12 | Convertir imagen, audio o datos semi-estructurados en una tabla de atributos defendibles. | tabla de atributos; ejemplo antes/después | Clase + posible ronda de ranking interno | `portfolio/12-datos-especiales.md` | Pendiente |
| 13 | Rendir el Parcial 2 A0 y modelar transformaciones repetibles para datos confiables. | modelo dimensional o dbt mini; diagrama | Parcial 2 + evidencia reflexiva | `portfolio/13-parcial-2-reflexion.md` | Pendiente |
| 14 | Automatizar un pipeline simple con dependencias, logs y reintentos razonables. | demo ETL/ELT; log de ejecución | Clase + posible ronda de ranking interno | `portfolio/14-orquestacion.md` | Pendiente |
| 15 | Demostrar que un producto de datos es confiable con contrato, checks, linaje y observabilidad. | trust-stack demo; check fallido/corregido | Clase + entrada de portafolio | `portfolio/15-trust-stack.md` | Pendiente |
| 16 | Defender el producto de datos y probá que podés reproducirlo y explicarlo sin IA. | portafolio final; paquete reproducible | Defensa final del portafolio | `portfolio/16-cierre-defensa.md` | Pendiente |


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
