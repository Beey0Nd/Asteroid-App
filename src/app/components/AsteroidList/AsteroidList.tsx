"use client"

import { useState, useEffect } from "react"
import { v4 } from "uuid";
import { Asteroid, AsteroidListProps } from "@/types";
import { startDate } from "@/utils";
import AsteroidListItem from "../AsteroidListItem/AsteroidListItem";
import classes from "../AsteroidListItem/AsteroidListItem.module.css"

function AsteroidList({ data, distance, setOrdered }: AsteroidListProps) {
    const [currentDate, setCurrentDate] = useState<string>(startDate);
    const [asteroidsList, setAsteroidsList] = useState(data.near_earth_objects[startDate]);

    useEffect(() => {
        const asteroids = document.querySelectorAll("li")

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    const currDate = new Date(currentDate)
                    currDate.setDate(currDate.getDate() + 1)
                    const nextDay = currDate.toISOString().split('T')[0]

                    if (data.near_earth_objects[nextDay]) {
                        setAsteroidsList(prev => {
                            console.log([...prev], [...data.near_earth_objects[nextDay]]);
                            return [...prev, ...data.near_earth_objects[nextDay]]
                        })
                        setCurrentDate(nextDay)
                    }
                }
            })
        });

        observer.observe(asteroids[asteroids.length - 1])

        return () => {
            observer.observe(asteroids[asteroids.length - 1])
        };
    }, [currentDate]);

    useEffect(() => {
        const asteroids = document.querySelectorAll("li")

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) entry.target.classList.add(classes.show)
            })
        });

        asteroids.forEach(asteroid => observer.observe(asteroid))

        return () => {
            asteroids.forEach(asteroid => observer.unobserve(asteroid))
        };
    }, [currentDate]);

    return (
        <>
            <ul>
                {
                    asteroidsList.map((asteroid: Asteroid) => (
                        <AsteroidListItem
                            key={`${v4()}${asteroid.name}`}
                            setOrdered={setOrdered}
                            asteroid={asteroid}
                            distance={distance} />
                        )
                    )
                }
            </ul>
        </>
    );
}

export default AsteroidList;