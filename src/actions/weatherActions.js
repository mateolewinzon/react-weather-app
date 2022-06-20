import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getWeather } from "../services/weatherService";
import { getCities, searchCity } from "../services/citiesService";

export const fetchLocalWeather = createAsyncThunk(
  "selectedCities/fetchLocal",
  async ({ lat, lon }) => {
    const response = await getWeather(lat, lon);
    return response;
  }
);

export const resetLocalWeather = createAction("RESET_LOCAL_WEATHER");

export const fetchCities = createAsyncThunk(
  "selectedCities/searchCities",
  async (cityName) => {
    const response = await getCities(cityName);
    return response
  }
);

export const clearSearch = createAction("CLEAR_SEARCH")
