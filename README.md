# SEATOP AI — Next.js + TypeScript Migration

This project was converted from the original static HTML/CSS/JS website into a Next.js App Router project.

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Main files to edit

- `app/layout.tsx` — global layout, header, footer, canvas background
- `app/components/Header.tsx` — navigation menu
- `app/components/SiteEffects.tsx` — client-side interactions, filters, calculator, forms, WhatsApp link
- `lib/pages.ts` — migrated page content from the original HTML files
- `app/globals.css` — migrated CSS from `assets/style.css`
- `public/assets/` — logo, favicon and image assets

## Routes

- `/`
- `/ai-agents`
- `/ai-dropshipping`
- `/tastepilot`
- `/contact`

## Important config to change

Open `app/components/SiteEffects.tsx` and replace:

```ts
const SEATOP_CONFIG = {
  email: "hello@seatop.ai",
  whatsapp: "60000000000",
};
```

Use your real receiving email and WhatsApp number with country code, without the `+` sign.

## Notes for vibe coding

The page sections are stored as editable HTML strings in `lib/pages.ts` so AI coding tools can quickly change layout/content without breaking the shared Next.js shell. Later, you can refactor each section into dedicated React components when the design becomes stable.
