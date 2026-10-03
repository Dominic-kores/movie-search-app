// src/pages/HomePage.jsx

import { useState } from "react";

import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

import useFetch from "../hooks/useFetch";

const HomePage = ({
  favorites,
  onToggleFavorite,
}) => {
  const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
  

  // Get API key from .env
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  // Only create the URL after the user searches
  const searchUrl = searchTerm
    ? `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
        searchTerm
      )}&page=${page}`
    : null;

  // Reusable custom fetch hook
  const {
    data,
    loading,
    error,
  } = useFetch(searchUrl);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };


  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          Find Your Next Movie
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Search thousands of movies, series and games
          using the OMDb database.
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />

      {/* Display message before any search */}
      {!searchTerm && (
        <p className="mt-12 text-center text-slate-400">
          Search for a movie to get started.
        </p>
      )}

      {/* Loading state */}
      {loading && <LoadingSpinner />}

      {/* Network/server error */}
      {error && (
        <ErrorMessage message={error} />
      )}

      {/* OMDb can respond successfully but return Response: "False" */}
      {!loading &&
        data &&
        data.Response === "False" && (
          <ErrorMessage
            message={`No movies found for "${searchTerm}". Try a different title.`}
          />
        )}

      {/* Successful results */}
      {!loading &&
        data &&
        data.Response === "True" &&
        data.Search && (
          <div className="mt-10">
            <p className="mb-5 text-slate-300">
              Found {data.totalResults} results for{" "}
              <span className="font-semibold text-white">
                "{searchTerm}"
              </span>
            </p>

            <MovieGrid
              movies={data.Search}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        )}
    </section>
  );
};

export default HomePage;