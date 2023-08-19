"use client"

import Image from "next/image"
import Link from "next/link";
import { Asteroid, AsteroidId, BasketListItemProps } from "@/types";
import { getAsteroid, extractAsteroidName, formatToRuDate, kilometersToMeters } from "@/utils";
import asteroidImage from "@/images/asteroid.png"
import DistanceArrow from "@/icons/DistanceArrow.svg"
import classes from "@/app/components/AsteroidListItem/AsteroidListItem.module.css"


export async function BasketListItem({
    asteroidId, approachDate
}: BasketListItemProps) {
    const data: Asteroid = await getAsteroid(asteroidId)

    const isLarge = data.estimated_diameter.kilometers.estimated_diameter_max > 0.2
    const approach = getApproachData()

    function renderHazardous(hazardous: boolean) {
        if (hazardous) {
            return (
                <p><span>⚠ </span>Опасен</p>
            )
        }
        return ""
    }

    function getApproachData() {
        return data.close_approach_data.find(approach => approach.close_approach_date_full === approachDate)
    }

    return (
        <li className={classes.li}>
            <p className={classes.date}>{formatToRuDate(approach!.close_approach_date_full)}</p>
            <div>
                <div className={classes.distance}>
                    <p>{Math.round(+approach!.miss_distance.lunar) + " лунных орбит"}</p>
                    <Image 
                    src={DistanceArrow.src} alt="Distance arrow image"
                    width={100}
                    height={6}
                    />
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