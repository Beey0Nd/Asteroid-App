"use client"
import { DistanceButtonsProps } from "@/types";

function DistanceButtons({ setDistance }: DistanceButtonsProps) {
    return (
        <span>
            <button
                onClick={() => setDistance("kilometers")}
            >В километрах</button> | <button
                onClick={() => setDistance("lunar")}
            >В лунных орбитах</button>
        </span>
    );
}

export default DistanceButtons;