# Deployment Instructions - Smith Brothers Landscaping

## Quick Start

Your website is ready to deploy! Follow these simple steps to get your site live.

## Pre-Deployment Checklist

Before deploying, make sure you've completed these customizations:

- [ ] Replaced portfolio images with actual project photos
- [ ] Updated hero background image
- [ ] Configured contact form integration (FormSpree, EmailJS, etc.)
- [ ] Added Google Analytics tracking code (optional)
- [ ] Verified all contact information is correct
- [ ] Updated social media links
- [ ] Tested the site locally

## Deployment Option 1: Netlify (Easiest - Recommended for Beginners)

### Step 1: Build Your Site
```bash
npm run build
```

This creates a `dist` folder with your production-ready website.

### Step 2: Deploy to Netlify

**Method A: Drag & Drop (Fastest)**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `dist` folder onto the page
3. Your site is live! Netlify gives you a URL like `random-name-123.netlify.app`

**Method B: Netlify CLI (More Control)**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Step 3: Custom Domain (Optional)
1. In Netlify dashboard, go to Site Settings → Domain Management
2. Add your custom domain (e.g., `smithbroslandscaping.com`)
3. Update your domain's DNS records as instructed
4. Netlify automatically provisions SSL certificate

**Netlify Benefits:**
- Free hosting for static sites
- Automatic SSL/HTTPS
- Global CDN for fast loading
- Continuous deployment from Git
- Easy rollbacks

---

## Deployment Option 2: Vercel (Best for Developers)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
vercel login
vercel --prod
```

Follow the prompts to complete deployment.

**Or Use Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Upload your project folder
4. Vercel auto-detects Vite and deploys

### Step 3: Custom Domain
1. In Vercel dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

---

## Deployment Option 3: GitHub Pages (Free with GitHub Account)

### Step 1: Update vite.config.ts

Add base URL for GitHub Pages:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'  // Replace with your repository name
})
```

### Step 2: Add Deploy Script

Update `package.json`:
```json
"scripts": {
  "build": "vite build",
  "deploy": "npm run build && gh-pages -d dist"
}
```

### Step 3: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from branch `gh-pages`
4. Your site will be at `https://username.github.io/repo-name`

---

## Deployment Option 4: Traditional Web Hosting (cPanel, HostGator, Bluehost, etc.)

### Step 1: Build Your Site
```bash
npm run build
```

### Step 2: Upload Files

**Via FTP:**
1. Connect to your hosting account via FTP (FileZilla, Cyberduck)
2. Navigate to `public_html` or `www` folder
3. Upload ALL files from the `dist` folder
4. Make sure `index.html` is in the root directory

**Via cPanel File Manager:**
1. Log into cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload the contents of `dist` folder
5. Extract if zipped

### Step 3: Configure .htaccess (For Clean URLs)

Create a `.htaccess` file in your root directory:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Step 4: SSL Certificate
Most hosting providers offer free SSL certificates (Let's Encrypt):
1. Log into cPanel
2. Find SSL/TLS section
3. Install free SSL certificate
4. Force HTTPS redirect

---

## Post-Deployment Tasks

### 1. Test Your Website
- [ ] Test all navigation links
- [ ] Submit the contact form
- [ ] Check mobile responsiveness
- [ ] Verify phone numbers are clickable
- [ ] Test Google Maps integration
- [ ] Check all images load properly

### 2. Set Up Analytics
Add Google Analytics to track visitors:

1. Create Google Analytics account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID (G-XXXXXXXXXX)
3. Add to `index.html` before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Set Up Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (website)
3. Verify ownership via HTML file or DNS
4. Submit your sitemap

### 4. Configure Contact Form Backend

**Using FormSpree (Free Tier Available):**
1. Go to [formspree.io](https://formspree.io)
2. Create account and get form endpoint
3. Update `src/components/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    setSubmitMessage('Thank you! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  } else {
    setSubmitMessage('Sorry, there was an error. Please call us instead.');
  }

  setIsSubmitting(false);
};
```

4. Rebuild and redeploy

**Using EmailJS (Alternative):**
1. Go to [emailjs.com](https://www.emailjs.com)
2. Create account and email service
3. Install EmailJS: `npm install @emailjs/browser`
4. Update contact form component

### 5. Local Business SEO

**Google My Business:**
1. Claim your business at [business.google.com](https://business.google.com)
2. Verify your location
3. Add photos, hours, services
4. Link to your website

**Schema Markup:**
Add to `index.html` before `</head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smith Brothers Landscaping",
  "image": "YOUR_LOGO_URL",
  "telephone": "(248) 636-0203",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4146 Island Park Drive",
    "addressLocality": "Waterford",
    "addressRegion": "MI",
    "postalCode": "48329",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.6518123",
    "longitude": "-83.3951234"
  },
  "url": "YOUR_WEBSITE_URL",
  "priceRange": "$$",
  "areaServed": ["Waterford", "Clarkston", "White Lake", "Bloomfield Hills", "Auburn Hills"]
}
</script>
```

---

## Domain Name Setup

### Purchasing a Domain
Recommended registrars:
- [Namecheap](https://www.namecheap.com) - Great prices
- [Google Domains](https://domains.google) - Simple interface
- [Cloudflare](https://www.cloudflare.com) - Best prices at cost

**Suggested Domains:**
- smithbroslandscaping.com
- smithbrotherslandscaping.com
- sblandscapingmi.com

### Connecting Your Domain

**For Netlify/Vercel:**
1. Add domain in platform dashboard
2. Update DNS records at your registrar:
   - Add A record or CNAME record as instructed
   - Wait 24-48 hours for propagation

**For Traditional Hosting:**
1. Point nameservers to your hosting provider
2. Or add A record to hosting IP address

---

## Troubleshooting

### Site Not Loading
- Clear browser cache
- Check DNS propagation at [whatsmydns.net](https://www.whatsmydns.net)
- Verify files uploaded correctly
- Check for console errors (F12 in browser)

### Images Not Showing
- Verify image URLs are correct and accessible
- Check image file paths (case-sensitive on Linux servers)
- Ensure images are uploaded to server

### Contact Form Not Working
- Verify form backend is configured
- Check browser console for errors
- Test form with simple test message
- Ensure email service is set up correctly

### Mobile Display Issues
- Clear mobile browser cache
- Test on multiple devices
- Check viewport meta tag in index.html
- Verify Tailwind responsive classes

---

## Maintenance Schedule

### Weekly
- Monitor contact form submissions
- Check Google Analytics for traffic

### Monthly
- Update portfolio with new projects
- Review and respond to any inquiries
- Check for broken links

### Quarterly
- Update testimonials
- Review service descriptions
- Update npm dependencies: `npm update`
- Backup website files

### Annually
- Review and update all content
- Update copyright year
- Renew domain name
- Review hosting plan

---

## Cost Breakdown

### Free Options
- **Hosting:** Netlify/Vercel/GitHub Pages (Free)
- **SSL Certificate:** Included free with hosting
- **Contact Form:** FormSpree free tier (50 submissions/month)
- **Analytics:** Google Analytics (Free)

### Paid Options (If Needed)
- **Domain Name:** $10-15/year
- **Premium Hosting:** $5-20/month
- **Contact Form:** FormSpree Pro $10/month (unlimited)
- **Email Service:** EmailJS $7/month
- **Advanced Analytics:** Google Analytics 360 (enterprise only)

### Total Estimated Cost
**Minimum:** $10-15/year (domain only)
**Recommended:** $130-200/year (domain + premium features)

---

## Need Help?

If you encounter issues during deployment:

1. **Check Documentation:**
   - Netlify: [docs.netlify.com](https://docs.netlify.com)
   - Vercel: [vercel.com/docs](https://vercel.com/docs)
   - Vite: [vitejs.dev](https://vitejs.dev)

2. **Search for Solutions:**
   - Stack Overflow
   - GitHub Issues
   - Platform-specific forums

3. **Hire Help:**
   - Local web developer
   - Freelancer on Upwork/Fiverr
   - Hosting provider support

---

## Success Checklist

Once deployed, verify:
- [ ] Website loads at your domain
- [ ] SSL certificate is active (https://)
- [ ] All pages and sections scroll smoothly
- [ ] Contact form submits successfully
- [ ] Phone numbers are clickable on mobile
- [ ] Google Maps shows correct location
- [ ] All images load properly
- [ ] Mobile responsive design works
- [ ] Google Analytics tracking active
- [ ] Site appears in Google search (may take 1-2 weeks)

Congratulations! Your Smith Brothers Landscaping website is now live!
