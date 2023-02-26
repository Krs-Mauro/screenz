import React from "react";

import { screen } from "@testing-library/react";

import DetailModal from "./DetailModal";
import ModalReduxRender from "../../helpers/ModalTestingReduxRender";

describe("Tests for the <Header> component", () => {
  it("Renders the movie name", () => {
    ModalReduxRender(<DetailModal open={true} onClose={() => {}} />);
    const title = screen.getByRole("heading", {
      name: /puss in boots: the last wish/i,
    });
    expect(title).toBeInTheDocument();
  });
  it("Renders the movie poster", () => {
    ModalReduxRender(<DetailModal open={true} onClose={() => {}} />);
    const poster = screen.getByRole("img", {
      name: /poster for the puss in boots: the last wish show/i,
    });
    expect(poster).toBeInTheDocument();
  });
  it("Renders the movie's rating'", () => {
    ModalReduxRender(<DetailModal open={true} onClose={() => {}} />);
    const rating = screen.getByRole("heading", { name: /8\.5 \/ 10/i });
    expect(rating).toBeInTheDocument();
  });
  it("Renders the movie's release date'", () => {
    ModalReduxRender(<DetailModal open={true} onClose={() => {}} />);
    const date = screen.getByRole("heading", {
      name: /first aired on: 2022-12-07/i,
    });
    expect(date).toBeInTheDocument();
  });
  it("Renders the movie's description'", () => {
    ModalReduxRender(<DetailModal open={true} onClose={() => {}} />);
    const description = screen.getByRole("heading", {
      name: /puss in boots discovers that his passion for adventure has taken its toll/i,
    });
    expect(description).toBeInTheDocument();
  });
});
