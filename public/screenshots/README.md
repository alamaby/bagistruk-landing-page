# Screenshot Placeholders

These SVG files are placeholders for the landing-page Screenshots section
and the `/docs/*` detail pages. Replace each with a real app capture when
the UI is final.

## How to replace

1. Capture a portrait phone screenshot (PNG or JPEG, ideally 1080×1920).
2. Save it next to the SVG it replaces, e.g.
   `public/screenshots/scan-receipt.png`.
3. Update the `src` in `src/content.ts` (`screenshots.items`) and in
   `src/docsContent.ts` (`screenshot` field) from `.svg` to `.png`.
4. Delete the SVG once no reference remains.
5. Rebuild (`npm run build`) and check `/`, `/id`, `/docs`, and one
   `/docs/<slug>` page.

## Suggested captures

- `scan-receipt`: Scan tab with photo previews, Add Photos + Scan buttons.
- `review-bill`: Review screen with merchant, date, currency chip, items, tax/service, total, Save.
- `split-bill`: Split screen with 2+ participants, one avatar active, assigned items.
- `settlement`: Bill detail with settled badge, totals, participant list, paid toggles, share + export.
- `manual-bill`: Review screen started from New manual (empty items + hint).
- `participants`: Split screen suggestion chips / contact picker.
- `reminders`: Bill detail with reminder opt-in or a fired local notification.
- `share-link`: Bill detail share-link section (link + expiry + revoke).
- `export`: Share sheet with PDF/CSV/XLSX options (Plus).
- `history`: History tab with summary card, window banner, bill list, insight card (Plus).
- `search-category`: History with search field, category chips, filter sheet.
- `insight`: Monthly insight card (totals, trend, top merchants, by-category).
- `trash`: Deleted bills screen with countdown + retention label.
- `templates`: Templates sheet / duplicate menu.
- `plus-ocr`: Scanning state for Plus (priority status) or batch estimate.
- `credits`: Settings scan-credit status + Plus/credit packs area.
- `account`: Login/register or profile header (guest vs registered).
- `settings`: Settings tab (credits, Plus, currency, language, theme, bank info, deleted bills).
- `onboarding`: First-run onboarding slide.
- `ads-consent`: UMP consent message or Settings ad-privacy entry.
