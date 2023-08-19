"use client"

import { useState } from "react"
import { MainPageProps, OrderedItem } from "@/types";
import AsteroidsData from "../../AsteroidsData/AsteroidsData";
import Basket from "../../Basket/Basket";
import classes from "./MainPage.module.css"

function MainPage({ data }: MainPageProps) {
    const [orderedItems, setOrderedItems] = useState<OrderedItem[]>([])

    return (
        <section className={classes.section}>
            <div>
                <h2>Ближайшие подлеты астероидов</h2>
                <AsteroidsData setOrderedItems={setOrderedItems} data={data} />
            </div>
            <Basket orderedItems={orderedItems} />
        </section>
    );
}

export default MainPage;