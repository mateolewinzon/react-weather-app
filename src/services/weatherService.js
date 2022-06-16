import { WEATHER_API_ENDPOINT } from "../config/endpoints"
import { get } from "./publicService"

export const getWeather = ({lat, long}) => {
    return {data, error} = get(`${WEATHER_API_ENDPOINT}/`) 
}