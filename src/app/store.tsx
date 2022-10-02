import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import localWeatherReducer from "reducers/localWeatherReducer";
import selectedCitiesReducer from "reducers/selectedCitiesReducer";
import locationReducer from "reducers/locationReducer";

export const store = configureStore({
  reducer: {
    localWeather: localWeatherReducer,
    selectedCities: selectedCitiesReducer,
    location: locationReducer,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
