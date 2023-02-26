import React from "react";

import { Grid, Typography } from "@mui/material";

import { movie } from "../../helpers/types";

type Props = {
  element: movie;
};

const MovieRow = ({ element }: Props) => {
  return (
    <Grid
      container
      sx={{
        margin: "2px",
        padding: "8px",
        borderRadius: "8px",
        "&:hover": { backgroundColor: "#D2CFC6" },
      }}
    >
      <Grid xs={4} item alignSelf="center">
        <Typography color="#40291a" variant="h5" marginLeft="16px">
          {element.popularity} points
        </Typography>
      </Grid>
      <Grid xs={1} item alignSelf="center">
        <img
          src={element.small_backdrop_path}
          alt={`Poster for the ${element.title} show`}
          style={{
            maxWidth: "100%",
            objectFit: "contain",
            borderRadius: "8px",
            marginTop: "3px",
          }}
        />
      </Grid>
      <Grid xs={6} item alignSelf="center">
        <Typography color="#40291a" variant="h6" marginLeft="16px">
          {element.title}
        </Typography>
      </Grid>
      <Grid xs={1} item alignSelf="center">
        <Typography color="#40291a" variant="h5">
          {element.vote_average} / 10
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MovieRow;
