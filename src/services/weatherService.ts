import { URL_PARAMS, WEATHER_API_ENDPOINT } from "config/endpoints";
import { get } from "./publicService";
import type { Coords } from "types";


export const getWeather = async ({lat, lon}: Coords) => {
  const response = await get(
    WEATHER_API_ENDPOINT +
    URL_PARAMS.coords(
        { lat, lon },
        process.env.REACT_APP_OPENWEATHER_API_KEY
      )
  );
  return response;
};
