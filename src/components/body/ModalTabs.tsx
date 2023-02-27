import React from "react";

import { Tabs, Tab, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import { setSelectedItem } from "../../redux/mediaSlice";
import type { movie, show } from "../../helpers/types";

const ModalTabs = () => {
  const mediaType = useSelector((state: RootState) => state.media.mediaType);
  const movies = useSelector((state: RootState) => state.media.movies);
  const shows = useSelector((state: RootState) => state.media.shows);
  const dispatch = useDispatch();

  const MovieList = ({ list }: { list: movie[] }): JSX.Element => {
    const MovieImageHolder = ({ element }: { element: movie }) => (
      <Box width="100px">
        <img
          src={element.small_backdrop_path}
          alt=""
          style={{
            maxWidth: "100%",
            objectFit: "contain",
            borderRadius: "8px",
            marginTop: "3px",
          }}
        />
      </Box>
    );
    return (
      <Tabs variant="scrollable">
        {list.map((movie) => (
          <Tab
            onClick={() => dispatch(setSelectedItem(movie))}
            label={movie.title}
            icon={<MovieImageHolder element={movie} />}
          />
        ))}
      </Tabs>
    );
  };

  const ShowList = ({ list }: { list: show[] }): JSX.Element => {
    const ShowImageHolder = ({ element }: { element: show }) => (
      <Box width="100px">
        <img
          src={element.small_backdrop_path}
          alt=""
          style={{
            maxWidth: "100%",
            objectFit: "contain",
            borderRadius: "8px",
            marginTop: "3px",
          }}
        />
      </Box>
    );
    return (
      <Tabs variant="scrollable">
        {list.map((show) => (
          <Tab
            onClick={() => dispatch(setSelectedItem(show))}
            label={show.name}
            icon={<ShowImageHolder element={show} />}
          />
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {mediaType === "movie" ? (
        <MovieList list={movies} />
      ) : (
        <ShowList list={shows} />
      )}
    </>
  );
};

export default ModalTabs;
