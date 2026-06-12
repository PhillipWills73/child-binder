const path = require('path');
const fs = require('fs');

// Simple JSON-file-backed store to avoid native dependencies on Windows.
module.exports = function initDb() {
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const file = path.join(dataDir, 'forms.json');

  let state = { lastId: 0, submissions: [] };
  if (fs.existsSync(file)) {
    try {
      state = JSON.parse(fs.readFileSync(file, 'utf8')) || state;
    } catch (e) {
      console.error('Failed to parse forms.json, starting fresh', e);
    }
  }

  function persist() {
    fs.writeFileSync(file, JSON.stringify(state, null, 2), 'utf8');
  }

  return {
    insertSubmission(formId, payload) {
      const id = ++state.lastId;
      const now = new Date().toISOString();
      const row = { id, form_id: formId, payload, created_at: now, updated_at: now };
      state.submissions.unshift(row);
      persist();
      return id;
    },

    getSubmissions(formId) {
      return state.submissions.filter(s => s.form_id === formId);
    },

    getSubmission(id) {
      return state.submissions.find(s => s.id === Number(id)) || null;
    }
  };
};
