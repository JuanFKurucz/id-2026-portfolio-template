---
title: "Arranque y primera evidencia"
date: 2026-07-01
---

# Arranque y primera evidencia

## Objetivo

- **Clase o práctica:** Clase 1 - arranque del curso.
- **Objetivo:** dejar listo el portafolio personal y demostrar que sé dónde va la evidencia del curso.
- **Resultado visible:** sitio local o publicado, commit, captura o archivo editado.
- **Estado:** ruta mínima completa o bloqueo documentado.

## Configuración

- Plantilla de portafolio 2026 sobre rama `main`.
- Entorno local y versión de Python usados para el build.
- Commit que contiene esta primera entrada.

## Run o traza

No aplica MLflow. Registrá el SHA del commit y la salida de `mkdocs build --strict` o del workflow de calidad.

## Resultado y comparación

Compará el contrato esperado —build correcto y páginas accesibles— con el resultado observado. Si falla, conservá el mensaje y la página afectada.

## Evidencia

- Link o captura del portafolio.
- Archivo `docs/acerca.md` editado.
- Captura o salida de `mkdocs serve` o `mkdocs build --strict`.

## Reproducibilidad

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Si la publicación falla, guardá una captura local y el error concreto.

## Decisiones y límites

- **Decisión técnica:** usar este repo como portafolio editable, no como sitio de consignas.
- **Alternativa descartada:** entregar evidencia suelta sin contexto.
- **Límite:** todavía no hay evidencia técnica profunda; esta entrada solo prueba el arranque.
- **Riesgo:** confundir repo de trabajo, sitio de tareas, portafolio y WebAsignatura.

## Siguiente experimento

Abrí la URL publicada en una ventana privada y comprobá portada, mapa y esta entrada. Si todavía no hay Pages, repetí el build desde un checkout limpio.

## Uso de IA

- **Nivel usado:** A0 si no usaste IA; A1-A3 si pediste ayuda.
- **Qué verifiqué manualmente:** que los archivos existen y el sitio abre o compila.

## Microdefensa

La consigna se lee en el sitio de tareas; mi evidencia se guarda en este portafolio; la entrega formal será el link o archivo que pida WebAsignatura.
