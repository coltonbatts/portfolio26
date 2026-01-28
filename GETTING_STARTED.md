# Getting Started with Your Portfolio

Welcome! You have a production-ready Next.js portfolio. Here's everything you need to know.

---

## 🎯 What's Here?

A complete, professional portfolio website featuring:
- **3 flagship projects** (Shop with Google, Kate Spade, Under Armour)
- **Individual project pages** with full case studies
- **Responsive design** (mobile-to-desktop)
- **Modern dark aesthetic** with Colton font design system
- **Production deployment** ready for Vercel

---

## 📚 Documentation Files

Read these in order based on what you need:

### 1. **QUICKSTART.md** (Start here!)
Get the site running locally in 5 minutes.
```bash
npm install
npm run dev
```

### 2. **PRODUCTION_LAUNCH.md** (For deployment)
Everything about launching to coltonbatts.com:
- Step-by-step GitHub setup
- Vercel deployment instructions
- Domain pointing guide
- Post-launch checklist

### 3. **DEPLOYMENT.md** (Detailed reference)
In-depth deployment guide with:
- Full GitHub workflow
- Vercel configuration
- DNS setup (both methods)
- Troubleshooting

### 4. **README.md** (Project overview)
Technical reference including:
- Project structure
- Feature list
- Performance info
- Environment variables

---

## 🚀 Quick Launch (3 Steps)

### 1️⃣ Push to GitHub
```bash
cd /Users/coltonbatts/Projects/coltonbatts-portfolio
git init
git add .
git commit -m "Initial commit: portfolio"
git remote add origin https://github.com/YOUR_USERNAME/coltonbatts-portfolio.git
git push -u origin main
```

### 2️⃣ Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

### 3️⃣ Point Domain
1. Vercel Dashboard → Settings → Domains
2. Add `coltonbatts.com`
3. Update nameservers at your domain registrar
4. Wait for DNS propagation (24-48 hours)

**Done!** Your site is live at coltonbatts.com 🎉

---

## 📂 Key Files to Edit

### **Content Updates**
- **Projects:** `/data/projects.ts`
- **About:** `/app/about/page.tsx`
- **Contact:** `/app/contact/page.tsx`
- **Homepage:** `/app/page.tsx`

### **Design & Styling**
- **Global styles:** `/app/globals.css`
- **Colors & fonts:** `/tailwind.config.ts`
- **Components:** `/components/*`

### **Contact Info**
Search for `hello@coltonbatts.com` and replace with your email:
- `/app/contact/page.tsx`
- `/components/Footer.tsx`
- `/components/CTA.tsx`
- `/app/layout.tsx`

---

## 💻 Development Commands

```bash
# Install dependencies (one time)
npm install

# Start development server (auto-reloads)
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Test production build locally
npm start

# Linting
npm run lint
```

---

## 🌐 Site Structure

```
Homepage (/)
├── Hero Section
├── Portfolio Grid (3 projects)
├── About Section
└── CTA Section

Project Detail Pages (/projects/[slug])
├── /projects/shop-with-google
├── /projects/kate-spade-fashion-week
└── /projects/under-armour-training

About Page (/about)
├── Bio
├── Skills
└── Contact CTA

Contact Page (/contact)
├── Contact Info
└── Contact Form
```

---

## 🎨 Design System

### Colton Font Specification
Used on all headings:
```css
font-family: Inter Bold (weight 700)
letter-spacing: -0.03em
line-height: 1.2
```

### Color Palette
- **Dark:** `#0a0a0a` (background)
- **Light:** `#f5f5f5` (text)
- **Accent:** `#6366f1` (buttons/highlights)

### Responsive Breakpoints
- Mobile: 320px
- Tablet: 768px (md)
- Desktop: 1024px (lg)

---

## 📋 Pre-Launch Checklist

Before going live:

- [ ] Update your email address (replace `hello@coltonbatts.com`)
- [ ] Update social media links (Instagram, LinkedIn)
- [ ] Update your location if not NYC
- [ ] Test all 3 projects load correctly
- [ ] Test contact form
- [ ] Mobile view looks good
- [ ] Run production build: `npm run build`

---

## 🔄 Making Updates

After deployment to Vercel:

```bash
# Make your changes locally
# Edit files as needed...

# Push to GitHub (auto-deploys)
git add .
git commit -m "Update: describe what changed"
git push origin main

# Vercel rebuilds and deploys automatically
# Check vercel.com dashboard for status
```

---

## 🐛 Common Issues

**Q: "npm install" fails**
A: Make sure you have Node 18+ installed
```bash
node --version  # Should be v18+
```

**Q: "npm run dev" doesn't start**
A: Port 3000 might be in use
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

**Q: Can't push to GitHub**
A: Check your SSH key or HTTPS credentials
```bash
git remote -v  # Verify correct URL
```

**Q: Domain not pointing to Vercel**
A: Check DNS propagation
```bash
nslookup coltonbatts.com  # Should show Vercel's IP
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for more troubleshooting.

---

## 📞 Need Help?

Refer to these resources:
- **Next.js:** https://nextjs.org/docs
- **Vercel:** https://vercel.com/docs
- **Tailwind:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

---

## 🎯 Next Steps

1. **Read QUICKSTART.md** → Get it running locally
2. **Customize content** → Edit your info
3. **Read PRODUCTION_LAUNCH.md** → Deploy it
4. **Go live!** → Share coltonbatts.com

---

## ✨ What Makes This Portfolio Great

✅ **Premium Design** — Modern, dark, professional  
✅ **Mobile Responsive** — Works on all devices  
✅ **Fast Loading** — Optimized for performance  
✅ **SEO Ready** — Meta tags, Open Graph  
✅ **Accessible** — WCAG compliant  
✅ **Maintainable** — Clean, documented code  
✅ **Scalable** — Easy to add more projects  

---

**Ready to launch?** Start with [QUICKSTART.md](./QUICKSTART.md) →
