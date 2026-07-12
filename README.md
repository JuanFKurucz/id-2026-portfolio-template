# Plantilla de portafolio Ingeniería de Datos 2026

Este repositorio sí se edita: es la base del portafolio personal para **Ingeniería de Datos**. No es el sitio de tareas ni el syllabus.

## Primeros 30 minutos

1. Abrí `docs/index.md` y seguí el onboarding.
2. Editá `docs/acerca.md` con una presentación breve.
3. Creá o ajustá `docs/portfolio/01-primera-entrada.md`.
4. Revisá `docs/politica-uso-ia.md`.
5. Probá el sitio localmente antes de entregar el link.

## Cómo crear una entrada defendible

1. Copiá `docs/portfolio/plantilla.md`.
2. Guardá la nueva entrada en `docs/portfolio/` con nombre ordenado, por ejemplo `02-eda.md`.
3. Incluí objetivo, evidencia, reproducibilidad, decisiones, límites, uso de IA y microdefensa.
4. Enlazá notebooks, capturas, logs, contratos o resultados con rutas relativas.
5. Entregá en WebAsignatura solo el link o archivo pedido por el docente.

## Ejecutar localmente

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

## Verificar

```bash
mkdocs build --strict
```

## No subas

- claves reales, `.env`, tokens o credenciales;
- datos privados de estudiantes, clientes o terceros;
- historiales completos de chat con información sensible;
- datasets privados, dumps pesados o credenciales de nube sin permiso;
- contenido generado por IA sin declaración y verificación manual.

## Validación formativa

Cada push ejecuta **Calidad del portafolio**:

- valida los estados del [mapa de evidencias](docs/portfolio/mapa-evidencias.md);
- comprueba que una fila en `Mínimo`, `Defendible` o `Revisado` tenga su entrada y las secciones esenciales;
- detecta enlaces locales rotos y posibles secretos;
- construye MkDocs en modo estricto.

Los errores bloquean la publicación por seguridad o estructura. Las advertencias orientan mejoras, pero no sustituyen la devolución docente. El workflow no ejecuta notebooks ni código del estudiante. Cuando la calidad pasa en `main`, Pages publica el sitio automáticamente.
