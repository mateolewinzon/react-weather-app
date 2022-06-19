import { URL_PARAMS, WEATHER_API_ENDPOINT } from "../config/endpoints";
import { get } from "./publicService";

export const getWeather = async (lat, lon) => {
  const response = await get(
    WEATHER_API_ENDPOINT +
    URL_PARAMS.coords(
        { lat, lon },
        process.env.REACT_APP_OPENWEATHER_API_KEY
      )
  );
  return response;
};
