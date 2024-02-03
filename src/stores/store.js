import { configureStore } from "@reduxjs/toolkit";
import { flights } from "./features/flights";

export const makeStore = () => {
  return configureStore({
    reducer: {
      flights,
    },
  });
};
