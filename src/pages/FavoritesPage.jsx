// src/pages/FavoritesPage.jsx

import { Link } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";

const FavoritesPage = ({
  favorites,
  onToggleFavorite,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold text-white">
        My Favorites
      </h1>

      <p className="mt-2 text-slate-400">
        Movies you have saved for later.
      </p>

      {favorites.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-300">
            You have not saved any favorites yet.
          </p>

          <p className="mt-2 text-slate-400">
            Search for movies and click the heart icon
            to save them.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Search Movies
          </Link>
        </div>
      ) : (
        <div className="mt-8">
          <MovieGrid
            movies={favorites}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      )}
    </section>
  );
};

export default FavoritesPage;