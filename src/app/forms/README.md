Form conventions

- Place forms under `src/app/forms/<state>/` using the state's lowercase name (e.g. `kansas`).
- Use filenames in the format `PPS-<number>-<slug>.json` (e.g. `PPS-1001-new-case.json`).
- Each form JSON must include an `id` field matching the PPS identifier (e.g. `PPS-1001`).
- The `title` should start with the `id` for clarity (e.g. `PPS-1001 - New Case Intake Form`).

Registration

- Import the form in `src/app/forms/formTemplates.ts` and add entries to the `formTemplates` registry. Example:

  import kansasPps1001 from './kansas/PPS-1001-new-case.json';
  formTemplates[kansasPps1001.id] = kansasPps1001;
  formTemplates[`kansas/${kansasPps1001.id}`] = kansasPps1001;

Why this pattern

- State folders keep state-specific variations organized.
- PPS-prefixed filenames and IDs make it easy to match external form catalogs.
- Explicit registration keeps the loader predictable; for larger catalogs we can switch to `import.meta.glob` dynamic registration later.
