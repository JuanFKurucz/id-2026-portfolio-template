---
title: "Plantilla de entrada de portafolio"
date: 2026-07-01
---

# Plantilla de entrada de portafolio

Copiá esta página para cada evidencia importante. La entrada no tiene que ser larga; tiene que ser defendible.

> [Completar] Reemplazá esta línea y las ayudas de cada sección por evidencia propia antes de marcar la entrada como `Mínimo`.

## Objetivo

- **Clase o práctica:** indicá la consigna o clase relacionada.
- **Objetivo:** qué querías demostrar.
- **Resultado visible:** archivo, gráfico, métrica, contrato, check, notebook, log o captura.
- **Estado:** ruta mínima completa, ruta completa parcial o extensión.

## Configuración

Registrá dataset o fixture, versión relevante, parámetros que cambian el resultado y presupuesto de tiempo o cómputo. Evitá copiar toda la configuración si no ayuda a repetir la decisión.

## Run o traza

Indicá el Run ID, commit, comando, build o check que ubica esta ejecución. Si no corresponde usar tracking, escribí `No aplica MLflow` y conservá la comprobación local equivalente; no inventes identificadores.

## Resultado y comparación

Contrastá el resultado con un baseline, control, contrato esperado o corrida anterior. Explicá qué diferencia observaste y qué permite afirmar.

## Evidencia

Incluí 1-3 evidencias concretas:

- enlace a notebook, script o commit;
- captura guardada en `docs/assets/`;
- tabla de métricas o perfilado;
- contrato de datos, check de calidad o log de ejecución;
- análisis de error o caso fallido.

## Reproducibilidad

Explicá cómo otra persona puede inspeccionar o repetir la evidencia:

```bash
python -m pip install -r requirements.txt
python scripts/run_demo.py
```

Si no hay script, indicá el notebook, dataset permitido y pasos mínimos. Si algo no corre, registrá el error y el plan de corrección.

## Decisiones y límites

- **Decisión técnica:** qué elegiste y por qué.
- **Alternativa descartada:** qué no hiciste y por qué.
- **Límite:** dato faltante, métrica débil, costo, sesgo, privacidad, hardware o dependencia externa.
- **Riesgo:** qué podría salir mal si se usa este resultado fuera de clase.

## Siguiente experimento

Definí una sola variación y qué resultado confirmaría, debilitaría o cambiaría la decisión actual.

## Uso de IA

- **Nivel usado:** A0, A1, A2, A3 o A4.
- **Para qué ayudó:** concepto, código, debugging, redacción, evaluación o diseño.
- **Qué verificaste manualmente:** prueba, comparación, lectura de fuente, ejecución local o defensa oral.
- **Qué rechazaste:** sugerencia incorrecta, inventada, insegura o fuera de alcance.

## Microdefensa

Respondé en 3-5 líneas:

- Qué evidencia defenderías sin IA.
- Qué pregunta sorpresa podrían hacerte.
- Qué cambiaría si el dato, la métrica o el requisito cambia.

## Revisión

Completá esta sección solo cuando cambies la fila a `Revisado`. Parafraseá la devolución útil; no publiques comentarios docentes privados ni datos de otras personas.

- **Devolución interpretada:** [Completar] Qué observación cambió tu lectura del trabajo.
- **Cambio realizado:** [Completar] Qué modificaste respecto de la versión anterior.
- **Comprobación:** [Completar] Qué prueba, comparación o artefacto demuestra la mejora.
- **Límite restante:** [Completar] Qué sigue sin resolverse o no puede afirmarse todavía.

## Referencias

Listá solo fuentes usadas realmente. Si usaste documentación, paper, post o notebook externo, explicá qué idea tomaste y cómo la verificaste.
