import { getAsteroids } from "@/utils"
import MainPage from "./components/pages/MainPage/MainPage"
import Head from "next/head"

export default async function Home() {
    const data = await getAsteroids()
    
    return (
        <>
            <Head>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="format-detection" content="date=no" /> 
            </Head>
            <MainPage data={data}/>
        </>
    )
}
