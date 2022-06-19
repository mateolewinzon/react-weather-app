import { rest } from "msw";
import {
  IP_LOCATION_API_ENDPOINT,
  REVERSE_GEOCODING_ENDPOINT,
  URL_PARAMS,
  WEATHER_API_ENDPOINT,
} from "../config/endpoints";
import { mockLocalCityName, mockLocalWeather, mockLocation } from "./responses";

export const handlers = [
  rest.get(IP_LOCATION_API_ENDPOINT, (req, res, ctx) => {
    return res(ctx.json(mockLocation));
  }),
  rest.get(WEATHER_API_ENDPOINT, (req, res, ctx) => {
    return res(ctx.json(mockLocalWeather));
  }),
  rest.get(REVERSE_GEOCODING_ENDPOINT, (req, res, ctx) => {
    return res(ctx.json(mockLocalCityName));
  }),
  
];
