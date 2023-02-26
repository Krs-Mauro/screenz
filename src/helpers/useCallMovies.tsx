import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/store";
import { setIsBodyLoading, setMovies } from "../redux/mediaSlice";
import buildImageUrls from "./buildImageUrls";

const useCallMovies = async () => {
  const movies = useSelector((state: RootState) => state.media.movies);
  const dispatch = useDispatch();
  let finalData = null;

  dispatch(setIsBodyLoading(true));

  if (movies?.length < 1) {
    const rawData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f12e083657fb7b8262dd48b5850271b3"
    );
    const data = await rawData.json();
    finalData = buildImageUrls(data.results);
  }

  dispatch(setMovies(finalData));
};

export default useCallMovies;
