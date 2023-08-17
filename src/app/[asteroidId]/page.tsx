import { ApproachData, AsteroidId } from "@/types";
import { getAsteroid } from "@/utils";
import AsteroidPage from "../components/pages/AsteroidPage/AsteroidPage";

export default async function Asteroid({
    params
}: {
    params: {
        asteroidId: AsteroidId
    }
}) {

    const data: ApproachData = await getAsteroid(params.asteroidId)
    console.log(data);
    return (
        <AsteroidPage data={data} />
    );
}