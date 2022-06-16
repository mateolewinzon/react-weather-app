import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    localWeather: {},
    selectedCitiesWeather: []
}

const weatherReducer = createReducer(initialState, (builder)=>{

})


export default weatherReducer