import React from "react";

import { Stack } from "@mui/system";

import { movie } from "../../helpers/types";

type Props = {
  element: movie;
};

const MovieRow = ({ element }: Props) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <h1>{element.title}</h1>
    </Stack>
  );
};

export default MovieRow;
