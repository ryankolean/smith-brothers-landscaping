# Smith Brothers Landscaping Website - Customization Guide

## Overview
This is a complete, production-ready website for Smith Brothers Landscaping built with React, TypeScript, and Tailwind CSS. The site features a modern, responsive design optimized for lead generation and showcasing landscaping services.

## What's Included

### Page Sections
1. **Header** - Sticky navigation with mobile menu and prominent phone number
2. **Hero** - Full-screen hero with compelling headline and CTAs
3. **Services** - 6 comprehensive service categories with detailed descriptions
4. **Portfolio** - Filterable gallery with 12 project showcases
5. **Process** - 6-step design and installation process
6. **About** - Company history, credentials, and trust indicators
7. **Service Area** - Cities served with Google Maps integration
8. **Testimonials** - 6 customer reviews with 5-star ratings
9. **FAQ** - 8 common questions with expandable answers
10. **Contact** - Contact form, business hours, and contact information
11. **Footer** - Comprehensive footer with all business details

## Required Customizations

### 1. Replace Placeholder Images

**Current Images (Pexels Stock Photos):**
All portfolio images currently use placeholder stock photos. You need to replace these with actual project photos.

**Location:** `src/components/Portfolio.tsx` (lines 6-59)

**How to Replace:**
```typescript
{
  id: 1,
  category: 'Patios',
  image: 'YOUR_IMAGE_URL_HERE',  // Replace this URL
  title: 'Custom Paver Patio',
  description: 'Multi-level patio with built-in fire pit'
}
```

**Recommended Image Specifications:**
- Dimensions: 800x600px minimum (1200x900px ideal)
- Format: JPG or WebP
- Quality: High resolution, professional photography
- File size: Keep under 500KB for optimal loading

**Where to Host Images:**
- Upload to your web hosting service
- Use a CDN like Cloudinary or ImageKit
- Host on the same server as the website

**Hero Background Image:**
Located in `src/components/Hero.tsx` (line 17)
```typescript
backgroundImage: 'url(YOUR_HERO_IMAGE_URL)',
```

### 2. Update Business Information

**Company Name & Branding:**
- Already set to "Smith Brothers Landscaping" throughout
- Logo uses "SB" initials - replace with actual logo if desired

**Contact Information (Already Set):**
- Phone: (248) 636-0203
- Address: 4146 Island Park Drive, Waterford, MI 48329
- Hours: Mon-Fri 7AM-6PM, Sat 8AM-4PM, Sun Closed

**Email Address (Placeholder):**
Current: `info@smithbroslandscaping.com`
Update in:
- `src/components/Footer.tsx` (line 62)

**Social Media Links (Placeholder):**
Located in `src/components/Footer.tsx` (lines 21-26)
```typescript
<a href="YOUR_FACEBOOK_URL" ...>
<a href="YOUR_INSTAGRAM_URL" ...>
```

### 3. Customize Content

**Founding Year:**
Currently set to "Since 1985" - verify and update if needed:
- Hero section: `src/components/Hero.tsx` (line 26)
- Header badge: `src/components/Header.tsx` (line 29)
- About section: `src/components/About.tsx`

**Service Descriptions:**
Review and customize service descriptions in `src/components/Services.tsx` to match your specific offerings.

**Testimonials:**
Replace placeholder testimonials with real customer reviews in `src/components/Testimonials.tsx` (lines 3-42).

**FAQ Answers:**
Customize FAQ responses in `src/components/FAQ.tsx` to match your policies and procedures.

### 4. Configure Contact Form

**Current Behavior:**
The contact form shows a success message but doesn't send emails. You need to integrate a backend service.

**Location:** `src/components/Contact.tsx`

**Integration Options:**

**Option A: FormSpree (Easiest)**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
};
```

**Option B: EmailJS**
```typescript
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

**Option C: Custom Backend**
Set up your own server endpoint to handle form submissions and send emails.

### 5. Google Maps Integration

**Current Setup:**
Google Maps embed is configured for 4146 Island Park Drive, Waterford, MI 48329

**Location:** `src/components/ServiceArea.tsx` (line 66)

**To Customize:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the current URL in the code

### 6. SEO Optimization

**Meta Tags (Already Configured):**
Located in `index.html`:
- Title tag with business name and location
- Meta description with services and location
- Keywords for local SEO

**To Customize:**
Update `index.html` with your specific service areas and additional keywords.

**Recommended Additions:**
- Google Analytics tracking code
- Google Search Console verification
- Local business schema markup
- Open Graph tags for social sharing

## Color Customization

The website uses a nature-inspired color scheme. To customize:

**Primary Colors (Emerald Green):**
- `bg-emerald-800` - Main brand color
- `bg-emerald-900` - Darker shade
- `bg-emerald-50` - Light background

**Secondary Colors (Stone Gray):**
- `text-stone-700` - Body text
- `bg-stone-50` - Light backgrounds

**To Change Colors:**
Search and replace color classes throughout the components. For example:
- Replace `emerald-800` with `blue-800` for a blue theme
- Replace `stone-` with `gray-` for neutral grays

## Deployment Options

### Option 1: Netlify (Recommended)

1. **Create Account:** [netlify.com](https://www.netlify.com)
2. **Deploy:** Drag and drop the `dist` folder
3. **Custom Domain:** Configure in Netlify settings
4. **Automatic SSL:** Included free

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### Option 2: Vercel

1. **Create Account:** [vercel.com](https://vercel.com)
2. **Import Project:** Connect to GitHub or upload
3. **Auto-detect:** Vercel automatically detects Vite
4. **Deploy:** Automatic deployment on every commit

### Option 3: GitHub Pages

1. **Create Repository:** Upload project to GitHub
2. **Configure Build:** Add deploy script to `package.json`
3. **Enable Pages:** In repository settings
4. **Custom Domain:** Configure in repository settings

### Option 4: Traditional Web Hosting

1. **Build Project:** Run `npm run build`
2. **Upload Files:** Upload contents of `dist` folder
3. **Configure Server:** Point to `index.html`
4. **SSL Certificate:** Install via hosting provider

## Performance Optimization

### Image Optimization
- Convert images to WebP format
- Use responsive images with `srcset`
- Implement lazy loading for portfolio images
- Compress images before upload

### Code Optimization
- The build process automatically minifies code
- Consider adding a CDN for faster global delivery
- Enable gzip compression on your server
- Use browser caching headers

## Browser Compatibility

The website is compatible with:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance Checklist

### Regular Updates
- [ ] Update portfolio with new projects monthly
- [ ] Refresh testimonials quarterly
- [ ] Review and update service descriptions annually
- [ ] Check all links and contact information
- [ ] Update copyright year in footer

### Technical Maintenance
- [ ] Monitor form submissions
- [ ] Check Google Analytics for visitor behavior
- [ ] Update npm dependencies quarterly
- [ ] Test contact form regularly
- [ ] Verify mobile responsiveness

## Support & Additional Features

### Potential Additions
- Blog section for SEO content
- Before/after image sliders
- Customer login portal
- Online quote calculator
- Seasonal service promotions
- Email newsletter signup
- Live chat integration
- Online payment system

### Getting Help
- React Documentation: [react.dev](https://react.dev)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
- Vite Documentation: [vitejs.dev](https://vitejs.dev)

## Technical Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Static site (can be hosted anywhere)

## Contact for Development Support

If you need help customizing or maintaining this website, reach out to a web developer familiar with React and Tailwind CSS.

## License

This website is built specifically for Smith Brothers Landscaping. All rights reserved.
