import { BasketProps } from "@/types";
import classes from "./Basket.module.css"

function Basket({ ordered }: BasketProps) {
    function getAsteroidEnding(number: number) {
        if (number % 10 === 1 && number % 100 !== 11) {
            return "";
        } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
            return "а";
        } else {
            return "ов";
        }
    }

    return (
        <div className={classes.basket}>
            <div>
                <h3>Корзина</h3>
                <p>{ordered.length} астероид{getAsteroidEnding(ordered.length)}</p>
            </div>
            <button>Отправить</button>
        </div>
    );
}

export default Basket;