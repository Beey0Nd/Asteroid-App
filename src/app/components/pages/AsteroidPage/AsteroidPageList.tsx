import { Approach } from "@/types";

function AsteroidPageList({
    approaches, page
}: {
    approaches: Approach[], page: number
}) {

    return (
        <ul>
            {
                approaches.slice(page * 10, page * 10 + 10).map((approach: Approach) => (
                    <li key={approach.close_approach_date_full}>
                        <p>{Math.round(+approach.relative_velocity.kilometers_per_hour)}</p>
                        <p>{approach.close_approach_date_full}</p>
                        <p>{Math.round(+approach.miss_distance.kilometers)}</p>
                    </li>
                ))
            }
        </ul>
    );
}

export default AsteroidPageList;