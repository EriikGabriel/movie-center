"use client";

import { useEffect, useState } from "react";
import { Movie, TMDB } from "tmdb-ts";

export default function useMovie(name = "Cloudy with a Chance of Meatballs") {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const tmdb = new TMDB(process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? "");

    tmdb.search.movies({ query: name }).then((movies) => {
      const movie = movies.results[0];
      setMovie(movie);
    });
  });

  return { movie };
}
