"use client"

import { useState } from "react";
import AsteroidPageList from "./AsteroidPageList";
import { ApproachData } from "@/types";
import classes from "./AsteroidPage.module.css"
import AsteroidPageButtons from "./AsteroidPageButtons";

function AsteroidPage({
    data
}: {
    data: ApproachData
}) {
    const [page, setPage] = useState(0);

    return (
        <section className={classes.asteroidPage}>

            <h3>
                <p>Астероид</p>
                <p>{data.name}</p>
            </h3>
            <div>
                <AsteroidPageButtons
                    page={page}
                    setPage={setPage}
                    data={data}
                />
            </div>
            <AsteroidPageList page={page} approaches={data.close_approach_data} />
            <div>
                <AsteroidPageButtons
                    page={page}
                    setPage={setPage}
                    data={data}
                />
            </div>
        </section>
    );
}

export default AsteroidPage;