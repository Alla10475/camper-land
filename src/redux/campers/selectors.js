// import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = state => state.campers.items;
export const selectFavorites = state => state.campers.favorites;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;

