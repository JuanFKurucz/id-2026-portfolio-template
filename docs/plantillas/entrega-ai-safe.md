---
title: "Plantilla de entrega AI-safe"
date: 2026-07-01
---

# Plantilla de entrega AI-safe

## 0. Qué copiar a tu portafolio

- En el portafolio: objetivo, evidencia seleccionada, reproducibilidad, decisión propia, límite y declaración de IA.
- En WebAsignatura: entregá solo el link o archivo pedido por la consigna.
- No publiques respuestas A0 completas, notas, feedback docente privado, `.env`, tokens ni datos privados.

## 1. Declaración de uso de IA

| Campo | Respuesta |
|---|---|
| Nivel usado | A0 / A1 / A2 / A3 / A4 |
| Herramienta |  |
| Para qué ayudó |  |
| Qué acepté |  |
| Qué modifiqué |  |
| Qué verifiqué manualmente |  |
| Qué rechacé |  |

## 2. Bitácora representativa

| Interacción | Objetivo | Resultado | Verificación humana |
|---|---|---|---|
| 1 | Ejemplo: depurar una consulta SQL | La IA sugirió revisar cardinalidad | Ejecuté conteos antes/después y documenté el join |

## 3. Reproducibilidad

```bash
python -m pip install -r requirements.txt
mkdocs build --strict
```

Indicá también notebook, script, dataset permitido, outputs y comandos mínimos de tu evidencia técnica.

## 4. Microdefensa

Respondé:

- Qué parte defendés sin IA.
- Qué decisión técnica tomaste.
- Qué evidencia prueba tu resultado.
- Qué límite o riesgo queda.
