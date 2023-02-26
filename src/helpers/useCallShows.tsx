import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/store";
import { setIsBodyLoading, setShows } from "../redux/mediaSlice";
import buildImageUrls from "./buildImageUrls";

const useCallShows = async () => {
  const shows = useSelector((state: RootState) => state.media.shows);
  const dispatch = useDispatch();
  let finalData = null;

  dispatch(setIsBodyLoading(true));

  if (shows?.length < 1) {
    const rawData = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=f12e083657fb7b8262dd48b5850271b3"
    );
    const data = await rawData.json();
    finalData = buildImageUrls(data.results);
  }

  dispatch(setShows(finalData));
};

export default useCallShows;
