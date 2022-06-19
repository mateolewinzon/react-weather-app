import { QUERY_PARAMS, SEARCH_CITY_ENDPOINT } from "../config/endpoints";
import { get } from "./publicService";

export const searchCity = async (cityName) => {
  const response = await get(
    SEARCH_CITY_ENDPOINT +
      QUERY_PARAMS.cities(
        { cityName, limit: 5 },
        process.env.REACT_APP_OPENWEATHER_API_KEY
      )
  );
  return response;
};
