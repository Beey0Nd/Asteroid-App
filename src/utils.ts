import { Data } from "./types";

const _apiKey = "2A6BKmbQVnxPviH4nktzJ1VrWkWTx01UnQzDAPCQ";
export const startDate = new Date().toISOString().split("T")[0];
export const _api = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&api_key=${_apiKey}`

export function formatData(data: Data) {
    data.near_earth_objects
}