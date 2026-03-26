# Checklist de despliegue · Diagnóstico PAES M1

## 1. Publicación rápida en GitHub Pages
1. Crear o usar un repositorio en GitHub.
2. Subir el contenido de esta carpeta a la raíz del repositorio.
3. Ir a **Settings > Pages**.
4. En **Build and deployment**, elegir:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (o la rama usada)
   - **Folder:** `/root`
5. Guardar.
6. Esperar la URL pública.
7. Probar en computador y móvil.

## 2. Prueba funcional mínima
- Abrir portada
- Ingresar nombre, apellido y correo
- Iniciar diagnóstico
- Responder al menos 3 preguntas
- Verificar cronómetro
- Verificar resumen final
- Descargar CSV
- Descargar JSON

## 3. Conexión a Google Sheets
1. Crear una Google Sheet.
2. Crear pestaña `Resultados_M1`.
3. Abrir Apps Script.
4. Pegar `Code.gs`.
5. Implementar como Web App.
6. Copiar la URL.
7. Pegar la URL en `APP_CONFIG.SHEETS_WEB_APP_URL` dentro de `index.html`.
8. Publicar nuevamente o volver a probar local.
9. Verificar que una respuesta de prueba cree filas en `Resultados_M1`.

## 4. Validaciones antes de enviar a estudiantes reales
- Revisar visualmente M1_033
- Revisar contraste de todas las figuras
- Probar en Android
- Probar en computador
- Verificar que el CSV respete columnas de `Resultados_M1`
- Verificar que el correo no quede vacío en pruebas reales

## 5. Criterio de cierre operativo
El formulario puede considerarse listo para uso real cuando:
- Se vea bien en móvil y escritorio
- Exporte CSV y JSON correctamente
- Envíe correctamente a Google Sheets
- M1_033 quede validada visualmente
