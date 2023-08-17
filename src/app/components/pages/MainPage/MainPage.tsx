"use client"

import { AsteroidId, MainPageProps } from "@/types";
import AsteroidsData from "../../AsteroidsData/AsteroidsData";
import Basket from "../../Basket/Basket";
import classes from "./MainPage.module.css"
import { useState } from "react"

function MainPage({ data }: MainPageProps) {
    const [ordered, setOrdered] = useState<AsteroidId[]>([])

    return (
        <section className={classes.section}>
            <div>
                <h2>Ближайшие подлеты астероидов</h2>
                <AsteroidsData setOrdered={setOrdered} data={data}/>
            </div>
            <Basket ordered={ordered}/>
        </section>
    );
}

export default MainPage;