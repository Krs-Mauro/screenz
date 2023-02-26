import React from "react";

import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { setMediaType } from "../../redux/mediaSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "#40291a" }}
    >
      <Typography variant="h1" sx={{ color: "#fac601" }}>
        Screenz
      </Typography>
      <Stack direction="row" alignItems="center">
        <Button
          variant="contained"
          sx={buttonStyle}
          onClick={() => dispatch(setMediaType("show"))}
        >
          Shows
        </Button>
        <Button
          variant="contained"
          sx={buttonStyle}
          onClick={() => dispatch(setMediaType("movie"))}
        >
          Movies
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;

const buttonStyle = {
  height: "32px",
  width: "160px",
  margin: "0 80px 0 40px",
  backgroundColor: "#e76d20",
  "&:hover": { backgroundColor: "#B95516" },
};
