export const mockLocation = {
  lat: -34.6,
  lon: -58.38,
};

export const weatherData = {
  current: {
    temp: 270,
    weather: [{ id: 800 }],
  },
  daily: Array(5).fill({
    dt: 1655650800,
    temp: {
      min: 281.87,
      max: 288.72,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
    ],
  }),
};

export const mockAddedCityWeatherData = {name: 'Córdoba', weather: {current: {temp: 290, weather: [{icon: 'd10'}]}}}

export const mockLocalCityName = [{ name: "Buenos Aires" }];

export const mockCitySearchResults = Array(5).fill({name: 'Córdoba', country: 'AR'})
