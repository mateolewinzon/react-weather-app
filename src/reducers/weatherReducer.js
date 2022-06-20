import { createReducer } from "@reduxjs/toolkit";
import { fetchLocalWeather } from "../actions/weatherActions";

const initialWeatherState = { isLoading: false, data: null, error: null };

const initialState = {
  localWeather: { ...initialWeatherState, isLoading: true },
  selectedCitiesWeather: [],
};

const weatherReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchLocalWeather.pending, (state, action) => {
    state.localWeather.isLoading = true;
  });
  builder.addCase(fetchLocalWeather.fulfilled, (state, action) => {
    const { error, data } = action.payload;
    
    if (data) {
      state.localWeather.data = data
    } else {
      state.localWeather.error = error.message || "unknown_error";
    }
    state.localWeather.isLoading = false;
  });
});

export const selectWeather = (state) => state.weather;

export default weatherReducer;
