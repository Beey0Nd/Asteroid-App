import { AsteroidId, Data } from "./types";

const _apiBase = "https://api.nasa.gov/neo/rest/v1"
const _apiKey = "2A6BKmbQVnxPviH4nktzJ1VrWkWTx01UnQzDAPCQ";

export let startDate = new Date().toISOString().split("T")[0];

export const getAsteroids = async () => {
    return await fetch(`${_apiBase}/feed?start_date=${startDate}&api_key=${_apiKey}`, {cache: "no-store"}).then(res => res.json())

}

export const getAsteroid = async (asteroidId: AsteroidId) => {
    return await fetch(`${_apiBase}/neo/${asteroidId}?api_key=${_apiKey}`).then(res => res.json())
}