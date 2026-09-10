# Setup & Deployment Quick Guide

## Local Development

```bash
# 1. Install
npm install

# 2. Add .env.local (ask me for the values if unsure)
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# 3. Run
npm run dev

# 4. Visit http://localhost:3000
```

## Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

(First time: `git remote add origin https://github.com/drmichealdempsey/Postpartum.git`)

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **New Project**
3. Select your GitHub repo
4. Add env vars (same as .env.local)
5. Click **Deploy**

**That's it.** Every `git push` auto-deploys.

## Edit & Redeploy

```bash
# 1. Edit pages/index.tsx in VS Code
# 2. Test locally: npm run dev
# 3. Push to GitHub
git add .
git commit -m "Update copy"
git push

# 4. Vercel deploys automatically (~1-2 min)
```

## Update Campaign Stats

1. Go to Supabase dashboard
2. Find **campaign_stats** table
3. Edit `funds_raised`, `donor_count` directly
4. Refresh the live site

## View Email Signups

1. Go to Supabase dashboard
2. Click **campaign_signups** table
3. You'll see all emails, names, messages

---

**Need to add payment later?** Ask. I can hook up Stripe/Givebutter/Paystack quickly.
