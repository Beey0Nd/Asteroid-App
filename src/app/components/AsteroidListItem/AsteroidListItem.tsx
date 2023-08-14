"use client"

import { useState } from "react"
import Image from "next/image"
import { Asteroid, Data, Distance } from "@/types";
import asteroidImage from "../../images/asteroid.png"
import Link from "next/link";

function AsteroidListItem({
    asteroid, distance, data
} : {
    asteroid: Asteroid, distance: Distance, data: Data
}) {
    const [ordered, setOrdered] = useState(false);

    const size = asteroid.estimated_diameter.kilometers.estimated_diameter_max > 0.2 ? "large" : "small"
    console.log(data);

    return (
        <li key={asteroid.name}>
            <p>{asteroid.name}</p>
            <p>{`${asteroid.estimated_diameter.kilometers.estimated_diameter_max}`}</p>
            <p>{asteroid.is_potentially_hazardous_asteroid ? <span>⚠</span> : ""}</p>
            <p>{asteroid.close_approach_data[0].miss_distance[distance]}</p>
            <p>{asteroid.close_approach_data[0].close_approach_date_full}</p>
            <Link href={{
                pathname: `/${asteroid.name}`, query: {
                // query: {

                // }       
            }}}>
                <Image
                    src={asteroidImage.src} 
                    alt="Asteroid image"
                    width={size === "large" ? 90 : 30}
                    height={size === "large" ? 90 : 30}
                />
            </Link>
            <button onClick={() => setOrdered(true)}>{ordered ? "В корзине" : "Заказать"}</button>
        </li>
    );
}

export default AsteroidListItem;