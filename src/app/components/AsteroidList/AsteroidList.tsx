"use client"

import { useState, useEffect } from "react"
import { v4 } from "uuid";
import { Asteroid, AsteroidListProps } from "@/types";
import { startDate } from "@/utils";
import AsteroidListItem from "../AsteroidListItem/AsteroidListItem";
import Head from "next/head";

function AsteroidList({ data, distance, setOrderedItems }: AsteroidListProps) {
    const [currentDate, setCurrentDate] = useState(startDate);
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
                        setAsteroidsList(prev => [...prev, ...data.near_earth_objects[nextDay]])
                        setCurrentDate(nextDay)
                    }
                }
            })
        });

        observer.observe(asteroids[asteroids.length - 1])

        return () => {
            observer.unobserve(asteroids[asteroids.length - 1])
        };
    }, [currentDate, data.near_earth_objects]);

    return (
        <ul>
            <Head>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="format-detection" content="date=no" /> 
            </Head>
            {
                asteroidsList.map((asteroid: Asteroid) => {
                    if(asteroid) return (
                        <AsteroidListItem
                            key={v4()}
                            setOrderedItems={setOrderedItems}
                            asteroid={asteroid}
                            distance={distance} />
                    )
                }
                )
            }
        </ul>
    );
}

export default AsteroidList;