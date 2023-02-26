export interface movie {
  adult: boolean;
  backdrop_path: string | undefined;
  big_backdrop_path: string | undefined;
  small_backdrop_path: string | undefined;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface show {
  backdrop_path: string | undefined;
  big_backdrop_path: string | undefined;
  small_backdrop_path: string | undefined;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface MediaState {
  mediaType: "show" | "movie";
  movies: movie[];
  shows: show[];
  isModalOpen: boolean;
  selectedItem: any;
}
