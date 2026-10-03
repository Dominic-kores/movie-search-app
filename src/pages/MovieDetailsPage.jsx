// src/pages/MovieDetailsPage.jsx

import { Link, useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const MovieDetailsPage = ({
  favorites,
  onToggleFavorite,
}) => {
  // Extract the movie ID from /movie/:id
  const { id } = useParams();

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  // Fetch full movie details using IMDb ID
  const movieUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;

  const {
    data: movie,
    loading,
    error,
  } = useFetch(movieUrl);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (movie?.Response === "False") {
    return (
      <ErrorMessage
        message={movie.Error || "Movie could not be found."}
      />
    );
  }

  if (!movie) {
    return null;
  }

  const favorite = favorites.some(
    (item) => item.imdbID === movie.imdbID
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <Link
        to="/"
        className="mb-8 inline-block text-blue-400 hover:text-blue-300"
      >
        ← Back to Search
      </Link>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        {/* Movie poster */}
        <div>
          {movie.Poster && movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              className="w-full rounded-xl object-cover shadow-xl"
            />
          ) : (
            <div className="flex aspect-[2/3] items-center justify-center rounded-xl bg-slate-800 text-slate-300">
              No Poster Available
            </div>
          )}
        </div>

        {/* Movie information */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white md:text-4xl">
                {movie.Title}
              </h1>

              <p className="mt-2 text-lg text-slate-400">
                {movie.Year}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                onToggleFavorite(movie)
              }
              className="rounded-lg bg-slate-800 px-4 py-2 text-lg transition hover:bg-slate-700"
            >
              {favorite ? "♥ Saved" : "♡ Favorite"}
            </button>
          </div>

          <div className="mt-6 space-y-3 text-slate-300">
            <p>
              <strong className="text-white">
                Rated:
              </strong>{" "}
              {movie.Rated}
            </p>

            <p>
              <strong className="text-white">
                Runtime:
              </strong>{" "}
              {movie.Runtime}
            </p>

            <p>
              <strong className="text-white">
                Genre:
              </strong>{" "}
              {movie.Genre}
            </p>

            <p>
              <strong className="text-white">
                Director:
              </strong>{" "}
              {movie.Director}
            </p>

            <p>
              <strong className="text-white">
                Actors:
              </strong>{" "}
              {movie.Actors}
            </p>

            <p>
              <strong className="text-white">
                IMDb Rating:
              </strong>{" "}
              ⭐ {movie.imdbRating}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-white">
              Plot
            </h2>

            <p className="mt-3 leading-7 text-slate-300">
              {movie.Plot}
            </p>
          </div>

          {/* Display additional ratings if available */}
          {movie.Ratings?.length > 0 && (
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-bold text-white">
                Ratings
              </h2>

              <div className="flex flex-wrap gap-3">
                {movie.Ratings.map((rating) => (
                  <div
                    key={rating.Source}
                    className="rounded-lg bg-slate-800 px-4 py-3"
                  >
                    <p className="text-sm text-slate-400">
                      {rating.Source}
                    </p>

                    <p className="font-semibold text-white">
                      {rating.Value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsPage;