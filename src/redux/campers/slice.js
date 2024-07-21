import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";
import { getInitialFavorites, updateFavorites } from "./helpers";

const initialFavorites = getInitialFavorites();

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    // favorites: [],
    favorites: initialFavorites ? JSON.parse(initialFavorites) : [],
    // status: "idle",
    loading: false,
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      const camperId = action.payload;
      state.favorites.push(camperId);
      updateFavorites(state.favorites);
    },
    removeFavorite: (state, action) => {
      const camperId = action.payload;
      state.favorites = state.favorites.filter(
        (id) => id !== camperId
      );
      updateFavorites(state.favorites);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addFavorite, removeFavorite } = campersSlice.actions;

export default campersSlice.reducer;
