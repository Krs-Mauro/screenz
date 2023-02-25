import React, { useEffect } from "react";

function App() {
  const callMovies = async () => {
    console.log("loading movies...");
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f12e083657fb7b8262dd48b5850271b3"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log("movies loaded");
  };

  useEffect(() => {
    callMovies();
    // MOVIES CALL
    /* fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f12e083657fb7b8262dd48b5850271b3"
    )
      .then((res) => res.json())
      .then((data) => console.log(data)); */
    // CONFIGURATION CALL
    /* fetch(
      "https://api.themoviedb.org/3/configuration?api_key=f12e083657fb7b8262dd48b5850271b3"
    )
      .then((res) => res.json())
      .then((data) => console.log(data)); */
    // SHOWS CALL
    /* fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=f12e083657fb7b8262dd48b5850271b3"
    )
      .then((res) => res.json())
      .then((data) => console.log(data)); */
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;
