import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getIpLocation } from "../services/locationService";

export const fetchLocationWithIp = createAsyncThunk(
  "location/ipLocation",
  async () => {
    const { data, error } = await getIpLocation();
    return { data, error };
  }
);


export const setExactLocation = createAction('SET_EXACT_LOCATION')