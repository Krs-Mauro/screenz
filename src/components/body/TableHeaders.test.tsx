import React from "react";

import { screen } from "@testing-library/react";

import TableHeaders from "./TableHeaders";
import ReduxRender from "../../helpers/ReduxRender";

describe("Tests for the <TableHeaders> component", () => {
  it("Renders the element's amount of stars", () => {
    ReduxRender(<TableHeaders mediaType="show" />);
    const title = screen.getByRole("heading", { name: /stars/i });
    expect(title).toBeInTheDocument();
  });
  it("Renders the element's popularity", () => {
    ReduxRender(<TableHeaders mediaType="show" />);
    const title = screen.getByRole("heading", { name: /popularity/i });
    expect(title).toBeInTheDocument();
  });
  it("Renders the shows's correct type", () => {
    ReduxRender(<TableHeaders mediaType="show" />);
    const title = screen.getByRole("heading", { name: /show/i });
    expect(title).toBeInTheDocument();
  });
  it("Renders the movie's correct type", () => {
    ReduxRender(<TableHeaders mediaType="movie" />);
    const title = screen.getByRole("heading", { name: /movie/i });
    expect(title).toBeInTheDocument();
  });
});
