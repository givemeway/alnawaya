import { createSlice } from "@reduxjs/toolkit";

const tabSelectionSlice = createSlice({
  name: "tabSelectionSlice",

  initialState: {
    earnings: false,
    anklets: false,
    necklace: false,
    bracelet: false,
    about: false,
    contact: false,
  },
  reducers: {
    setTabSelection: (state, actions) => {
      return { ...state, ...actions.payload };
    },
  },
});

export const { setTabSelection } = tabSelectionSlice.actions;
export default tabSelectionSlice.reducer;
