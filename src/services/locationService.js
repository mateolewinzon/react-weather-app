import { IP_LOCATION_API_ENDPOINT } from "../config/endpoints"
import { get } from "./publicService"

export const getIpLocation = async () => {
    const response = await get(IP_LOCATION_API_ENDPOINT) 
    return response
}