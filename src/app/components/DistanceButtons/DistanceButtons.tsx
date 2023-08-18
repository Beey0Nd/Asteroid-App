import { DistanceButtonsProps } from "@/types";
import classes from "./DistanceButtons.module.css"

function DistanceButtons({ distance, setDistance }: DistanceButtonsProps) {
    return (
        <span className={classes.distanceButtons}>
            <button
                className={`${distance === "kilometers" ? classes.chosen : classes.button}`}
                onClick={() => setDistance("kilometers")}
            >В километрах
            </button>
            <span>|</span>
            <button
                className={`${distance === "lunar" ? classes.chosen : classes.button}`}
                onClick={() => setDistance("lunar")}
            >В лунных орбитах</button>
        </span>
    );
}

export default DistanceButtons;