# 🎬 MovieFinder Application

MovieFinder is a responsive movie search application built with **React, Vite, Tailwind CSS, React Router, and the OMDb API**.

The application allows users to search for movies, series, and games, view detailed information about individual titles, save favourites, and access saved movies even after refreshing or closing the browser.

This project demonstrates the React concepts covered during Week 4, including components, props, state management, hooks, routing, API integration, localStorage, responsive design, and deployment.

---

## 🌐 Live Pages

### Live Application

[View MovieFinder Live](https://movie-search-5qvy41xcl-dkisioya-7099.vercel.app/)

---

##  Project Objectives

The main objectives of this project are to:

- Build a complete movie search application using React.
- Fetch real-time movie information from the OMDb API.
- Practice working with external APIs using `fetch()`.
- Use React state and hooks to manage application data.
- Create reusable React components.
- Implement multiple pages using React Router.
- Use dynamic routing to display individual movie details.
- Handle loading, error, and no-results states.
- Store favourite movies using browser `localStorage`.
- Maintain favourites after a page refresh or browser restart.
- Create a responsive user interface using Tailwind CSS.
- Protect the OMDb API key using environment variables.
- Deploy a production-ready React application to Vercel.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | User interface and components |
| Vite | React development environment |
| JavaScript | Application logic |
| Tailwind CSS | Responsive styling |
| React Router | Navigation and dynamic routes |
| OMDb API | Movie information |
| Fetch API | API requests |
| localStorage | Favourite movie persistence |
| Git | Version control |
| GitHub | Source-code hosting |
| Vercel | Application deployment |

---

## 📂 Project Structure

```text
movie-search-app/
│
├── public/
│   └── favicon.ico
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ErrorMessage.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── MovieDetailsPage.jsx
│   │   └── FavoritesPage.jsx
│   │
│   ├── hooks/
│   │   └── useFetch.js
│   │
│   ├── utils/
│   │   └── favorites.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

Open it in your browser.

---

## 🏗️ Production Build

Create a production build using:

```bash
npm run build
```

Preview the production version locally:

```bash
npm run preview
```

---

## 📱 Responsive Design

The application was designed and tested at the assignment's required screen widths:

### Mobile

```text
375px
```

### Tablet

```text
768px
```

### Desktop

```text
1024px and above
```

Tailwind responsive classes are used throughout the application.

This produces:

```text
Mobile  → 1 movie per row
Tablet  → 2 movies per row
Desktop → 4 movies per row
```

---

## 📚 Key Concepts Demonstrated

This project demonstrates practical understanding of:

- React components
- Props
- `useState`
- `useEffect`
- Custom React hooks
- API integration
- Asynchronous JavaScript
- `fetch()`
- JSON
- Conditional rendering
- React Router
- `Link`
- `useParams`
- Dynamic routes
- localStorage
- Environment variables
- Reusable components
- Responsive design
- Tailwind CSS
- Error handling
- Loading states
- Git and GitHub
- Vercel deployment

---

## Author

**Dominic Kisioyas**

Software Developer & AI Engineering 

---

© 2026 Dominic Kisioya. All rights reserved.