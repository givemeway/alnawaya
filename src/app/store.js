import { configureStore } from "@reduxjs/toolkit";
import tabSelectionReducer from "../features/tabSelectedSlice.js";

export const store = configureStore({
  reducer: {
    tabSelection: tabSelectionReducer,
  },
});
