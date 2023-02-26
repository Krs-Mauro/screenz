import React from "react";

import { Box } from "@mui/system";

import Header from "./components/header/Header";

function App() {
  return (
    <Box
      className="App"
      sx={{ backgroundColor: "#f3efe6", width: "100%", minHeight: "100vh" }}
    >
      <Header />
    </Box>
  );
}

export default App;
