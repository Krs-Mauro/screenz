import React from "react";

import { screen } from "@testing-library/react";

import ReduxRender from "../../helpers/ReduxRender";
import BodyReduxRender from "../../helpers/BodyTestingReduxRender";

import Body from "./Body";

describe("Tests for the <Body> component", () => {
  it("Renders the table title for shows", () => {
    ReduxRender(<Body />);
    const title = screen.getByRole("heading", {
      name: /world's top 20 popular shows/i,
    });
    expect(title).toBeInTheDocument();
  });
  it("Renders the table title for movies", () => {
    BodyReduxRender(<Body />);
    const title = screen.getByRole("heading", {
      name: /world's top 20 popular movies/i,
    });
    expect(title).toBeInTheDocument();
  });
  it("Renders the movies rows", () => {
    BodyReduxRender(<Body />);
    const rows = screen.getAllByTestId("movieRow");
    expect(rows).toHaveLength(3);
  });
  it("Renders the movie's popularity values", () => {
    BodyReduxRender(<Body />);
    const populariry = screen.getAllByRole("heading", { name: / points/i });
    expect(populariry).toHaveLength(3);
  });
  it("Renders the movie's ratings", () => {
    BodyReduxRender(<Body />);
    const ratings = screen.getAllByRole("heading", { name: /\/ 10/i });
    expect(ratings).toHaveLength(3);
  });
  it("Renders the Black Panther: Wakanda Forever movie's poster", () => {
    BodyReduxRender(<Body />);
    const poster = screen.getByRole("img", {
      name: /poster for the black panther: wakanda forever show/i,
    });
    expect(poster).toBeInTheDocument();
  });
  it("Renders the plane movie's poster", () => {
    BodyReduxRender(<Body />);
    const poster = screen.getByRole("img", {
      name: /poster for the plane show/i,
    });
    expect(poster).toBeInTheDocument();
  });
  it("Renders the puss in boots: the last wish movie's poster", () => {
    BodyReduxRender(<Body />);
    const poster = screen.getByRole("img", {
      name: /poster for the puss in boots: the last wish show/i,
    });
    expect(poster).toBeInTheDocument();
  });
  it("Renders the Black Panther: Wakanda Forever movie's title", () => {
    BodyReduxRender(<Body />);
    const title = screen.getByRole("heading", {
      name: /black panther: wakanda forever/i,
    });
    expect(title).toBeInTheDocument();
  });
  it("Renders the plane movie's title", () => {
    BodyReduxRender(<Body />);
    const title = screen.getByRole("heading", { name: /plane/i });
    expect(title).toBeInTheDocument();
  });
  it("Renders the puss in boots: the last wish movie's title", () => {
    BodyReduxRender(<Body />);
    const title = screen.getByRole("heading", {
      name: /puss in boots: the last wish/i,
    });
    expect(title).toBeInTheDocument();
  });
});
