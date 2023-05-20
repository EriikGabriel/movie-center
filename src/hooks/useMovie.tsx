"use client";

import { useEffect, useState } from "react";

import { Movie, TmdbApi } from "tmdb-typescript-api";

export default function useMovie(name = "Cloudy with a Chance of Meatballs") {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const api: TmdbApi = new TmdbApi("b2467f1aca69af0d0863cd0b12087ee5");

    api.search.movies(name).subscribe((movies) => {
      let movie = movies.results[0];

      setMovie(movie);
    });
  }, [name]);

  return { movie };
}
