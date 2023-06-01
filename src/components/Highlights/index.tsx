"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PopularMovies, TMDB } from "tmdb-ts";
import { Container } from "./styles";

type HighlightsProps = {};

export function Highlights() {
  const [trending, setTrending] = useState<PopularMovies["results"]>([]);

  useEffect(() => {
    const tmdb = new TMDB(process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? "");

    tmdb.movies.popular().then((data) => {
      setTrending(data.results);
    });
  }, []);

  return (
    <Container>
      <Image
        src={
          `https://image.tmdb.org/t/p/original${trending[0]?.backdrop_path}` ??
          ""
        }
        alt="Movie cover"
        fill
        style={{ objectFit: "cover", position: "absolute" }}
      />
    </Container>
  );
}
