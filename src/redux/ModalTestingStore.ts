import { configureStore } from "@reduxjs/toolkit";

import modalTestingReducer from "./ModalTestingSlice";

export const store = configureStore({
  reducer: { media: modalTestingReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
