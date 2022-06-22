import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import localWeatherReducer from "../reducers/localWeatherReducer";
import selectedCitiesReducer from "../reducers/selectedCitiesReducer";
import locationReducer from "../reducers/locationReducer";

export const store = configureStore({
  reducer: {
    localWeather: localWeatherReducer,
    selectedCities: selectedCitiesReducer,
    location: locationReducer,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});
