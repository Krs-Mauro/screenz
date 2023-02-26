import { movie, show } from "../../helpers/types";

const BASE_URL = "http://image.tmdb.org/t/p/";
const SMALL_BACKDROP_SIZE = "w300";
const BIG_BACKDROP_SIZE = "w780";

export const buildMovieImageUrls = (arrayOfElements: movie[]) => {
  const newArray = arrayOfElements.map((element) => {
    const smallBackdropUrl = `${BASE_URL}/${SMALL_BACKDROP_SIZE}/${element.backdrop_path}`;
    const bigBackdropUrl = `${BASE_URL}/${BIG_BACKDROP_SIZE}/${element.backdrop_path}`;
    return {
      ...element,
      small_backdrop_path: smallBackdropUrl,
      big_backdrop_path: bigBackdropUrl,
    };
  });
  return newArray;
};
export const buildShowImageUrls = (arrayOfElements: show[]) => {
  const newArray = arrayOfElements.map((element) => {
    const smallBackdropUrl = `${BASE_URL}/${SMALL_BACKDROP_SIZE}/${element.backdrop_path}`;
    const bigBackdropUrl = `${BASE_URL}/${BIG_BACKDROP_SIZE}/${element.backdrop_path}`;
    return {
      ...element,
      small_backdrop_path: smallBackdropUrl,
      big_backdrop_path: bigBackdropUrl,
    };
  });
  return newArray;
};
