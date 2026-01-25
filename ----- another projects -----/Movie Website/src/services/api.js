import axios from "axios";

const API_KEY = "58ad70e4a6ed5b7bc5c676324aa7e4b1";
const BASE_URL = "https://api.themoviedb.org/3";

/* ================= AXIOS INSTANCE ================= */
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

/* ================= Trending Movies ================= */
export const fetchTrendingMovies = async () => {
  try {
    const { data } = await api.get("/trending/movie/week");
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies", error);
    return [];
  }
};

/* ================= Popular Movies ================= */
export const fetchPopularMovies = async () => {
  try {
    const { data } = await api.get("/movie/popular", {
      params: { page: 1 },
    });
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies", error);
    return [];
  }
};

/* ================= Top-Rated Movies ================= */
export const fetchTopRatedMovies = async () => {
  try {
    const { data } = await api.get("/movie/top_rated", {
      params: { page: 1 },
    });
    return data.results;
  } catch (error) {
    console.error("Error fetching top rated movies", error);
    return [];
  }
};

/* ================= By Genre ================= */
export const fetchMoviesByGenre = async (genreId) => {
  try {
    const { data } = await api.get("/discover/movie", {
      params: {
        with_genres: genreId,
        page: 1,
      },
    });
    return data.results;
  } catch (error) {
    console.error("Error fetching movies by genre", error);
    return [];
  }
};

/* ================= Genres ================= */
export const fetchGenres = async () => {
  try {
    const { data } = await api.get("/genre/movie/list");
    return data.genres;
  } catch (error) {
    console.error("Error fetching movie genres", error);
    return [];
  }
};

/* ================= Movie Details ================= */
export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await api.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error("Error fetching movie details", error);
    return null;
  }
};

/* ================= Search Movies ================= */
export const searchMovies = async (query) => {
  try {
    const { data } = await api.get("/search/movie", {
      params: {
        query,
        page: 1,
      },
    });
    return data.results;
  } catch (error) {
    console.error("Error searching movies", error);
    return [];
  }
};

/* ================= Image URL ================= */
export const getImageUrl = (path, size = "original") => {
  if (!path) {
    return "https://via.placeholder.com/400x600?text=No+Image+Available";
  }
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
