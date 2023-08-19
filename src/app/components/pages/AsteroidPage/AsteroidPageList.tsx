import { v4 } from "uuid";
import { Approach } from "@/types";
import { determineOrbitingBody } from "@/utils";

function AsteroidPageList({
    approaches, page
}: {
    approaches: Approach[], page: number
}) {

    return (
        <ul>
            {
                approaches.slice(page * 10, page * 10 + 10).map((approach: Approach) => {
                    return (
                        <li key={v4()}>
                            <p>Скорость: <span>{Math.round(+approach.relative_velocity.kilometers_per_hour)} км/ч</span></p>
                            <p>Дата и время подлета: <span>{new Date(approach.close_approach_date_full).toLocaleString("ru").toString()}</span></p>
                            <p>Расстояние до Земли: <span>{Math.round(+approach.miss_distance.kilometers)} км</span></p>
                            <p>Орбитальное тело: <span>{determineOrbitingBody(approach.orbiting_body)}</span></p>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default AsteroidPageList;