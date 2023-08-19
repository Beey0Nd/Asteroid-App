"use client"

import { BasketProps } from "@/types";
import classes from "./Basket.module.css"
import { getAsteroidEnding } from "@/utils";
import Link from "next/link";

function Basket({ orderedItems }: BasketProps) {
    return (
        <div className={classes.basket}>
            <div>
                <h3>Корзина</h3>
                <p>{orderedItems.length} астероид{getAsteroidEnding(orderedItems.length)}</p>
            </div>
            <Link href={{ pathname: "/basket", query: {orderedItems: JSON.stringify(orderedItems)} }}>
                <button disabled={!orderedItems.length}>Отправить</button>
            </Link>
        </div>
    );
}

export default Basket;