const SHEET_NAME = 'Resultados_M1';
const HEADERS = ['timestamp_envio','attempt_id','nombre','apellido','correo','ID','Eje','Habilidad','Pregunta','Respuesta','Resultado','Correcta'];

function doGet() {
  return jsonOutput({ ok: true, service: 'Resultados_M1', sheet: SHEET_NAME, timestamp: new Date().toISOString() });
}

function doPost(e) {
  try {
    const payload = readPayload_(e);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    ensureHeaders_(sh);

    const rows = (payload.rows || []).map(r => HEADERS.map(h => r[h] ?? ''));
    if (rows.length) {
      sh.getRange(sh.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);
    }

    return jsonOutput({ ok: true, rows: rows.length, attempt_id: payload.student?.attempt_id || '' });
  } catch (err) {
    return jsonOutput({ ok: false, message: String(err) });
  }
}

function readPayload_(e) {
  const raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '';
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch (_) {
    try {
      return JSON.parse(decodeURIComponent(raw));
    } catch (_) {
      throw new Error('No se pudo interpretar el payload recibido.');
    }
  }
}

function ensureHeaders_(sh) {
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sh.setFrozenRows(1);
    return;
  }
  const current = sh.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const mismatch = HEADERS.some((h, i) => current[i] !== h);
  if (mismatch) {
    sh.insertRowBefore(1);
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sh.setFrozenRows(1);
  }
}

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
