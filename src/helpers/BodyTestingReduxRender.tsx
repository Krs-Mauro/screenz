import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/BodyTestingStore";

const BodyReduxRender = (element: ReactElement) =>
  render(<Provider store={store}>{element}</Provider>);

export default BodyReduxRender;
