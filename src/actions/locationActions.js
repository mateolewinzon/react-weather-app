import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getIpLocation, reverseGeolocate } from "../services/locationService";

export const fetchLocationWithIp = createAsyncThunk(
  "location/ipLocation",
  async () => {
    const response = await getIpLocation();
    return response;
  }
);

export const fetchLocationCityName = createAsyncThunk(
  "location/cityName",
  async ({lat, lon}) => {
    const response = await reverseGeolocate(lat, lon);
    return response;
  }
);

export const setExactLocation = createAction("SET_EXACT_LOCATION");
