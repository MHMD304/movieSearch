## Movie Search (React)

A simple React app to search movies using the OMDb API, add them to a favourites list, and view rich movie details in a modal.

Note: This is a guided project on Coursera.

### Features

- Search movies by title via OMDb API
- Fetch full details for each search result (plot and metadata)
- Add movies to a favourites list (deduplicated by `imdbID`)
- Remove movies from favourites
- Click a movie card to open a modal with detailed info
- Nice, responsive UI with a blurred background when the modal is open

### How It Works

- `src/App.js` holds the app state: `favourites`, modal visibility, and `selectedMovie`
- `src/SearchMovie.js` queries OMDb (`s=` for search, then `i=` for details) and passes results up via `AddFavourites`
- `src/FavouritesMovieList.js` renders the grid of favourite movies
- `src/FavouritsMovie.js` displays each movie card and allows removal from favourites
- `src/MovieModal.js` uses `react-modal` to display detailed metadata for the selected movie and manages background blur/scroll lock
- Styling lives in `src/App.css`

### Project Structure

```
src/
  App.js               # App state and composition
  SearchMovie.js       # Search input and OMDb fetching
  FavouritesMovieList.js
  FavouritsMovie.js
  MovieModal.js        # Modal with detailed info
  App.css              # Styles
```

### Prerequisites

- Node.js 18+

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   The app runs at http://localhost:3000

### Environment / API Key

- `SearchMovie.js` uses an inline OMDb API key for convenience in this guided project. For personal deployments, consider moving the key to an environment variable and proxying requests from a backend if needed.

### Build

```bash
npm run build
```
Builds a production bundle into `build/`.

### Tech Stack

- React, Create React App
- react-modal
