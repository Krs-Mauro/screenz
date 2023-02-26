import React from "react";

import { Stack } from "@mui/system";

import { show } from "../../helpers/types";

type Props = {
  element: show;
};

const ShowRow = ({ element }: Props) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <h1>{element.name}</h1>
    </Stack>
  );
};

export default ShowRow;
