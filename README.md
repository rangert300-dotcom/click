# ryanrange.click

Personal professional website for Ryan Range — IT infrastructure engineer, AI consultant, and fractional CTO based in New Orleans, LA.

This is the "person layer" that sits above [Range IT](https://range.it.com) (commercial) and [Telly Tech Services](https://tellytechservices.com) (residential).

## Stack

- Vanilla HTML, CSS, JavaScript — no frameworks
- Fonts: Instrument Serif (display) + Outfit (body) via Google Fonts
- CSS custom properties for theming
- Mobile-first responsive design
- Deployed via GitHub → Cloudflare Pages

## Structure

```
├── index.html          Homepage
├── services.html       Service offerings + audience routing
├── about.html          Professional arc / story
├── work.html           Portfolio / case studies
├── ai.html             AI services + Crash Course
├── contact.html        Cal.com embed + Formspree form + direct line
├── blog/index.html     Blog index (empty state)
├── 404.html            Custom 404
├── sitemap.xml
├── robots.txt
├── _redirects          Cloudflare vanity route documentation
└── assets/
    ├── css/main.css    Design system + all styles
    ├── js/main.js      Nav, scroll, form handling, dynamic year
    └── img/            Images (og-image.png, etc.)
```

## Setup

1. Clone this repo
2. Open `index.html` in a browser — it's static HTML, no build step required
3. Deploy to Cloudflare Pages by connecting this GitHub repo

## Configuration Required

### Cal.com Embed (contact.html)
1. Log into your Cal.com account
2. Copy your event URL (e.g., `https://cal.com/ryan-range/30min`)
3. In `contact.html`, replace `CALENDAR_LINK` in the iframe `src` with your actual URL

### Formspree Form (contact.html)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy the form endpoint ID
4. In `contact.html`, replace `FORM_ID` in the form `action` attribute with your ID

### Cloudflare Vanity Routes
These are managed in the Cloudflare dashboard, not in this repo:
- `/consult` → iCal fractional CTO meeting
- `/discover` → iCal discovery pre-route
- `/meet` → iCal intro 30 min
- `/ai` → Eventbrite link
- `/linkedin` → LinkedIn profile

### OG Image
Create a branded 1200×630 social sharing card and save it as `assets/img/og-image.png`.

## Tagline Options
The homepage hero has the active tagline plus 5 commented-out alternatives. To change:
1. Open `index.html`
2. Find the `<!-- Tagline alternatives -->` comment block
3. Comment out the current tagline and uncomment your pick

## Contact
- Phone: (504) 345-8049
- Email: ryan@range.it.com
- Resume: [resume.ryanrange.click](https://resume.ryanrange.click)
