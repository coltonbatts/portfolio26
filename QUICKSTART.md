# Quick Start Guide

Get your portfolio running in 5 minutes.

## 1. Install Dependencies

```bash
cd /Users/coltonbatts/Projects/coltonbatts-portfolio
npm install
```

## 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. Make Changes

- Edit pages in `/app`
- Update projects in `/data/projects.ts`
- Modify styles in `/app/globals.css` or `/tailwind.config.ts`

Changes auto-reload in the browser.

## 4. Build for Production

```bash
npm run build
npm start
```

## 5. Deploy to Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions.

---

## Project Structure at a Glance

```
app/               → Pages (/, /about, /contact, /projects/[slug])
components/        → Reusable components (Header, Hero, ProjectCard, etc.)
data/              → Static data (projects.ts)
public/            → Static assets
globals.css        → Global styles
tailwind.config.ts → Tailwind customization
vercel.json        → Vercel deployment config
```

## Key Files to Edit

- **Homepage:** `app/page.tsx`
- **About page:** `app/about/page.tsx`
- **Contact page:** `app/contact/page.tsx`
- **Project data:** `data/projects.ts`
- **Colors & fonts:** `tailwind.config.ts` or `app/globals.css`

## Deployment Checklist

Before going live:

- [ ] Update email: `hello@coltonbatts.com` → your email
- [ ] Update social links in Header/Footer components
- [ ] Verify all 3 projects display correctly
- [ ] Test contact form
- [ ] Test on mobile
- [ ] Follow DEPLOYMENT.md instructions

---

Ready to deploy? → [DEPLOYMENT.md](./DEPLOYMENT.md)
