// src/utils/favorites.js

// localStorage key used by the application
const FAVORITES_KEY = "movieFavorites";

// Get all saved favourites
export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);

    // Convert stored JSON back into a JavaScript array
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Unable to read favourites:", error);
    return [];
  }
};

// Add a movie to favourites
export const saveFavorite = (movie) => {
  const favorites = getFavorites();

  // Prevent duplicate movies
  const alreadyExists = favorites.some(
    (favorite) => favorite.imdbID === movie.imdbID
  );

  if (!alreadyExists) {
    favorites.push(movie);

    localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(favorites)
    );
  }
};

// Remove a movie using its IMDb ID
export const removeFavorite = (imdbID) => {
  const favorites = getFavorites();

  const updatedFavorites = favorites.filter(
    (movie) => movie.imdbID !== imdbID
  );

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(updatedFavorites)
  );
};

// Check whether a movie is currently saved
export const isFavorite = (imdbID) => {
  const favorites = getFavorites();

  return favorites.some(
    (movie) => movie.imdbID === imdbID
  );
};