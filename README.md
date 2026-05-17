# Namwingwe TechRise

Website for [Namwingwe TechRise](https://namwingwetechrise.org) — empowering Ugandan women with hands-on training in web development, graphic design, and UI/UX design.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tooling
- **Tailwind CSS** + **shadcn/ui** — styling and components
- **Supabase** — contact form and newsletter submissions
- **Framer Motion** — animations
- **React Router** — client-side routing

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```sh
# Clone the repo
git clone https://github.com/katekuehl/namwingwe.org.git
cd namwingwe.org

# Install dependencies
npm install

# Copy the environment file and fill in your Supabase credentials
cp .env.example .env

# Start the dev server at http://localhost:8080
npm run dev
```

## Environment Variables

Create a `.env` file from `.env.example`:

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/public key |

## Scripts

```sh
npm run dev       # Dev server with HMR
npm run build     # Production build
npm run preview   # Preview the production build locally
npm run lint      # ESLint
npm run test      # Run tests (Vitest)
```

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

**Required GitHub repository secrets:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

To enable Pages: repo **Settings → Pages → Source → GitHub Actions**

## Database

Supabase migrations live in `supabase/migrations/`. Run them with the Supabase CLI:

```sh
supabase db push
```

The schema includes:
- `contact_submissions` — contact form entries (admin-only read)
- `newsletter_subscribers` — newsletter signups (admin-only read)
- `user_roles` — role-based access control

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/
│   ├── layout/      # Header, Footer
│   ├── sections/    # Page sections (Hero, About, Contact…)
│   └── ui/          # shadcn/ui primitives
├── data/            # Site content and blog posts
├── hooks/           # Custom React hooks
├── integrations/    # Supabase client and types
├── pages/           # Route-level page components
└── lib/             # Utility functions
```

## Contact

**Namwingwe TechRise** · Kampala, Uganda  
namwingwetechrise@gmail.com · +256 786 946529
