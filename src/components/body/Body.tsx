import React from "react";

import { Stack } from "@mui/system";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import useCallMovies from "../../helpers/useCallMovies";
import useCallShows from "../../helpers/useCallShows";

import MovieRow from "./MovieRow";
import ShowRow from "./ShowRow";

const Body = () => {
  useCallMovies();
  useCallShows();
  const mediaType = useSelector((state: RootState) => state.media.mediaType);
  const movies = useSelector((state: RootState) => state.media.movies);
  const shows = useSelector((state: RootState) => state.media.shows);

  return (
    <Stack sx={{ width: "100%" }}>
      {mediaType === "movie" &&
        movies?.length < 1 &&
        movies.map((movie) => <MovieRow element={movie} />)}
      {mediaType === "show" &&
        shows?.length < 1 &&
        shows.map((show) => <ShowRow element={show} />)}
    </Stack>
  );
};

export default Body;
