# EVA

Website for EVA feminine hygiene vending machines in Moscow. It is built with Next.js, TypeScript, Motion, React Hook Form, Zod and Supabase.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in the variables.
4. Run `npm run dev` and open `http://localhost:3000`.

Run `npm run build` before deployment.

## Supabase and forms

Create a Supabase project and execute `supabase/migrations/20260913000000_create_eva_inquiries.sql` in its SQL editor. The browser never receives `SUPABASE_SERVICE_ROLE_KEY`: the API routes use it only on the server. Without Supabase variables, form submission safely returns a configuration error instead of pretending to save a request.

## Telegram notification

1. Open BotFather in Telegram and create a bot.
2. Copy its token to `TELEGRAM_BOT_TOKEN`.
3. Send any message to the bot, then obtain the chat id through Telegram’s Bot API or a trusted chat-id helper.
4. Set `TELEGRAM_CHAT_ID` and submit a test form.

The request is saved before a Telegram notification is attempted. A notification error is logged server-side and does not lose the request.

## Deployment

Deploy to Vercel, copy every variable from `.env.example` into the project’s environment settings and set `NEXT_PUBLIC_SITE_URL` to the production URL. No analytics, pixels, CRM integrations or cookie banner are included.

## Content and assets

- `src/content/site-content.ts` holds Russian and English copy, calls to action, assortment and locations.
- `src/config/site.ts` holds contacts, messenger URLs and feature flags. Telegram and MAX are intentionally hidden until real URLs are supplied.
- `src/styles/tokens.css` holds the palette and shape tokens.
- Replace the CSS machine illustration with the approved `public/images/machine/eva-machine-source.jpg` when it is available.
- Replace the text logo when final SVG or PNG branding is supplied.

## Required before launch

- Final EVA logo in SVG or PNG.
- Approved photographs of machines and, after installation, locations.
- Live Telegram and MAX URLs.
- Telegram bot token and chat id.
- Supabase credentials.
- Legally verified data-controller details for the privacy policy.
- Confirmed product list, brands and prices.
- Written permission for any third-party logos, photos or trademarks.

## Second phase ideas

Machine map, QR-based location pages, per-location assortment and pricing, multilingual airport pages, optional photo upload for fault reports, an admin workspace, analytics after a deliberate consent decision, and a separate partner presentation.
