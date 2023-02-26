import { createSlice } from "@reduxjs/toolkit";

import { MediaState } from "../helpers/types";

const initialState: MediaState = {
  mediaType: "movie",
  movies: [],
  shows: [],
  isModalOpen: true,
  selectedItem: {
    adult: false,
    backdrop_path: "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
    big_backdrop_path: "string",
    small_backdrop_path: "string",
    genre_ids: [16, 28, 12, 35, 10751, 14],
    id: 315162,
    original_language: "en",
    original_title: "Puss in Boots: The Last Wish",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    popularity: 2910.358,
    poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    release_date: "2022-12-07",
    title: "Puss in Boots: The Last Wish",
    video: false,
    vote_average: 8.5,
    vote_count: 4018,
  },
};

export const modalTestingSlice = createSlice({
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
  setIsModalOpen,
  setSelectedItem,
} = modalTestingSlice.actions;

export default modalTestingSlice.reducer;
