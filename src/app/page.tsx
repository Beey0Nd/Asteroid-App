import AsteroidData from "./components/AsteroidData/AsteroidData"
import { _api } from "@/utils"
import classes from "./page.module.css"

async function getAsteroidsData() {
    const data = await fetch(_api)
    return data.json()
}

export default async function Home() {
    const data = await getAsteroidsData();
    console.log(data);
    return (
        <section className={classes.section}>
            <h2>Ближайшие подлеты астероидов</h2>
            <AsteroidData data={data}/>
        </section>
    )
}
