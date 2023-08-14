"use client"

import { Asteroid,  AsteroidListProps } from "@/types";
import { startDate } from "@/utils";
import AsteroidListItem from "../AsteroidListItem/AsteroidListItem";

function AsteroidList({ data, distance }: AsteroidListProps) {
    return (
        <ul>
            {
                data.near_earth_objects[startDate].map((asteroid: Asteroid) => (
                    <AsteroidListItem data={data} asteroid={asteroid} distance={distance}/>
                ))
            }
        </ul>
    );
}

export default AsteroidList;