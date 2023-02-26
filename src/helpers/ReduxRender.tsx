import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const ReduxRender = (element: ReactElement) =>
  render(<Provider store={store}>{element}</Provider>);

export default ReduxRender;
