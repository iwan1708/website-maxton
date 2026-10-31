# MAXTON prototype

Responsive static website with no external runtime dependencies. All sections are accessible from the menu. Service details and learning topics expand; WhatsApp links open prefilled messages for the appropriate team. Original event poster opens full size.

## Preview

Requires Node.js 18 or newer. Run `npm run dev`, then open http://127.0.0.1:4173. Stop with Ctrl+C. Alternatively open index.html directly.

## Checks and build

Run `npm test` and `npm run build`. Build output: dist/. No package installation or environment variables are required.

## Vercel

Import iwan1708/website-maxton, choose the branch containing this prototype, select Other as framework. The included vercel.json supplies npm run build and dist as output directory. No environment variables required. The site uses anchor navigation rather than server routes.

Before production, review CONTENT-SOURCES.md and supply the missing BMC, Brand Guidelines and Premium Target Market PDFs to confirm flagship offer names and brand details.
