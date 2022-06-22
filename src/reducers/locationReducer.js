import { createReducer } from "@reduxjs/toolkit";
import {
  fetchLocationCityName,
  fetchLocationWithIp,
  setExactLocation,
} from "../actions/locationActions";

const initialState = {
  currentLocation: {
    approximate: null,
    exact: null,
  },
  localName: null,
  isLoading: false,
  error: null,
};

const locationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchLocationWithIp.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchLocationWithIp.fulfilled, (state, action) => {
      const { data, error } = action.payload;
      if (data) {
        state.currentLocation.approximate = data;
      } else {
        state.error = error?.message || "unknown_error";
      }
      state.isLoading = false;
    })
    .addCase(fetchLocationCityName.fulfilled, (state, action) => {
      const { data } = action.payload;
      if (data) {
        state.localName = data[0].name;
      }
    })
    .addCase(setExactLocation, (state, action) => {
      const coords = action.payload;
      state.localName = null;
      state.isLoading = false
      state.currentLocation.exact = coords;
    });
});

export const selectLocation = (state) => {
  const locationState = state.location;
  return {
    ...locationState,
    currentLocation:
      locationState.currentLocation.exact ||
      locationState.currentLocation.approximate,
  };
};

export default locationReducer;
