export const WEATHER_API_ENDPOINT =
  "https://api.openweathermap.org/data/2.5/onecall";
export const SEARCH_CITY_ENDPOINT =
  "http://api.openweathermap.org/geo/1.0/direct";
export const IP_LOCATION_API_ENDPOINT = "http://ip-api.com/json/";
export const REVERSE_GEOCODING_ENDPOINT =
  "http://api.openweathermap.org/geo/1.0/reverse";


export const URL_PARAMS = {
  coords: ({ lat, lon }, apiKey) => `?lat=${lat}&lon=${lon}&appid=${apiKey}`,
  cities: ({ cityName, limit }, apiKey) =>
    `?q=${cityName}&limit=${limit}&appid=${apiKey}`,
  icons: (id) => `http://openweathermap.org/img/wn/${id}@2x.png`,
};
