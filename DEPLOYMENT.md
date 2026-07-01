# PRN Staffers Alabama Deployment

This repository is ready for deployment as the public PRN Staffers Alabama home care website.

## Runtime

- Node.js: `>=20.9.0`
- Package manager: `pnpm@11.7.0`
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Check command: `pnpm check`

## Environment

Copy `.env.example` into the Vercel project settings.

```bash
NEXT_PUBLIC_SITE_URL=https://prnstaffersal.com
NEXT_PUBLIC_EMAIL=care@prnstaffersal.com
NEXT_PUBLIC_PHONE=
NEXT_PUBLIC_CONSULTATION_URL=
NEXT_PUBLIC_CAREERS_URL=
```

`NEXT_PUBLIC_CONSULTATION_URL` can point to a scheduling form. `NEXT_PUBLIC_CAREERS_URL` can point to an applicant tracking form. If either is blank, the site falls back to email links.

Production metadata, canonical URLs, Open Graph URLs, sitemap entries, and
robots.txt always use `https://prnstaffersal.com`. Localhost is used only by the
development server.

## Vercel Setup

1. Import the existing GitHub repository.
2. Select the Next.js framework preset.
3. Set the install and build commands above.
4. Add the environment variables.
5. Set the production branch to `main`.
6. Add `prnstaffersal.com` as the primary production domain.
7. Add `www.prnstaffersal.com` and configure it to redirect to `https://prnstaffersal.com`.

## DNS Records

Use these standard Vercel DNS records unless Vercel gives project-specific instructions:

```text
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

After DNS propagation, Vercel should issue HTTPS/SSL automatically for both `prnstaffersal.com` and `www.prnstaffersal.com`.

## Preflight

Run this before promoting a deployment:

```bash
pnpm install --frozen-lockfile
pnpm check
```
