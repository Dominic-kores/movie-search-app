// src/components/SearchBar.jsx

import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  // Stores the user's current input
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    // Prevent the page from refreshing
    event.preventDefault();

    const cleanedSearch = searchTerm.trim();

    // Do not submit an empty search
    if (!cleanedSearch) {
      return;
    }

    // Send the search term back to HomePage
    onSearch(cleanedSearch);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-3xl flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.target.value)
        }
        placeholder="Search for a movie..."
        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;