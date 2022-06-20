import { createReducer } from "@reduxjs/toolkit";
import {
  clearSearch,
  fetchCities,
} from "../actions/weatherActions";

const initialWeatherState = { isLoading: false, data: null, error: null };

const initialState = {
  loading: false,
  searchResults: [],
  selected: [],
};

const selectedCitiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(clearSearch, (state) => {
    state.searchResults = [];
  });
  builder.addCase(fetchCities.pending, (state) => {
    state.loading = true;
    state.searchResults = [];
  });
  builder.addCase(fetchCities.fulfilled, (state, action) => {
    const { data, error } = action.payload;
    if (data) {
        console.log(data)
      state.searchResults = data;
    }
  });
});

export const selectCitiesState = (state) =>
  state.selectedCities;

export default selectedCitiesReducer;
