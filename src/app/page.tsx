import { getAsteroids } from "@/utils"
import MainPage from "./components/pages/MainPage/MainPage"

export default async function Home() {
    const data = await getAsteroids()
    
    return (
        <MainPage data={data}/>
    )
}
