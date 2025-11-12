# Placeholder Content to Replace

This document lists all placeholder content in the website that should be replaced with real business information.

## 1. Images

### Hero Background Image
**Location:** `src/components/Hero.tsx` (line 17)
**Current:** Professional landscaping stock photo (updated with better quality image)
**Replace with:** High-quality photo of your best project or team at work
**Recommended size:** 1920x1080px minimum

### Portfolio Images (12 Total)
**Location:** `src/components/Portfolio.tsx` (lines 6-59)

✅ **UPDATED:** All 12 portfolio images have been replaced with professional, high-quality landscaping and hardscaping photos that match each category. Each image now showcases:
- **Patios:** Modern outdoor living spaces with professional pavers and fire features
- **Hardscaping:** Stone pathways, driveways, and architectural landscape elements
- **Planting:** Lush garden designs with colorful perennials and strategic landscaping
- **Retaining Walls:** Professional stonework and tiered landscape solutions
- **Water Features:** Natural ponds, waterfalls, and decorative fountains

**Note:** While these are now high-quality professional photos, you should still replace them with actual project photos from Smith Brothers Landscaping to showcase your real work:

1. **Custom Paver Patio** - Category: Patios
2. **Natural Stone Walkway** - Category: Hardscaping
3. **Perennial Garden Design** - Category: Planting
4. **Tiered Retaining Wall** - Category: Retaining Walls
5. **Natural Waterfall Feature** - Category: Water Features
6. **Outdoor Living Room** - Category: Patios
7. **Front Entrance Design** - Category: Hardscaping
8. **Shade Garden Installation** - Category: Planting
9. **Poolside Retreat** - Category: Patios
10. **Boulder Retaining Wall** - Category: Retaining Walls
11. **Circular Driveway** - Category: Hardscaping
12. **Garden Fountain** - Category: Water Features

**Recommended specifications:**
- Resolution: 800x600px minimum (1200x900px ideal)
- Format: JPG or WebP
- Quality: Professional photography
- File size: Under 500KB each

---

## 2. Contact Information

### Email Address (Placeholder)
**Location:** `src/components/Footer.tsx` (line 62)
**Current:** `info@smithbroslandscaping.com`
**Action:** Replace with your actual business email

### Social Media Links (Placeholder)
**Location:** `src/components/Footer.tsx` (lines 21-26)

**Current:** Both links point to "#" (placeholder)
- Facebook: `<a href="#">`
- Instagram: `<a href="#">`

**Action:** Replace with your actual social media profile URLs:
```typescript
<a href="https://www.facebook.com/your-page">
<a href="https://www.instagram.com/your-profile">
```

---

## 3. Business Details (Verify These)

### Founding Year
**Current:** "Since 1985"
**Locations:**
- Hero section: `src/components/Hero.tsx` (line 26)
- Header badge: `src/components/Header.tsx` (line 29)
- About section: `src/components/About.tsx` (multiple)
- Footer: `src/components/Footer.tsx`

**Action:** Verify this is correct or update to actual founding year

### Statistics (Placeholder)
**Location:** `src/components/About.tsx` (lines 75-85)

**Current:**
- 38+ Years Experience
- 2,500+ Projects Completed
- 100% Satisfaction Rate

**Action:** Replace with accurate business statistics

---

## 4. Testimonials (All Placeholder)

**Location:** `src/components/Testimonials.tsx` (lines 3-42)

All 6 testimonials are fictional examples. Replace with real customer testimonials:

1. **Jennifer Martinez** - Waterford, MI
2. **Michael Thompson** - Clarkston, MI
3. **Sarah Johnson** - White Lake, MI
4. **David Chen** - Bloomfield Hills, MI
5. **Lisa Anderson** - Auburn Hills, MI
6. **Robert Williams** - Waterford, MI

**What to include:**
- Real customer names (with permission)
- Actual locations
- Genuine testimonials from satisfied clients
- Keep 5-star ratings if accurate

**Getting testimonials:**
- Ask recent satisfied customers
- Use reviews from Google My Business
- Request feedback after project completion
- Get written permission to use names

---

## 5. Service Descriptions (Review & Customize)

**Location:** `src/components/Services.tsx`

Current service descriptions are generic. Review and customize to match your specific:
- Service offerings
- Specializations
- Unique selling points
- Materials used
- Process details

---

## 6. FAQ Answers (Review & Customize)

**Location:** `src/components/FAQ.tsx`

Current FAQ answers are generic best practices. Customize to reflect your:
- Actual warranty terms
- Specific processes
- Timeline estimates
- Payment policies
- Service area limits

---

## 7. Contact Form Integration (Not Connected)

**Location:** `src/components/Contact.tsx` (handleSubmit function)

**Current status:** Form shows success message but doesn't actually send emails

**Required action:** Integrate with email service:

**Option A: FormSpree**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Update the handleSubmit function with your form endpoint

**Option B: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Configure email service and template
3. Install EmailJS package
4. Update contact form component

**Option C: Custom Backend**
Set up your own server endpoint

---

## 8. Google Maps Embed

**Location:** `src/components/ServiceArea.tsx` (line 66)

**Current:** Configured for 4146 Island Park Drive, Waterford, MI 48329

**If address is different:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your actual business address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the URL in the code

**Current coordinates in map:** 42.6518123, -83.3951234
Update if your location is different.

---

## 9. SEO & Meta Information

### Meta Description
**Location:** `index.html` (line 8)
**Current:** Generic description
**Action:** Customize to highlight your unique services and competitive advantages

### Schema Markup (Not Yet Added)
**Recommended:** Add local business schema markup to `index.html`

See DEPLOYMENT_INSTRUCTIONS.md for complete schema markup template.

---

## 10. Service Area Cities (Verify)

**Location:** `src/components/ServiceArea.tsx` (lines 3-16)

**Current cities listed:**
- Waterford
- Clarkston
- White Lake
- Bloomfield Hills
- Auburn Hills
- Pontiac
- West Bloomfield
- Commerce Township
- Highland
- Lake Orion
- Rochester Hills
- Troy

**Action:** Verify this list matches your actual service area. Add or remove cities as needed.

---

## 11. Business Hours (Verify)

**Location:** `src/components/Footer.tsx` and `src/components/Contact.tsx`

**Current:**
- Mon-Fri: 7:00 AM - 6:00 PM
- Saturday: 8:00 AM - 4:00 PM
- Sunday: Closed

**Action:** Verify these hours are correct or update to match actual business hours

---

## 12. Logo (Using Initials)

**Current:** Simple "SB" initials in colored box
**Locations:**
- Header: `src/components/Header.tsx` (lines 24-31)
- Footer: `src/components/Footer.tsx` (lines 11-18)

**To add actual logo:**
1. Upload logo image to project
2. Replace the initials div with `<img>` tag
3. Adjust sizing as needed

Example:
```typescript
<img src="/logo.png" alt="Smith Brothers Landscaping" className="h-12 w-auto" />
```

---

## 13. Financing Options (Mentioned but Not Detailed)

**Location:** `src/components/About.tsx` (line 56)

**Current:** "Financing Available" listed as feature with "(placeholder)" note

**Action:**
- If you offer financing, add details
- If not, remove this feature from the list

---

## 14. Analytics Tracking (Not Configured)

**Google Analytics:** Not yet added
**Action:** Add tracking code to `index.html` after deployment

See DEPLOYMENT_INSTRUCTIONS.md for setup instructions.

---

## 15. Review Ratings (Placeholder)

**Location:** `src/components/Testimonials.tsx` (lines 83-89)

**Current:**
- "5.0 Average Rating"
- "Based on 150+ reviews"

**Action:** Replace with your actual:
- Average rating from Google My Business
- Total number of reviews
- Or remove if you don't have reviews yet

---

## Content That is Already Correct

These items are already customized with your business information:

✅ Business Name: Smith Brothers Landscaping
✅ Phone Number: (248) 636-0203
✅ Address: 4146 Island Park Drive, Waterford, MI 48329
✅ Location: Waterford, MI
✅ Service Type: Professional Landscaping Services
✅ Service Categories: Well-defined and comprehensive

---

## Priority Order for Replacements

### High Priority (Do First)
1. ⚠️ Portfolio project images (12 images)
2. ⚠️ Contact form integration (so leads don't get lost)
3. ⚠️ Hero background image
4. ⚠️ Email address
5. ⚠️ Testimonials

### Medium Priority (Do Soon)
6. Social media links
7. Founding year verification
8. Business statistics
9. Google Maps verification
10. FAQ customization

### Low Priority (Do When Possible)
11. Service descriptions refinement
12. Logo replacement
13. Schema markup
14. Analytics setup
15. Review ratings

---

## Quick Reference: Files to Edit

1. **index.html** - Meta tags, analytics
2. **src/components/Hero.tsx** - Hero image, founding year
3. **src/components/Portfolio.tsx** - All 12 project images
4. **src/components/Testimonials.tsx** - All 6 testimonials, ratings
5. **src/components/Contact.tsx** - Form submission integration
6. **src/components/Footer.tsx** - Email, social links
7. **src/components/About.tsx** - Statistics, founding year
8. **src/components/ServiceArea.tsx** - Maps, cities list
9. **src/components/Services.tsx** - Service descriptions
10. **src/components/FAQ.tsx** - FAQ answers

---

## Testing Checklist

After replacing placeholder content, test:

- [ ] All images load correctly
- [ ] Contact form sends emails to correct address
- [ ] Phone numbers work (click-to-call on mobile)
- [ ] Social media links go to correct profiles
- [ ] Google Maps shows correct location
- [ ] All text is accurate and grammatically correct
- [ ] No "placeholder" text remains visible
- [ ] Business hours are correct
- [ ] Service area cities are accurate

---

## Need Help?

Refer to:
- **CUSTOMIZATION_GUIDE.md** - Detailed how-to instructions
- **DEPLOYMENT_INSTRUCTIONS.md** - Deployment and setup steps

For technical assistance, consult a web developer familiar with React and TypeScript.
