# Hunt Property Management Sdn Bhd — Website

Official website for Hunt Property Management Sdn Bhd, built with Next.js and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: GitHub Pages (via GitHub Actions)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/hunt-properties-website](http://localhost:3000/hunt-properties-website) in your browser.

## Build

```bash
npm run build
```

Outputs a fully static site to the `out/` directory.

## Deployment

Deployment is automated via GitHub Actions on every push to `main`.

**One-time setup:**
1. Go to the repository **Settings → Pages**
2. Under *Source*, select **GitHub Actions**
3. Push to `main` — the site will be live at:

```
https://nicholasngzh.github.io/hunt-properties-website/
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Page composition
│   └── globals.css       # Tailwind directives, scroll-reveal animations
└── components/
    ├── Navbar.tsx         # Fixed nav, mobile hamburger, scroll-aware styling
    ├── Hero.tsx           # Full-viewport hero section
    ├── About.tsx          # Company profile, stats, projects list
    ├── Chairman.tsx       # Chairman's message
    ├── Culture.tsx        # 11 corporate culture cards
    ├── Services.tsx       # Expandable service cards (Engineering, Security, Landscaping)
    ├── Contact.tsx        # Contact form + office details
    ├── Footer.tsx         # Links, philosophy, copyright
    └── ScrollReveal.tsx   # IntersectionObserver scroll animation wrapper
public/
└── hunt_properties_logo.jpeg   # Company logo
```

## Customisation

### Logo
Replace `public/hunt_properties_logo.jpeg` with your logo file and update the `src` path in `Navbar.tsx` and `Footer.tsx`.

### Contact Details
Edit the `CONTACT_DETAILS` array in [src/components/Contact.tsx](src/components/Contact.tsx).

### Colours
Edit the custom theme in [tailwind.config.ts](tailwind.config.ts):
```ts
colors: {
  primary: { DEFAULT: '#1a3a2a', ... },  // Forest green
  gold:    { DEFAULT: '#c9a84c', ... },  // Gold accent
}
```

### Custom Domain
If you add a custom domain via GitHub Pages settings:
1. Remove `basePath` and `assetPrefix` from [next.config.mjs](next.config.mjs)
2. Update image `src` paths in `Navbar.tsx` and `Footer.tsx` to `/hunt_properties_logo.jpeg`

### Contact Form
The form currently shows a client-side success message only. To receive emails, point the form to a service like [Formspree](https://formspree.io) by adding `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the `<form>` element in `Contact.tsx`.
