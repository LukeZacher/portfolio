# lukezacher.com

My personal portfolio site, showcasing my experience, skills, and a little about me personally.

**Live:** [lukezacher.com](https://lukezacher.com)

## Tech stack

- **Next.js 16** (App Router) and **React 19**, written in **TypeScript** (strict mode)
- **Tailwind CSS v4**, with a custom set of design tokens
- **Zod** for validation, **Resend** for email, **Upstash Redis** for rate limiting
- Hosted on **Vercel**

## Highlights

- **Server Components by default.** Only the contact form and the mobile menu run in the browser. Everything else is plain HTML, and the homepage is fully static.
- **A contact form without an API route.** It submits to a Server Action, which validates input with the same Zod schema and length limits the form uses, then sends a plain-text email with the visitor's address as the reply-to.
- **Spam protection in layers.** Rate limiting (3 messages per visitor per 10 minutes, plus a site-wide daily cap) stops repeat submissions. If the rate-limit database is unreachable, the form fails open so real messages still get through, and the failure is logged.
- **Configuration that fails fast.** Environment variables are validated with Zod at startup, so a missing or malformed value stops the build instead of breaking in production.
- **Accessible by design.** Semantic landmarks, a skip link, visible focus styles, form errors announced to screen readers, and animations that respect reduced-motion settings.
- **Content as data.** Experience and skills live in typed data files, so updating the site means editing data, not markup.

## Project structure

```
src/
├── app/          # Routes, root layout, global styles
├── components/   # Shared layout and UI components
├── config/       # Site-wide settings (name, nav, social links)
├── features/     # One folder per page section (hero, experience, contact, ...)
├── lib/          # General utilities (env validation, Redis client, dates)
└── styles/       # Font setup
```

## Running locally

Requires Node.js 24 and pnpm.

```bash
pnpm install
cp .env.example .env.local   # then fill in the values
pnpm dev
```

The contact form needs a Resend API key and an Upstash Redis database. See `.env.example` for the variables.

| Script           | What it does                   |
| ---------------- | ------------------------------ |
| `pnpm dev`       | Start the development server   |
| `pnpm build`     | Create a production build      |
| `pnpm lint`      | Run ESLint                     |
| `pnpm typecheck` | Check types with TypeScript    |
| `pnpm format`    | Format all files with Prettier |

## Usage

The code is public so you can see how the site is built, and you're welcome to learn from it. The design, writing, and artwork are mine, so please don't use it without permission from me.
