// src/components/Header.jsx

import { Link } from "react-router-dom";

const Header = ({ favoritesCount }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo/Home link */}
        <Link
          to="/"
          className="text-xl font-bold text-white md:text-2xl"
        >
          MovieFinder
        </Link>

        {/* Main navigation */}
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm text-slate-200 transition hover:text-blue-400 md:text-base"
          >
            Home
          </Link>

          <Link
            to="/favorites"
            className="flex items-center gap-2 text-sm text-slate-200 transition hover:text-red-400 md:text-base"
          >
            Favorites

            {/* Favourite counter required by the assignment */}
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
              {favoritesCount}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;