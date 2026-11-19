# New Steam & Press Co. Ltd

Premium website for **NEW STEAM & PRESS CO. LTD** — professional dry cleaning and laundry services in Stoneleigh, Surrey.

## Features

- Luxury black, gold and cream brand experience
- Full-screen hero with clear booking CTAs
- Drive-up & drop-off guidance (no invented drive-through claims)
- Free collection & delivery messaging with WhatsApp handoff booking
- Image-led services, how-it-works, why-choose and contact sections
- Sticky navigation, floating WhatsApp button, Google Maps embed
- Privacy Policy and Terms pages

## Run locally

```bash
npm install
npm run dev -- --port 3847
```

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Booking behaviour

The booking and contact forms prepare a clear confirmation screen, then hand off to WhatsApp with a pre-filled message. They do **not** pretend a backend booking was submitted.

WhatsApp number used: `+44 7447 588177`

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
