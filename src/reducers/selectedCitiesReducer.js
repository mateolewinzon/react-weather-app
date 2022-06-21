import { createReducer } from "@reduxjs/toolkit";
import {
    addCity,
  clearSearch,
  fetchCities,
} from "../actions/selectedCitiesActions";

const initialWeatherState = { isLoading: false, data: null, error: null };

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
  builder.addCase(addCity, (state, action)=>{

    if (state.selected.length < 5) {
        state.selected = [...state.selected, action.payload]
    } 
  })
});

export const selectCitiesState = (state) =>
  state.selectedCities;

export default selectedCitiesReducer;
