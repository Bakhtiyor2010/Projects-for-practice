import React, { useEffect, useState } from "react";
import { useMovies } from "../context/MoviesContext";
import { fetchMoviesByGenre, getImageUrl } from "../services/api";

const GenreSection = () => {
  const { genres, loading, openMovieDetails } = useMovies();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genreMovies, setGenreMovies] = useState([]);
  const [loadingGenreMovies, setLoadingGenreMovies] = useState(false);

  useEffect(() => {
    if (!loading && genres.length > 0) {
      setSelectedGenre(genres[0]);
    }
  }, [loading, genres]);

  useEffect(() => {
    const loadingGenreMovies = async () => {
      if (!selectedGenre) return;
      setLoadingGenreMovies(true);

      const movies = await fetchMoviesByGenre(selectedGenre.id);
      setGenreMovies(movies.slice(0));
      setLoadingGenreMovies(false);
    };
    loadingGenreMovies();
  }, [selectedGenre]);

  if (loading || !selectedGenre) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  const formatRating = (rating) => {
    return (Math.round(rating * 10) / 10).toFixed(1);
  };

  return (
    <section className="py-12 bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-shite mb-6">
          Browse by Genre
        </h2>

        {/* Genre Tabs */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex space-x-2 min-w-max">
            {/* Conditional Rendering */}
            {genres.slice(0).map((gen) => {
              return (
                <button
                  className={`px-4 py-2 rounded-md transition-colors text-sm cursor-pointer ${
                    selectedGenre?.id === gen.id
                      ? "bg-purple-600 text-white"
                      : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                  }`}
                  onClick={() => setSelectedGenre(gen)}
                >
                  {gen.name}
                </button>
              );
            })}
          </div>
        </div>

        {loadingGenreMovies ? (
          <div className="h-64 flex items-center justify-center">
            <div className="animate-pulse">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {genreMovies.map((movie)=>{
              return (
                <div
                  className="group cursor-pointer"
                  onClick={() => openMovieDetails(movie.id)}
                >
                  <div className="relative rounded-lg overflow-hidden bg-neutral-800">
                    <div className="aspect-[2/3]">
                      <img
                        src={getImageUrl(movie.poster_path, "w500")}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.758.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.839-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.758-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-yellow-400 text-sm font-medium">
                              {formatRating(movie.vote_average)}
                            </span>
                          </div>
                          <span className="text-neutral-400 text-sm">
                            {movie.release_date}
                          </span>
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md flex items-center justify-center gap-1 transition-all text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-11a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-white text-sm font-medium truncate">
                      {movie.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.758.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.839-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.758-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-neutral-400 text-xs">
                        {formatRating(movie.vote_average)}
                      </span>
                    </div>
                    <span className="text-neutral-500 text-xs">
                      {movie.release_date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default GenreSection;
