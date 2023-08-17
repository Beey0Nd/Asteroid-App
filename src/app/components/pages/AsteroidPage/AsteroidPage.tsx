"use client"

import { useState } from "react";
import AsteroidPageList from "./AsteroidPageList";
import { ApproachData } from "@/types";

function AsteroidPage({
    data
}: {
    data: ApproachData
}) {
    const [page, setPage] = useState(0);

    function handleClick(direction: "left" | "right") {
        console.log(data);
        if (direction === "left") {
            if (page - 1 >= 0) {
                setPage(prev => prev - 1)
            } else {
                setPage(Math.ceil(data.close_approach_data.length / 10) - 1)
            }
        } else {
            if (page + 1 <= Math.ceil(data.close_approach_data.length / 10) - 1) {
                setPage(prev => prev + 1)
            } else {
                setPage(0)
            }
        }
    }

    return (
        <div>
            <h3>{data.name}</h3>
            <div>
                <button onClick={() => handleClick("left")}>{"<"}</button>
                <div>{page + 1}</div>
                <button onClick={() => handleClick("right")}>{">"}</button>
            </div>
            <AsteroidPageList page={page} approaches={data.close_approach_data} />
        </div>
    );
}

export default AsteroidPage;