import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Marcinha",
  id: 24,
  favorites: [161235, 67283],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      console.log(action);
      const addThisId = action.payload;
      // Check if is already a fav or not:
      const newFav = state.favorites.includes(addThisId)
        ? state.favorites.filter((n) => n !== addThisId) // if it is, remove it
        : [...state.favorites, addThisId]; // if not, add it

      state.favorites = newFav;
    },
  },
});

export const { toggleFavorites } = userSlice.actions;
export default userSlice.reducer;
