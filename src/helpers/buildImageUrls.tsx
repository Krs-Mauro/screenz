import { movie, show } from "./types";

const BASE_URL = "http://image.tmdb.org/t/p/";
const SMALL_BACKDROP_SIZE = "w300";
const BIG_BACKDROP_SIZE = "w780";

const buildImageUrls = (arrayOfElements: movie[] | show[]) => {
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

export default buildImageUrls;
