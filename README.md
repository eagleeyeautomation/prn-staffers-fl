# PRN Staffers Florida Website

Modern Next.js website for PRN Staffers Florida, a non-medical home care provider serving seniors, veterans, and families across Florida communities.

## Local Development

```bash
pnpm install
pnpm dev
```

## Production

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm start
```

## Deployment

This app is ready for Vercel or any Node host that supports Next.js.

- Node.js: `>=20.9.0`
- Package manager: `pnpm@11.7.0`
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Check command: `pnpm check`
- Start command: `pnpm start`

Set these environment variables in the deployment target:

```bash
NEXT_PUBLIC_SITE_URL=https://prnstaffersfl.com
NEXT_PUBLIC_CONTACT_EMAIL=care@prnstaffersfl.com
NEXT_PUBLIC_CONTACT_PHONE=
NEXT_PUBLIC_CONSULTATION_URL=
NEXT_PUBLIC_CAREERS_URL=
```

Production URL generation always resolves to `https://prnstaffersfl.com`.
Local development falls back to `http://localhost:3000` only when running the
development server.

Leave `NEXT_PUBLIC_CONSULTATION_URL` and `NEXT_PUBLIC_CAREERS_URL` blank to route requests through email. Add `NEXT_PUBLIC_CONTACT_PHONE` when the public phone number is ready to display.

## Content

- Homepage: `app/page.tsx`
- Shared content and navigation: `app/site-content.tsx`
- Global styles: `app/globals.css`
- SEO metadata: `app/layout.tsx`
- Sitemap: `app/sitemap.ts`

The site is intentionally focused on non-medical home care and does not claim skilled nursing services.

## Production Domain

Primary domain: `https://prnstaffersfl.com`

The `www` host should redirect permanently to the apex domain:

```text
https://www.prnstaffersfl.com/* -> https://prnstaffersfl.com/*
```
