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
  error: null
};

const selectedCitiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(clearSearch, (state) => {
    state.searchResults = [];
  });
  builder.addCase(fetchCities.pending, (state) => {
    state.searchResults = [];
  });
  builder.addCase(fetchCities.fulfilled, (state, action) => {
    const { data, error } = action.payload;
    if (data) {
      state.searchResults = data;
      state.error = null
    } else {
      state.error = error.message || "unknown_error"
    }
  });
   builder.addCase(addCity.pending, (state, action) => {
    const cityIndex = action.meta.arg.index
    const city = action.meta.arg.city;
    state.selected[cityIndex] = {
      ...initialWeatherState,
      data: city,
      loading: true,
    };
  });
  builder.addCase(addCity.fulfilled, (state, action) => {
    const { data, error } = action.payload;
    const cityIndex = action.meta.arg.index
    if (data) {
      state.selected[cityIndex] = {
        loading: false,
        data: { ...state.selected[cityIndex].data, weather: data },
        error: null
      };
    } else {
      state.selected[cityIndex] = {
        data: {...state.selected[cityIndex].data},
        loading: false,
        error: error.message || "unknown_error"
      };
    }
    
  });
  builder.addCase(deleteCity, (state, action) => {
    state.selected.splice(action.payload, 1);
  });
});

export const selectCitiesState = (state) => state.selectedCities;

export default selectedCitiesReducer;
