# Ixplore Demo - Travel Website

A modern travel website homepage featuring a full-screen video background hero section, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Full-screen video background hero section
- Responsive design optimized for mobile devices
- Modern, clean UI with premium aesthetics
- Adventure/outdoor learning theme
- Performance optimized

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Ixplore-demo/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Homepage with hero section
│   └── globals.css          # Global styles with Tailwind
├── public/                  # Static assets (videos, images)
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Replace Video

1. Add your video file to the `public/` directory
2. Update the video source in `app/page.tsx`:
```tsx
<source
  src="/your-video.mp4"
  type="video/mp4"
/>
```

### Update Content

Edit the heading, subheading, and CTA button text in `app/page.tsx`.

## Performance Notes

- Video is optimized with `preload="auto"` for smooth playback
- Mobile optimizations include `playsInline` for iOS compatibility
- Responsive typography scales appropriately across devices
- Touch-friendly button sizes (minimum 44px height)

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

