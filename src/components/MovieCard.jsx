// src/components/MovieCard.jsx

import { Link } from "react-router-dom";

const MovieCard = ({
  movie,
  favorites,
  onToggleFavorite,
}) => {
  // Determine whether this movie has already been saved
  const favorite = favorites.some(
    (item) => item.imdbID === movie.imdbID
  );

  const handleFavoriteClick = (event) => {
    // Prevent clicking the heart from opening the movie page
    event.preventDefault();
    event.stopPropagation();

    onToggleFavorite(movie);
  };

  return (
    <article className="overflow-hidden rounded-xl bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/movie/${movie.imdbID}`}>
        {/* Handle movies that do not have posters */}
        {movie.Poster && movie.Poster !== "N/A" ? (
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            className="aspect-[2/3] w-full object-cover"
          />
        ) : (
          <div className="flex aspect-[2/3] w-full items-center justify-center bg-slate-700 p-4 text-center text-slate-300">
            No Poster Available
          </div>
        )}

        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-bold text-white">
                {movie.Title}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {movie.Year}
              </p>

              <p className="mt-1 capitalize text-blue-400">
                {movie.Type}
              </p>
            </div>

            <button
              type="button"
              onClick={handleFavoriteClick}
              aria-label={
                favorite
                  ? "Remove from favourites"
                  : "Add to favourites"
              }
              className="text-2xl"
            >
              {favorite ? "♥" : "♡"}
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;