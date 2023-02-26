import { configureStore } from "@reduxjs/toolkit";

import bodyTestingReducer from "./BodyTestingSlice";

export const store = configureStore({
  reducer: { media: bodyTestingReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
