import { rest } from "msw";
import {
  IP_LOCATION_API_ENDPOINT,
  REVERSE_GEOCODING_ENDPOINT,
  SEARCH_CITY_ENDPOINT,
  WEATHER_API_ENDPOINT,
} from "../config/endpoints";
import {
  mockCitySearchResults,
  mockLocalCityName,
  weatherData,
  mockLocation,
} from "./mockData";

export const handlers = [
  rest.get(IP_LOCATION_API_ENDPOINT, (req, res, ctx) => {
    return res(ctx.json(mockLocation));
  }),
  rest.get(WEATHER_API_ENDPOINT, (req, res, ctx) => {
    return res(ctx.json(weatherData));
  }),
  rest.get(REVERSE_GEOCODING_ENDPOINT, (req, res, ctx) => {
    return res(ctx.json(mockLocalCityName));
  }),
  rest.get(SEARCH_CITY_ENDPOINT, (req, res, ctx) => {
    return res(ctx.json(mockCitySearchResults));
  }),
];
