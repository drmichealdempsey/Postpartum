# Postpartum Depression Support Campaign

A Next.js landing page + email signup for fundraising campaign supporting women experiencing postpartum depression, with a focus on the Lindsay Clancy case.

## What's Included

- **Landing page** with hero, story, gaps, solutions, progress, and email signup
- **Supabase integration** for storing email signups and campaign stats
- **Responsive design** that works on mobile and desktop
- **Ready for Vercel deployment**

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Once created, go to **Settings → API** and copy:
   - `Project URL` (paste into `NEXT_PUBLIC_SUPABASE_URL`)
   - `anon public` key (paste into `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
3. Paste these into `.env.local`

### 3. Create Supabase tables

In Supabase dashboard, go to **SQL Editor** and run:

```sql
-- Campaign stats table
CREATE TABLE campaign_stats (
  id SERIAL PRIMARY KEY,
  funds_raised INTEGER DEFAULT 34500,
  donor_count INTEGER DEFAULT 1240,
  goal_amount INTEGER DEFAULT 100000,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Email signups table
CREATE TABLE campaign_signups (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert default stats row
INSERT INTO campaign_stats (funds_raised, donor_count, goal_amount) 
VALUES (34500, 1240, 100000);
```

### 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`

## File Structure

```
postpartum-campaign/
├── pages/
│   ├── _app.tsx          # Next.js app wrapper
│   └── index.tsx         # Main landing page
├── lib/
│   └── supabase.ts       # Supabase client
├── .env.local            # Your credentials (don't commit this)
├── package.json
├── tsconfig.json
└── README.md
```

## How It Works

### Email Signups

The form on the page saves emails to Supabase. Each signup includes:
- `email` (required, unique)
- `name` (optional)
- `message` (optional - "why this matters to you")
- `created_at` (auto-generated)

Check signups in Supabase: **Data Editor → campaign_signups**

### Campaign Stats

The page fetches progress stats from Supabase:
- `funds_raised` — currently $34,500
- `donor_count` — currently 1,240
- `goal_amount` — target is $100,000

**To update these in Supabase:**

1. Go to **Data Editor → campaign_stats**
2. Click the row and edit the values
3. The page will fetch the latest data automatically (refresh to see updates)

## Editing the Frontend

All styles and content are in `pages/index.tsx`. To customize:

### Change colors
Search for `#3b82f6` (blue), `#dc2626` (red), etc. and swap hex values.

### Change text
Find the section you want to edit (Hero, Story, Gaps, Solution, etc.) and modify the text directly.

### Add your images
1. Create `public/` folder in the root
2. Add images there (e.g., `public/hero-image.jpg`)
3. Import: `<img src="/hero-image.jpg" alt="..." />`

### Change donation tiers
Find the `.donation-tiers` section and edit amounts/names.

### Modify stats displayed
Edit the `CampaignStats` interface and fetch logic in the `useEffect` hook.

## Connecting Payment (Later)

The "Donate Now" button currently doesn't do anything. When ready to add payments:

### Option 1: Stripe
```bash
npm install @stripe/stripe-js
```

Create `pages/api/checkout.ts` to handle checkout sessions.

### Option 2: Givebutter
Use their embed code or API to redirect to their donation page.

### Option 3: Paystack (Nigeria)
```bash
npm install @paystack/inline-js
```

Create donation handler in `pages/api/paystack.ts`.

## Deploying to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/drmichealdempsey/Postpartum.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **New Project**
3. Import your GitHub repo
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**

Your site is now live!

### 3. Update site after changes

```bash
# Make changes in VS Code
# Push to GitHub
git add .
git commit -m "Update messaging"
git push

# Vercel auto-deploys ~1 min later
```

## Environment Variables

`.env.local` is needed locally but **never commit it**. It's already in `.gitignore`.

On Vercel, add env vars in **Project Settings → Environment Variables**.

## Troubleshooting

### "Missing Supabase environment variables"
Make sure `.env.local` has both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

### Email signup not saving
1. Check Supabase dashboard → **Auth → Logs** for errors
2. Verify `campaign_signups` table exists
3. Check browser console for error messages

### Stats not updating
1. Make sure `campaign_stats` table has at least one row
2. Refresh the page (stats fetch on page load)
3. Check browser console for fetch errors

### Deployed site shows "Using default stats"
This means Supabase isn't connected. Add env vars to Vercel project settings.

## Questions?

- Edit `pages/index.tsx` for frontend changes
- Use Supabase dashboard to view/update data
- Push to GitHub to trigger Vercel deployment
- Check browser DevTools (F12) Console for errors

Good luck! 💙
