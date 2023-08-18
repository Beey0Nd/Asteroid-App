import Image from "next/image"
import Link from "next/link";
import { Asteroid, AsteroidId } from "@/types";
import { getAsteroid, extractAsteroidName, formatToRuDate, kilometersToMeters } from "@/utils";
import asteroidImage from "@/images/asteroid.png"
import DistanceArrow from "@/icons/DistanceArrow.svg"
import classes from "@/app/components/AsteroidListItem/AsteroidListItem.module.css"


export async function BasketListItem({
    asteroidId
}: {
    asteroidId: AsteroidId
}) {
    const data: Asteroid = await getAsteroid(asteroidId)

    const isLarge = data.estimated_diameter.kilometers.estimated_diameter_max > 0.2

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
            <p className={classes.date}>{formatToRuDate(data.close_approach_data[0].close_approach_date_full)}</p>
            <div>
                <div className={classes.distance}>
                    <p>{Math.round(+data.close_approach_data[0].miss_distance["lunar"]).toLocaleString("ru") + " лунных орбит"}</p>
                    <img src={DistanceArrow.src} alt="Distance arrow image" />
                </div>
                <div>
                    <Link href={`/${data.id}`}>
                        <Image
                            src={asteroidImage.src}
                            alt="Asteroid image"
                            width={isLarge ? 45 : 25}
                            height={isLarge ? 45 : 25}
                        />
                    </Link>
                </div>
                <div className={classes.name}>
                    <p>{extractAsteroidName(data.name)}</p>
                    <p>Ø {kilometersToMeters(data.estimated_diameter.kilometers.estimated_diameter_max)} м</p>
                </div>
            </div>
            <div className={classes.order}>
                {renderHazardous(data.is_potentially_hazardous_asteroid)}
            </div>
        </li>
    );
}