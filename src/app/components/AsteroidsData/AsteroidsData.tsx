"use client"

import { useState } from "react"
import DistanceButtons from "../DistanceButtons/DistanceButtons";
import { AsteroidDataProps, Distance } from "@/types";
import AsteroidList from "../AsteroidList/AsteroidList";


function AsteroidsData({ data, setOrdered }: AsteroidDataProps) {
    const [distance, setDistance] = useState<Distance>("kilometers")
    
    return (
        <>
            <DistanceButtons setDistance={setDistance} />
            <AsteroidList setOrdered={setOrdered} distance={distance} data={data}/>
        </>
    );
}

export default AsteroidsData;