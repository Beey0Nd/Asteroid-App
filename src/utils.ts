import { AsteroidId } from "./types";

const _apiBase = "https://api.nasa.gov/neo/rest/v1"
const _apiKey = "2A6BKmbQVnxPviH4nktzJ1VrWkWTx01UnQzDAPCQ";

export let startDate = new Date().toISOString().split("T")[0];

export const getAsteroids = async () => {
    return await fetch(`${_apiBase}/feed?start_date=${startDate}&api_key=${_apiKey}`).then(res => res.json())

}

export const getAsteroid = async (asteroidId: AsteroidId) => {
    return await fetch(`${_apiBase}/neo/${asteroidId}?api_key=${_apiKey}`).then(res => res.json())
}

export function getAsteroidEnding(length: number) {
    if (length % 10 === 1 && length % 100 !== 11) {
        return "";
    } else if ([2, 3, 4].includes(length % 10) && ![12, 13, 14].includes(length % 100)) {
        return "а";
    } else {
        return "ов";
    }
}

export function determineOrbitingBody(orbitingBody: string) {
    switch (orbitingBody) {
        case "Earth":
            return "Земля"
        case "Venus":
            return "Венера"
        case "Mars":
            return "Марс"
        default:
            return orbitingBody
    }
}

export function formatToRuDate(engDate: string) {
    const dateObj = new Date(engDate);

    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('ru', { month: 'short' });
    const year = dateObj.getFullYear();

    const ruDateString = `${day} ${month.replace(".", "")} ${year}`;

    return ruDateString
}

export function extractAsteroidName(str: string) {
    return str.split('(')[1].split(')')[0].trim()
}

export function kilometersToMeters(km: number) {
    return Math.round(km * 1000)
} 