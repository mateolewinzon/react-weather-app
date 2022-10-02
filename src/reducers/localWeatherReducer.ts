import { createReducer } from "@reduxjs/toolkit";
import {
  fetchLocalWeather,
  resetLocalWeather,
} from "actions/localWeatherActions";

type State = {
  isLoading: boolean,
  data: null | {[key: string]: any},
  error: null | string
}

const initialState: State = { isLoading: false, data: null, error: null };

const weatherReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchLocalWeather.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(fetchLocalWeather.fulfilled, (state, action) => {
    const { error, data } = action.payload;

    if (data) {
      state.data = data;
    } else {
      state.error = error?.message || "unknown_error";
    }

    state.isLoading = false;
  });
  builder.addCase(resetLocalWeather, (state) => {
    state.data = null;
  });
});

export const selectWeather = (state) => state.localWeather;

export default weatherReducer;
