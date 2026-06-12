Child Binder API

A minimal Express API to receive form submissions and store them in SQLite.

Quick start:

```bash
cd server
npm install
npm start
```

Endpoints:

- `GET /api/health` — health check
- `POST /api/forms/:formId` — save a submission (JSON body)
  - Returns `{ id: <submissionId> }`
- `GET /api/forms/:formId/submissions` — list submissions for a form
- `GET /api/submissions/:id` — fetch a single submission

Database:
- Submissions are stored in `server/data/forms.json` (JSON file store).

Note: This was switched to a JSON fallback to avoid native build issues on Windows. For production you can replace it with SQLite or another DB and update `server/db.js` accordingly.

Notes:
- This is a minimal starting point. For production use add validation, authentication, rate-limiting, and error handling.
