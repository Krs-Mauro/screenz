import React from "react";
import { Grid, Typography } from "@mui/material";

const capitalizeFirstLetter = (string: string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const TableHeaders = ({ mediaType }: { mediaType: string }) => (
  <Grid container sx={{ margin: "2px", padding: "8px" }}>
    <Grid xs={4} item alignSelf="center">
      <Typography color="#40291a" variant="h3">
        Popularity
      </Typography>
    </Grid>

    <Grid xs={7} item alignSelf="center">
      <Typography color="#40291a" variant="h3">
        {capitalizeFirstLetter(mediaType)}
      </Typography>
    </Grid>

    <Grid xs={1} item alignSelf="center">
      <Typography color="#40291a" variant="h3">
        Stars
      </Typography>
    </Grid>
  </Grid>
);

export default TableHeaders;
