import React from "react";

import { Box } from "@mui/system";

import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  return (
    <Box
      className="App"
      sx={{ backgroundColor: "#f3efe6", width: "100%", minHeight: "100vh" }}
    >
      <Header />
      <Body />
    </Box>
  );
}

export default App;
