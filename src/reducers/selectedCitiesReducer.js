import { createReducer } from "@reduxjs/toolkit";
import {
  addCity,
  clearSearch,
  deleteCity,
  fetchCities,
} from "../actions/selectedCitiesActions";

const initialWeatherState = { isLoading: false, weather: null, error: null };

const initialState = {
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
      state.searchResults = data;
    }
  });
  builder.addCase(addCity.pending, (state, action) => {
    const cityIndex = state.selected.length;
    const city = action.meta.arg;
    state.selected[cityIndex] = {
      ...initialWeatherState,
      data: city,
      loading: true,
    };
  });
  builder.addCase(addCity.fulfilled, (state, action) => {
    const { data, error } = action.payload;
    const cityIndex = state.selected.length;
    state.selected[cityIndex - 1] = {
      loading: false,
      data: { ...state.selected[cityIndex - 1].data, weather: data },
    };
  });
  builder.addCase(deleteCity, (state, action) => {
    state.selected.splice(action.payload, 1);
  });
});

export const selectCitiesState = (state) => state.selectedCities;

export default selectedCitiesReducer;
