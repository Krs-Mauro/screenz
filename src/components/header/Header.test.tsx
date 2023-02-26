import React from "react";

import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Tests for the <Header> component", () => {
  it("Renders the app name", () => {
    render(<Header />);
    const appName = screen.getByText(/Screenz/i);
    expect(appName).toBeInTheDocument();
  });
  it("Renders the shows button", () => {
    render(<Header />);
    const showsButton = screen.getByText(/Shows/i);
    expect(showsButton).toBeInTheDocument();
  });
  it("Renders the movies button", () => {
    render(<Header />);
    const moviesButton = screen.getByText(/Movies/i);
    expect(moviesButton).toBeInTheDocument();
  });
});
