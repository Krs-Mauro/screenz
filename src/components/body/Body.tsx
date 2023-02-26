import React, { useRef } from "react";

import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import { setIsModalOpen } from "../../redux/mediaSlice";

import MovieRow from "./MovieRow";
import ShowRow from "./ShowRow";
import { useFetchMovies, useFetchShows } from "./bodyHelpers";
import TableHeaders from "./TableHeaders";
import DetailModal from "./DetailModal";

const Body = () => {
  const mediaType = useSelector((state: RootState) => state.media.mediaType);
  const movies = useSelector((state: RootState) => state.media.movies);
  const shows = useSelector((state: RootState) => state.media.shows);
  const open = useSelector((state: RootState) => state.media.isModalOpen);
  const calledMovies = useRef<boolean>(false);
  const calledShows = useRef<boolean>(false);
  const dispatch = useDispatch();

  const onClose = () => dispatch(setIsModalOpen(false));

  useFetchMovies(calledMovies);
  useFetchShows(calledShows);

  return (
    <Stack sx={{ width: "80%", padding: "80px" }}>
      <Stack alignItems="center">
        <Typography
          color="#40291a"
          variant="h2"
          marginBottom="48px"
          width="fit-content"
        >{`World's top 20 popular ${mediaType}s`}</Typography>
      </Stack>

      <TableHeaders mediaType={mediaType} />

      {mediaType === "movie" &&
        movies.map((movie) => <MovieRow key={movie.id} element={movie} />)}

      {mediaType === "show" &&
        shows.map((show) => <ShowRow key={show.id} element={show} />)}

      <DetailModal open={open} onClose={onClose} />
    </Stack>
  );
};

export default Body;
