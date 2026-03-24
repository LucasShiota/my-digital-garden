---
description: Archive old changelog entries to keep history manageable
---

# Archive Logs Workflow - Portfolio Edition

Use this workflow once every 6-12 months or when `.doc/refinement_log.md` exceeds 500 lines to keep the active documentation concise and fast to read.

## Step 1: Identification & Selection

Identify the oldest 50-100 entries:

- **Archival Threshold**: Any entries older than 6 months or 2 major site versions.
- **Copy**: Extract the content intended for archival.

## Step 2: Implementation (The Vault)

Perform the archival safely:

- **Vault File**: Create or update `.doc/refinement_log_archive_[year].md`.
- **Formatting**: Preserve the original entry structure (Dates, Headings, Categories).
- **Update Active Log**: Remove the archived entries from the main `.doc/refinement_log.md`.

## Step 3: Verification (The Link)

- **Entry Point**: Add a small "Archived Logs" section at the bottom of the active `refinement_log.md` with links to the corresponding archive files.
- **Navigation**: Check that the links from the active log to the archive file work.

## Step 4: Finalization

- Update the active `refinement_log.md` to reflect the archival action.
- Commit with `chore(docs): archive outdated refinement log entries`.
