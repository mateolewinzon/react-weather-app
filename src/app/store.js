import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../reducers/weatherReducer';
import locationReducer from '../reducers/locationReducer';


export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer
  },
});
