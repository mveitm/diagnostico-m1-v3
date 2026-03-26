Diagnóstico PAES M1 · Formulario final v1

Contenido
- index.html: formulario completo con 40 preguntas
- Code.gs: base para recibir los resultados en Google Sheets desde Apps Script

Características
- 40 preguntas integradas
- figuras incrustadas, sin dependencia de rutas locales de imagen
- guardado local
- cronómetro
- exportación a CSV y JSON
- resumen por eje y habilidad
- botón de envío a Google Sheets cuando se configure la URL del Web App

Uso local
1. Descomprime la carpeta.
2. Abre index.html en navegador.
3. Si en móvil abres el archivo, procura hacerlo desde la carpeta ya descomprimida.

Conexión con Google Sheets
1. Abre una planilla de Google Sheets.
2. Inserta un proyecto de Apps Script.
3. Pega el contenido de Code.gs.
4. Implementa como Web App con acceso para quien tenga el enlace.
5. Copia la URL del Web App.
6. En index.html, dentro de APP_CONFIG, pega esa URL en SHEETS_WEB_APP_URL.

Notas
- La estructura CSV/JSON coincide con Resultados_M1.
- Las figuras van en alto contraste.
- Queda pendiente validar visualmente M1_033 antes de congelar la clave final.


Correcciones v3:
- P6 corregida
- P8, P14, P20, P25 y P33 con figuras más legibles
- P16 con alternativas alineadas a la figura
- botón “Dejar omitida” agregado
