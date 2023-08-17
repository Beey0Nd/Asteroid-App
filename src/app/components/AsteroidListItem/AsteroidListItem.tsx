import Image from "next/image"
import { AsteroidListItemProps } from "@/types";
import asteroidImage from "../../images/asteroid.png"
import Link from "next/link";
import AsteroidListItemButton from "./AsteroidListItemButton";
import classes from "./AsteroidListItem.module.css"

function AsteroidListItem({
    asteroid, distance, setOrdered
}: AsteroidListItemProps) {
    const size = asteroid.estimated_diameter.kilometers.estimated_diameter_max > 0.2 ? "large" : "small"
   
    return (
        <li className={classes["asteroid-info"]}>
            <p>{asteroid.name}</p>
            <p>{`${asteroid.estimated_diameter.kilometers.estimated_diameter_max}`}</p>
            <p>{asteroid.is_potentially_hazardous_asteroid ? <span>⚠</span> : ""}</p>
            <p>{Math.round(+asteroid.close_approach_data[0].miss_distance[distance])}</p>
            <p>{asteroid.close_approach_data[0].close_approach_date_full}</p>
            <Link href={`/${asteroid.id}`}>
                <Image
                    src={asteroidImage.src}
                    alt="Asteroid image"
                    width={size === "large" ? 90 : 30}
                    height={size === "large" ? 90 : 30}
                />
            </Link>
            <AsteroidListItemButton setOrdered={setOrdered} asteroidId={asteroid.id} />
        </li>
    );
}

export default AsteroidListItem;