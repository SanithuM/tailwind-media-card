# Tailwind Media Card

A small React + Vite project that showcases two profile card variants styled with Tailwind CSS:

- **Split card** with user details and stats below the image
- **Overlay card** with a gradient overlay and hover-to-video preview

The UI uses Lucide React icons and local image/video assets from the `public` folder.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Lucide React
- Oxlint

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint

## Project Structure

```text
src/
  App.jsx
  components/
    Cardgrid.jsx
  index.css
public/
  images/batman.webp
  videos/batman.mp4
  videos/batman2.mp4
```

## Notes

- Hovering the overlay card switches from the static image to video playback.
- Tailwind is enabled through `@tailwindcss/vite` and imported in `src/index.css`.
