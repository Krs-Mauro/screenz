import { createSlice } from "@reduxjs/toolkit";

import { MediaState } from "../helpers/types";

const initialState: MediaState = {
  mediaType: "show",
  movies: [],
  shows: [],
  isBodyLoading: false,
  isModalLoading: false,
  isModalOpen: false,
  selectedItem: {},
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setMediaType: (state, action) => {
      state.mediaType = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setShows: (state, action) => {
      state.shows = action.payload;
    },
    setIsBodyLoading: (state, action) => {
      state.isBodyLoading = action.payload;
    },
    setIsModalLoading: (state, action) => {
      state.isModalLoading = action.payload;
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const {
  setMediaType,
  setMovies,
  setShows,
  setIsBodyLoading,
  setIsModalLoading,
  setIsModalOpen,
  setSelectedItem,
} = mediaSlice.actions;

export default mediaSlice.reducer;
