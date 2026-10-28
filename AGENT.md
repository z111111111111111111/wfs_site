# Agent Notes — Font Audit

## Query
User asked about font named "thmanya" (ثمانية) claiming there are "8 fonts of different types".

## Finding
**No font named "thmanya" or "ثمانية" exists in the project.**
- Searched entire codebase: `grep -r "thmanya|ثمانية|thamania|thamanya"` → **0 matches**
- Searched for font-related patterns: only IBM Plex Sans Arabic and JetBrains Mono found.

## Actual Fonts in Project

| Font Family | Type | Weights/Files | Where Used |
|-------------|------|---------------|------------|
| **IBM Plex Sans Arabic** | Sans-Serif (Primary) | 4 weights (400, 500, 600, 700) = 4 font files | Global `font-sans` via Tailwind; all UI, headings, body, tables, buttons |
| **JetBrains Mono** | Monospace | 4 weights (loaded in Halftone component only) | `HalftoneWordmarkFooter` via `MONO_STACK` constant |
| **System Mono Stack** | Monospace (fallback) | Browser defaults | `font-mono` utility (Tailwind default, not configured in `tailwind.config.ts`) |

## Why "8" might be confused
- IBM Plex Sans Arabic: **4 font files** (one per weight)
- JetBrains Mono (in Halftone): typically **4 font files** (400/500/600/700)
- **Total = 8 font files** — not 8 font families.

## Configuration Files
- `src/app/layout.tsx` — loads IBM Plex Sans Arabic via `next/font/google`
- `tailwind.config.ts` — defines only `fontFamily.sans`; `fontFamily.mono` not customized
- `src/app/globals.css` — applies `font-sans` to body, `font-mono` to `code`/`pre`
- `src/components/ui/halftone-wordmark-footer.tsx` — defines `MONO_STACK = "JetBrains Mono, SF Mono, ui-monospace, Menlo, Consolas, monospace"`

## Conclusion
Only **2 font families** are used. No "thmanya" font exists in this codebase.