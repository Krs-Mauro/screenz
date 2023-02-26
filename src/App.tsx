import React from "react";

import { Stack } from "@mui/system";

import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  return (
    <Stack
      className="App"
      alignItems="center"
      sx={{ backgroundColor: "#f3efe6", width: "100%", minHeight: "100vh" }}
    >
      <Header />
      <Body />
    </Stack>
  );
}

export default App;
