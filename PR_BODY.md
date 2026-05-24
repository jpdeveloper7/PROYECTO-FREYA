Resumen de cambios realizados:

- Unificado `src/firebase.js` y eliminado re-export duplicado.
- Corregidas rutas de fuentes y assets para usar `/ASSETS/...` y evitar 404 en producción.
- Space Mono cargado desde Google Fonts para evitar bloqueo por CSP.
- Actualizada configuración de CI a usar actions v5 y Node.js 24.
- Añadida restricción `engines.node: ">=18"` y `.nvmrc` para entornos reproducibles.
- Añadidos mocks y ajustes para Jest (transformIgnorePatterns y moduleNameMapper).

Qué revisar en el PR:
- Que los tests en GitHub Actions pasen (se ejecutan con Node 24).
- Verificar que la app se despliega en Vercel y las rutas `/ASSETS` resuelven.
- Probar flujo de subida/visualización de avatar en entorno desplegado.

Notas:
- Los tests locales fallan si la máquina usa Node < 18; usa `nvm` o instala Node 18+ para reproducir localmente.

Marcado por: automatización del repo — revisa los cambios y aprueba cuando estés listo.
