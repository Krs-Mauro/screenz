import { createSlice } from "@reduxjs/toolkit";

import { MediaState } from "../helpers/types";

const initialState: MediaState = {
  mediaType: "movie",
  movies: [
    {
      adult: false,
      backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      big_backdrop_path: "string",
      small_backdrop_path: "string",
      genre_ids: [28, 12, 878],
      id: 505642,
      original_language: "en",
      original_title: "Black Panther: Wakanda Forever",
      overview:
        "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      popularity: 3407.581,
      poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      release_date: "2022-11-09",
      title: "Black Panther: Wakanda Forever",
      video: false,
      vote_average: 7.4,
      vote_count: 3538,
    },
    {
      adult: false,
      backdrop_path: "/irwQcdjwtjLnaA0iErabab9PrmG.jpg",
      big_backdrop_path: "string",
      small_backdrop_path: "string",
      genre_ids: [28, 12, 53],
      id: 646389,
      original_language: "en",
      original_title: "Plane",
      overview:
        "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
      popularity: 3057.298,
      poster_path: "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
      release_date: "2023-01-12",
      title: "Plane",
      video: false,
      vote_average: 6.8,
      vote_count: 626,
    },
    {
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
  ],
  shows: [],
  isModalOpen: false,
  selectedItem: {},
};

export const bodyTestingSlice = createSlice({
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
} = bodyTestingSlice.actions;

export default bodyTestingSlice.reducer;
