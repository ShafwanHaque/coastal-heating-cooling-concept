# Wynn Creek AC Concept — HVAC Website

A standalone Next.js concept project based on the supplied HVAC template and personalized for Wynn Creek AC. It includes the complete `src` application, styling, local image assets, and pnpm lockfile.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000). Use `pnpm build` to create a production build and `pnpm start` to run it.

## Project notes

- Business details, theme, services, service area, and contact information are in `src/config/site.config.ts`.
- Wynn Creek’s supplied logo is used in the header and intro; brand assets and photos are local in `public/`.
- The request form is in preview mode and does not send submissions. Connect a secure form endpoint before using it to accept leads.
- The service-area map loads OpenStreetMap tiles and needs internet access.
- Business details were adapted from the public site; confirm them with the business before publishing.

Source: https://www.wynncreekac.com/
