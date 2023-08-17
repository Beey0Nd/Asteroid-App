"use client"
import { useState } from "react";
import { AsteroidListItemButtonProps } from "@/types";

function AsteroidListItemButton({setOrdered, asteroidId}: AsteroidListItemButtonProps) {
    const [isOrdered, setIsOrdered] = useState(false)

    function handleClick() {
        setOrdered(prev => [...prev, asteroidId])
        setIsOrdered(true)
    }

    return (
        <button 
            disabled={isOrdered} 
            onClick={handleClick}
        >{isOrdered ? "В корзине" : "Заказать"}</button>
    );
}

export default AsteroidListItemButton;