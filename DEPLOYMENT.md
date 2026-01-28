# Deployment Guide: coltonbatts.com

Complete step-by-step instructions for pushing to GitHub and deploying to Vercel.

---

## ✅ Prerequisites

Before you start, make sure you have:

- [Git](https://git-scm.com) installed locally
- [GitHub account](https://github.com/signup)
- [Vercel account](https://vercel.com/signup) (free)
- Domain registered (coltonbatts.com)

---

## 📦 Step 1: Initialize Git & Push to GitHub

### 1.1 Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a **new repository** with these settings:
   - **Repository name:** `coltonbatts-portfolio`
   - **Description:** "Motion Graphics & Video Production Portfolio"
   - **Visibility:** Public (or Private — your choice)
   - **Don't** initialize with README (we have one)
3. Click **Create repository**

### 1.2 Push Your Code to GitHub

From your project directory (`/Users/coltonbatts/Projects/coltonbatts-portfolio`):

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Colton portfolio website

- Next.js 15 with TypeScript
- 3 flagship projects: Shop with Google, Kate Spade Fashion Week, Under Armour
- Responsive design with Tailwind CSS
- Colton font design system
- Production-ready for Vercel"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/coltonbatts-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Result:** Your code is now on GitHub at `github.com/YOUR_USERNAME/coltonbatts-portfolio`

---

## 🚀 Step 2: Deploy to Vercel

### 2.1 Import Project into Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"** (top right)
3. Click **"Import Git Repository"**
4. Paste your GitHub URL: `https://github.com/YOUR_USERNAME/coltonbatts-portfolio`
5. Click **"Continue"**

### 2.2 Configure Vercel Project

The import dialog will show:

- **Framework Preset:** Select `Next.js` ✓
- **Project Name:** `coltonbatts-portfolio` (auto-filled)
- **Root Directory:** `./` (default)
- **Environment Variables:** Leave blank (not needed)

Click **"Deploy"** and wait 2-5 minutes.

### 2.3 Verify Deployment

Once deployment completes, Vercel will show:

```
✓ Preview: https://coltonbatts-portfolio.vercel.app
✓ Production: https://coltonbatts-portfolio.vercel.app
```

Visit the preview URL — your site is live! 🎉

---

## 🌐 Step 3: Point Domain to Vercel

You have two options:

### Option A: Use Vercel Nameservers (Recommended, Easiest)

#### 3A.1 Add Domain to Vercel

1. In Vercel dashboard, go to your project
2. Navigate to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter: `coltonbatts.com`
5. Click **"Add"**

Vercel will show 2-4 nameserver addresses:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
ns3.vercel-dns.com
ns4.vercel-dns.com
```

#### 3A.2 Update Domain Registrar

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find **Nameserver settings** (usually under DNS or Domain settings)
3. **Replace** the current nameservers with Vercel's
4. **Save changes**

**Wait 24-48 hours** for DNS propagation (often 5-10 minutes in practice)

---

### Option B: Use DNS Records (Manual, More Control)

If you want to keep your current registrar's nameservers:

#### 3B.1 Get Vercel DNS Records

1. In Vercel dashboard → **Settings** → **Domains**
2. Click **"Edit"** next to your domain
3. Select **"Using external nameservers?"**
4. Copy the DNS records shown (typically):
   - **A Record:** `76.76.19.165`
   - **CNAME:** `cname.vercel-dns.com`

#### 3B.2 Add Records to Your Registrar

1. Go to your domain registrar's DNS settings
2. Add/Edit these records:

   **For coltonbatts.com:**
   - Type: `A`
   - Name/Host: `@` (or leave blank)
   - Value: `76.76.19.165`

   **For www.coltonbatts.com:**
   - Type: `CNAME`
   - Name/Host: `www`
   - Value: `cname.vercel-dns.com`

3. **Save changes** and wait for DNS propagation (24-48 hours)

---

## ✨ Verification Checklist

After DNS propagates, verify everything works:

- [ ] `coltonbatts.com` loads your site
- [ ] `www.coltonbatts.com` works and redirects to `coltonbatts.com`
- [ ] Mobile view looks good
- [ ] Portfolio projects load
- [ ] Project detail pages work
- [ ] Contact form works
- [ ] About/Contact pages accessible
- [ ] No console errors (open DevTools → Console)

### Quick DNS Check

```bash
# Check if domain points to Vercel
nslookup coltonbatts.com

# Should show:
# Address: 76.76.19.165
```

---

## 🔄 Updating Your Site

Once deployed, pushing updates to GitHub automatically triggers a Vercel redeploy:

```bash
# Make your changes locally
nano app/page.tsx  # or edit in your editor

# Commit and push
git add .
git commit -m "Update: improved hero section copy"
git push origin main

# Vercel automatically rebuilds and deploys
# Check vercel.com dashboard for build status
```

---

## 🛠️ Troubleshooting

### Site shows "404" or blank page

1. Check **Vercel deployment status** — look for failed builds
2. View build logs: **Settings** → **Build & Development Settings**
3. Check browser console (F12 → Console tab)

### Domain not pointing to Vercel

```bash
# Run this to check DNS:
nslookup coltonbatts.com

# Should resolve to Vercel's IP (76.76.19.165)
# If not, DNS hasn't propagated yet — wait 24 hours
```

### SSL Certificate issues

Vercel automatically provides free SSL. If you see HTTPS warnings:

1. Go to Vercel project → **Settings** → **Domains**
2. Delete the domain and re-add it
3. Wait 2-5 minutes for SSL provisioning

### Contact form not working

The contact form is currently client-side only (shows success message locally).

To make it send emails, add:
- Email service (SendGrid, Mailgun, Resend, etc.)
- API endpoint in `/app/api/contact/route.ts`
- Update form submission in `/app/contact/page.tsx`

---

## 📊 Monitoring & Analytics

### Enable Vercel Analytics

1. Vercel dashboard → **Analytics** tab
2. Click **"Enable Analytics"**
3. View real-time traffic and performance

### Monitor Build Status

- Dashboard shows build history
- Failed builds trigger email notifications
- Check **Deployments** tab for detailed logs

---

## 🎯 Next Steps

After deploying:

1. **Test everything thoroughly** on mobile and desktop
2. **Share your portfolio** — it's live!
3. **Update contact information** if needed:
   - Email: `hello@coltonbatts.com`
   - Social links in Header/Footer
4. **Add Google Analytics** (optional):
   - Create account at [google.com/analytics](https://www.google.com/analytics)
   - Get tracking ID
   - Add to `app/layout.tsx`
5. **Monitor performance** regularly

---

## 📞 Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Issues:** If anything breaks, push to a new branch and file an issue

---

## 🎉 Congratulations!

Your production-ready portfolio is now live at **coltonbatts.com**!

---

**Last Updated:** January 2025  
**Status:** Production Ready ✅
