# OpsCove Solutions — marketing site

Next.js 14 (App Router), TypeScript, no CSS framework.

## Run it

    npm install
    npm run dev

Open http://localhost:3000

## Structure

    app/layout.tsx      Fonts (Archivo + Archivo Black via next/font), metadata
    app/page.tsx        The whole landing page
    app/globals.css     Tokens, marquee, hover states, reveal animation
    components/         Header (mobile menu), Faq (accordion), Reveal (scroll)
    lib/content.ts      All copy and data
    public/images/      Your photographs — see README.txt in that folder

## Editing copy

Everything readable lives in `lib/content.ts` except the hero, problem
headline and CTA, which sit inline in `app/page.tsx`.

## Colours

Defined once as CSS custom properties at the top of `app/globals.css`.

## Images

Uses `next/image` with local files. No third-party image host, no credit
overlays. Add your files to `public/images/` with the names listed there.

## Deploy

    npm run build && npm run start

Or push to Vercel and it builds with zero config.
