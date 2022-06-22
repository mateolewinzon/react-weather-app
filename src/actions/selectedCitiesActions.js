import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getCities } from "../services/citiesService";
import { getWeather } from "../services/weatherService";

export const fetchCities = createAsyncThunk(
  "selectedCities/searchCities",
  async (cityName) => {
    const response = await getCities(cityName);
    return response;
  }
);

export const addCity = createAsyncThunk(
  "selectedCities/fetchWeather",
  async ({city, index}) => {
    const { lat, lon } = city;
    const response = await getWeather(lat, lon);
    return response;
  }
);

export const clearSearch = createAction("CLEAR_SEARCH");

export const deleteCity = createAction("DELETE_CITY") 
