"use client"

import { useState } from "react"
import DistanceButtons from "../DistanceButtons/DistanceButtons";
import { AsteroidDataProps, Distance } from "@/types";
import AsteroidList from "../AsteroidList/AsteroidList";


function AsteroidData({ data }: AsteroidDataProps) {
    const [distance, setDistance] = useState<Distance>("kilometers")
    
    return (
        <>
            <DistanceButtons setDistance={setDistance} />
            <AsteroidList distance={distance} data={data} />
        </>
    );
}

export default AsteroidData;