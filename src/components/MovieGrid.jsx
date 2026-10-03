// src/components/MovieGrid.jsx

import MovieCard from "./MovieCard";

const MovieGrid = ({
  movies,
  favorites,
  onToggleFavorite,
}) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        lg:grid-cols-4
      "
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default MovieGrid;