import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getWeather } from "services/weatherService";
import type { Coords } from "types";


export const fetchLocalWeather = createAsyncThunk(
  "selectedCities/fetchLocal",
  async ({ lat, lon }: Coords) => {
    const response = await getWeather({lat, lon});
    return response;
  }
);

export const resetLocalWeather = createAction("RESET_LOCAL_WEATHER");


