# My Movie Database

A clean movie browsing app built with **Next.js 14**, TypeScript, and TMDB API. It lets users explore popular movies and open a dedicated details page for each title.

## Features

- Browse a list of popular movies
- View movie posters, titles, and short overviews
- Open a dynamic movie details page using route params
- Fetch live data from TMDB API
- Use Next.js Image optimization for external movie posters
- Keep API keys secure with environment variables
- Built with App Router and server components

## Tech Stack

- Next.js 14
- React
- TypeScript
- CSS Modules
- TMDB API

## Project Structure

```bash
app/
├── page.tsx                 # Home page with movie list
├── layout.tsx               # Shared app layout
├── globals.css              # Global styles
├── movie/
│   └── [id]/
│       └── page.tsx         # Dynamic movie details page
components/
├── MovieCard/
│   ├── MovieCard.tsx
│   ├── MovieCard.module.css
│   └── index.ts
└── MovieDetails/
    ├── MovieDetails.tsx
    ├── MovieDetails.module.css
    └── index.ts
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env.local` file in the root folder:

```env
API_KEY=your_tmdb_api_key
```

Get your API key from TMDB.

### 4. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## API Used

This project uses the TMDB API for:

- Popular movies list
- Movie details by ID
- Poster images

Useful endpoints:

```bash
https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY
https://api.themoviedb.org/3/movie/{id}?api_key=YOUR_API_KEY
```

## Next.js Notes

A few important things used in this project:

- `app` directory routing
- Dynamic routing with `movie/[id]`
- Async server components for data fetching
- `next/image` for optimized poster rendering
- Remote image configuration in `next.config.js`

Example image config:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'image.tmdb.org',
    },
  ],
}
```

## Possible Improvements

- Add search functionality
- Add pagination
- Show movie genres and ratings on cards
- Add loading and error states
- Add skeleton UI
- Add dark mode
- Deploy on Vercel

## Lessons Learned

Through this project, I practiced:

- Next.js App Router basics
- Server-side data fetching
- Dynamic routes
- Reusable component structure
- API integration with environment variables
- Handling external images in Next.js

## Author

Built by **Yuva Teja**.