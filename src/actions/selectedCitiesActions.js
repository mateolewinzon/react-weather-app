import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getCities } from "../services/citiesService";


export const fetchCities = createAsyncThunk(
  "selectedCities/searchCities",
  async (cityName) => {
    const response = await getCities(cityName);
    return response;
  }
);

export const clearSearch = createAction("CLEAR_SEARCH");

export const addCity = createAction("ADD_CITY")