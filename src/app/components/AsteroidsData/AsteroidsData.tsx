"use client"

import { memo, useState } from "react"
import DistanceButtons from "../DistanceButtons/DistanceButtons";
import { AsteroidDataProps, Distance } from "@/types";
import AsteroidList from "../AsteroidList/AsteroidList";


function AsteroidsData({ data, setOrderedItems }: AsteroidDataProps) {
    const [distance, setDistance] = useState<Distance>("kilometers")

    return (
        <>
            <DistanceButtons distance={distance} setDistance={setDistance} />
            <AsteroidList setOrderedItems={setOrderedItems} distance={distance} data={data} />
        </>
    );
}

export default memo(AsteroidsData);