# Arnau Garriga Torné - Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and TailwindCSS.

Design adapted from [Adrià Guilera's portfolio](https://github.com/AdriaGuilera/Portfolio), with thanks.

## Design Style

This portfolio follows a **Pure Minimalism** aesthetic with:
- Abundant whitespace
- Monochrome color palette
- Ultra-thin borders (1px)
- Light shadows and subtle animations
- Clean typography with light font weights

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling
- **React** - UI library

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Project

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

With Docker:
```bash
docker compose up --build
```

The container serves the site at [http://localhost:3005](http://localhost:3005)

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── icon.png           # Favicon
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Sticky navigation with active states
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section with skills
│   ├── Work.tsx           # Projects and experience
│   ├── Contact.tsx        # Contact info and links
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
│   ├── media/             # Images (currently placeholders)
│   ├── svgs/              # Technology icons
│   └── Arnau_Garriga_Torne_CV.pdf  # Resume/CV
└── ...config files
```

## Features

### Animations
- Smooth scrolling between sections
- Staggered entrance animations
- Hover interactions on all interactive elements

### Sections
1. **Hero** - Introduction
2. **About** - Bio, skills, and interests
3. **Work** - Project showcase with hover effects
4. **Contact** - Contact details and social links
5. **Footer** - Social links and copyright

### Responsive Design
- Mobile-first approach
- Breakpoints: `md` (768px), `lg` (1024px)
- Mobile menu for navigation
- Optimized layouts for all screen sizes

## Customization

### Colors
Edit the color palette in `tailwind.config.ts`.

### Content
- Update personal information in component files
- Replace project data in `Work.tsx`
- Update contact information in `Contact.tsx`

### Media
- `public/media/hero.png` and `public/media/about.png` are placeholder images ("AG" monogram); replace them with real photos (800x800)
- Update image paths in components if you rename them
- Replace the CV in `public/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Arnau Garriga Torné. All rights reserved.
