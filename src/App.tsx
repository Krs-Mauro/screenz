import React, { useState, useEffect } from "react";

import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
import TvLogo from "./tvLogo";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const BREAKPOINT = 999;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      {width > BREAKPOINT ? (
        <Stack
          className="App"
          alignItems="center"
          sx={{ backgroundColor: "#f3efe6", width: "100%", minHeight: "100vh" }}
        >
          <Header />
          <Body />
        </Stack>
      ) : (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#fac601",
            width: "100%",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <Typography
            className="smallScreen"
            marginBottom="20px"
            sx={{ color: "#40291a" }}
            variant="h3"
          >
            This app looks better on a wide screen
          </Typography>
          <Typography
            className="smallScreen"
            marginBottom="40px"
            sx={{ color: "#40291a" }}
            variant="h4"
          >
            Please switch to a bigger device
          </Typography>
          <TvLogo />
        </Stack>
      )}
    </>
  );
}

export default App;
