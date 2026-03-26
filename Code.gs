const SHEET_NAME = 'Resultados_M1';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    const headers = ['timestamp_envio','attempt_id','nombre','apellido','correo','ID','Eje','Habilidad','Pregunta','Respuesta','Resultado','Correcta'];
    if (sh.getLastRow() === 0) {
      sh.getRange(1,1,1,headers.length).setValues([headers]);
    }

    const rows = (payload.rows || []).map(r => headers.map(h => r[h] ?? ''));
    if (rows.length) {
      sh.getRange(sh.getLastRow()+1, 1, rows.length, headers.length).setValues(rows);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok:true, rows: rows.length }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok:false, message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
