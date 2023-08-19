"use client"
import { useState } from "react";
import { AsteroidListItemButtonProps } from "@/types";
import classes from "./AsteroidListItem.module.css";

function AsteroidListItemButton({ 
    setOrderedItems, asteroidId, approachDate
}: AsteroidListItemButtonProps) {
    const [isOrdered, setIsOrdered] = useState(false)

    function handleClick() {
        setIsOrdered(true)
        setOrderedItems(prev => [...prev, {
            asteroidId, approachDate
        }])
    }

    return (
        <button
            className={isOrdered ? classes.ordered : ""}
            disabled={isOrdered}
            onClick={handleClick}
        >{isOrdered ? "В корзине" : "Заказать"}</button>
    );
}

export default AsteroidListItemButton;