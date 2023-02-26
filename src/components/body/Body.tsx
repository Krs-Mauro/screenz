import React, { useRef } from "react";

import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import MovieRow from "./MovieRow";
import ShowRow from "./ShowRow";
import { useFetchMovies, useFetchShows } from "./bodyHelpers";
import TableHeaders from "./TableHeaders";

const Body = () => {
  const mediaType = useSelector((state: RootState) => state.media.mediaType);
  const movies = useSelector((state: RootState) => state.media.movies);
  const shows = useSelector((state: RootState) => state.media.shows);
  const calledMovies = useRef<boolean>(false);
  const calledShows = useRef<boolean>(false);

  useFetchMovies(calledMovies);
  useFetchShows(calledShows);

  return (
    <Stack sx={{ width: "80%", padding: "80px" }}>
      <Typography
        color="#40291a"
        variant="h1"
        marginBottom="48px"
      >{`World's top 20 popular ${mediaType}s`}</Typography>

      <TableHeaders mediaType={mediaType} />

      {mediaType === "movie" &&
        movies.map((movie) => <MovieRow key={movie.id} element={movie} />)}

      {mediaType === "show" &&
        shows.map((show) => <ShowRow key={show.id} element={show} />)}
    </Stack>
  );
};

export default Body;
