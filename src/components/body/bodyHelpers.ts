import { MutableRefObject } from "react";

import { useDispatch } from "react-redux";

import { setMovies, setShows } from "../../redux/mediaSlice";

import { buildShowImageUrls, buildMovieImageUrls } from "./buildImageUrls";

const buildURL = (type: string): string =>
  `https://api.themoviedb.org/3/${type}/popular?api_key=pleaseContactOwnerForTheKey`;

export const useFetchMovies = async (reference: MutableRefObject<boolean>) => {
  const dispatch = useDispatch();
  if (reference.current === false) {
    const rawData = await fetch(buildURL("movie"));
    const data = await rawData.json();
    dispatch(setMovies(buildMovieImageUrls(data.results)));
    reference.current = true;
  }
};

export const useFetchShows = async (reference: MutableRefObject<boolean>) => {
  const dispatch = useDispatch();
  if (reference.current === false) {
    const rawData = await fetch(buildURL("tv"));
    const data = await rawData.json();
    dispatch(setShows(buildShowImageUrls(data.results)));
    reference.current = true;
  }
};
