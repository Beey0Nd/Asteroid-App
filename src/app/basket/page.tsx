import { v4 } from "uuid";
import { BasketListItem } from "./BasketListItem";
import classes from "./page.module.css"

function BasketPage({ searchParams }: any) {
    return (
        <section className={classes.basketPage}>
            <h3>Заказ отправлен!</h3>
            <ul>
                {searchParams.orderedItems.map((item: string) => (
                    <BasketListItem key={v4()}
                    asteroidId={item} />
                ))}
            </ul>
        </section>
    );
}

export default BasketPage;