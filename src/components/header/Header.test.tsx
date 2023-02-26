import React from "react";

import { screen } from "@testing-library/react";

import Header from "./Header";
import ReduxRender from "../../helpers/ReduxRender";

describe("Tests for the <Header> component", () => {
  it("Renders the app name", () => {
    ReduxRender(<Header />);
    const logo = screen.getByTestId("svgLogo");
    expect(logo).toBeInTheDocument();
  });
  it("Renders the shows button", () => {
    ReduxRender(<Header />);
    const showsButton = screen.getByText(/Shows/i);
    expect(showsButton).toBeInTheDocument();
  });
  it("Renders the movies button", () => {
    ReduxRender(<Header />);
    const moviesButton = screen.getByText(/Movies/i);
    expect(moviesButton).toBeInTheDocument();
  });
});
