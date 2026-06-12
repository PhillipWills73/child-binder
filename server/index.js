const express = require('express');
const cors = require('cors');
const initDb = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const db = initDb();

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/forms/:formId', (req, res) => {
  const { formId } = req.params;
  const payload = req.body || {};

  const id = db.insertSubmission(formId, payload);
  res.json({ id });
});

app.get('/api/forms/:formId/submissions', (req, res) => {
  const { formId } = req.params;
  const rows = db.getSubmissions(formId);
  res.json(rows.map(r => ({ ...r, payload: r.payload })));
});

app.get('/api/submissions/:id', (req, res) => {
  const { id } = req.params;
  const row = db.getSubmission(id);
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json(row);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Form API listening on http://localhost:${port}`);
});
