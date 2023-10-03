import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      const newIds = state.ids.filter((id) => id !== action.payload.id);
      state.ids = newIds;
    },
  },
});

export default favouritesSlice.reducer;
export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;
