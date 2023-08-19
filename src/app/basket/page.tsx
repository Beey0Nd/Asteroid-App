"use client"

import { v4 } from "uuid";
import { BasketListItem } from "./BasketListItem";
import classes from "./page.module.css"
import { BasketPageProps, OrderedItem } from "@/types";

function BasketPage({
    searchParams
}: BasketPageProps) {
    const orderedItems = JSON.parse(searchParams.orderedItems as unknown as string)

    return (
        <section className={classes.basketPage}>
            <h3>Заказ отправлен!</h3>
            <ul>
                {orderedItems.map((item: OrderedItem) => (
                    <BasketListItem 
                    key={v4()}      
                    asteroidId={item.asteroidId}
                    approachDate={item.approachDate}
                         />
                ))}
            </ul>
        </section>
    );
}

export default BasketPage;