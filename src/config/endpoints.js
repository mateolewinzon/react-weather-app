export const WEATHER_API_ENDPOINT =
  "https://api.openweathermap.org/data/2.5/forecast";
export const SEARCH_CITY_ENDPOINT =
  "http://api.openweathermap.org/geo/1.0/direct";
export const IP_LOCATION_API_ENDPOINT = "http://ip-api.com/json/";

export const QUERY_PARAMS = {
  forecast: ({ lat, lon }, apiKey) => `?lat=${lat}&lon=${lon}&appid=${apiKey}`,
  cities: ({ cityName, countryCode, limit }, apiKey) =>
    `?q=${cityName},${countryCode}&limit=${limit}&appid=${apiKey}`,
};
