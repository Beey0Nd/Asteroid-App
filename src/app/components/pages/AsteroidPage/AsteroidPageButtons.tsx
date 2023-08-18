import Image from "next/image"
import left from "@/icons/left.png"
import right from "@/icons/right.png"
import classes from "./AsteroidPage.module.css"
import { AsteroidPageButtonsProps } from "@/types"

function AsteroidPageButtons({ page, setPage, data }: AsteroidPageButtonsProps) {

    function handleClick(direction: "left" | "right") {
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

        <>
            <button onClick={() => handleClick("left")}>
                <Image
                    className={`${classes.arrow} ${classes.left}`}
                    src={left}
                    alt="Left arrow image"
                />
            </button>
            <div>{page + 1}</div>
            <button onClick={() => handleClick("right")}>
                <Image
                    className={`${classes.arrow} ${classes.right}`}
                    src={right}
                    alt="Right arrow image"
                />
            </button>
        </>
    );
}

export default AsteroidPageButtons;