// src/App.jsx

import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

import {
  getFavorites,
  saveFavorite,
  removeFavorite,
} from "./utils/favorites";

const App = () => {
  // Load saved favourites from localStorage when the app starts
  const [favorites, setFavorites] = useState(() => getFavorites());

  // Add or remove a movie from favourites
  const handleToggleFavorite = (movie) => {
    const alreadyFavorite = favorites.some(
      (favorite) => favorite.imdbID === movie.imdbID
    );

    if (alreadyFavorite) {
      removeFavorite(movie.imdbID);

      setFavorites((currentFavorites) =>
        currentFavorites.filter(
          (favorite) => favorite.imdbID !== movie.imdbID
        )
      );
    } else {
      saveFavorite(movie);

      setFavorites((currentFavorites) => [
        ...currentFavorites,
        movie,
      ]);
    }
  };

  return (
    <BrowserRouter>
      {/* Header remains visible on every page */}
      <Header favoritesCount={favorites.length} />

      <main className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />

          <Route
            path="/movie/:id"
            element={
              <MovieDetailsPage
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;