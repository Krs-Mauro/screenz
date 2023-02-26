import React, { useEffect, useRef } from "react";

import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import {
  buildMovieImageUrls,
  buildShowImageUrls,
} from "../../helpers/buildImageUrls";
import { setMovies, setShows } from "../../redux/mediaSlice";

import MovieRow from "./MovieRow";
import ShowRow from "./ShowRow";

const Body = () => {
  const mediaType = useSelector((state: RootState) => state.media.mediaType);
  const movies = useSelector((state: RootState) => state.media.movies);
  const shows = useSelector((state: RootState) => state.media.shows);
  const dispatch = useDispatch();
  const calledMovies = useRef<boolean>(false);
  const calledShows = useRef<boolean>(false);

  const buildURL = (type: string): string =>
    `https://api.themoviedb.org/3/${type}/popular?api_key=f12e083657fb7b8262dd48b5850271b3`;

  const fetchMovies = async () => {
    const rawData = await fetch(buildURL("movie"));
    const data = await rawData.json();
    dispatch(setMovies(buildMovieImageUrls(data.results)));
    calledMovies.current = true;
  };

  const fetchShows = async () => {
    const rawData = await fetch(buildURL("tv"));
    const data = await rawData.json();
    dispatch(setShows(buildShowImageUrls(data.results)));
    calledShows.current = true;
  };

  useEffect(() => {
    if (calledMovies.current === false) {
      fetchMovies();
    }
    if (calledShows.current === false) {
      fetchShows();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType]);

  return (
    <Stack sx={{ width: "100%", padding: "80px" }}>
      <Typography>{mediaType}</Typography>

      {mediaType === "movie" &&
        movies.map((movie) => <MovieRow key={movie.id} element={movie} />)}

      {mediaType === "show" &&
        shows.map((show) => <ShowRow key={show.id} element={show} />)}
    </Stack>
  );
};

export default Body;
