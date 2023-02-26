import React from "react";

import { Stack, Box } from "@mui/system";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { setMediaType } from "../../redux/mediaSlice";
import ScreenzLogo from "./ScreenzLogo";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      width="100%"
      justifyContent="space-between"
      /* alignItems="center" */
      sx={{
        backgroundColor: "#fac601",
        width: "100%",
        padding: "8px 0 0 0 ",
      }}
    >
      <Box marginLeft="48px">
        <ScreenzLogo />
      </Box>
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
  height: "48px",
  width: "184px",
  color: "#40291a",
  fontSize: "32px",
  margin: "0 80px 0 40px",
  backgroundColor: "#fac601",
  boxShadow: "none",
  "&:hover": { backgroundColor: "#DBAD00" },
};
