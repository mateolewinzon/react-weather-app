import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWeather } from "../services/weatherService";

export const fetchLocalWeather = createAsyncThunk('weather/fetchLocal', async({lat, lon}) => {
    const response = await getWeather(lat, lon)
    return response
})