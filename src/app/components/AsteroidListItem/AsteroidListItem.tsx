import Image from "next/image"
import Link from "next/link";
import AsteroidListItemButton from "./AsteroidListItemButton";
import { AsteroidListItemProps } from "@/types";
import { extractAsteroidName, formatToRuDate, kilometersToMeters } from "@/utils";
import asteroidImage from "@/images/asteroid.png"
import DistanceArrow from "@/icons/DistanceArrow.svg"
import classes from "./AsteroidListItem.module.css"

function AsteroidListItem({
    asteroid, distance, setOrderedItems
}: AsteroidListItemProps) {
    const isLarge = asteroid.estimated_diameter.kilometers.estimated_diameter_max > 0.2

    function renderHazardous(hazardous: boolean) {
        if (hazardous) {
            return (
                <p><span>⚠ </span>Опасен</p>
            )
        }
        return ""
    }

    return (
        <li className={classes.li}>
            <p className={classes.date}>{formatToRuDate(asteroid.close_approach_data[0].close_approach_date_full)}</p>
            <div>
                <div className={classes.distance}>
                    <p>{Math.round(+asteroid.close_approach_data[0].miss_distance[distance]).toLocaleString("ru")} {distance === "lunar" ? "лунных орбит" : "км"}</p>
                    <Image
                        src={DistanceArrow.src} 
                        alt="Distance arrow image"
                        width={100}
                        height={6}
                    />
                </div>
                <div>
                    <Link href={`/${asteroid.id}`}>
                        <Image
                            src={asteroidImage.src}
                            alt="Asteroid image"
                            width={isLarge ? 45 : 25}
                            height={isLarge ? 45 : 25}
                        />
                    </Link>
                </div>
                <div className={classes.name}>
                    <p>{extractAsteroidName(asteroid.name)}</p>
                    <p>Ø {kilometersToMeters(asteroid.estimated_diameter.kilometers.estimated_diameter_max)} м</p>
                </div>
            </div>
            <div className={classes.order}>
                <AsteroidListItemButton
                    setOrderedItems={setOrderedItems} asteroidId={asteroid.id} />
                {renderHazardous(asteroid.is_potentially_hazardous_asteroid)}
            </div>
        </li>
    );
}

export default AsteroidListItem;