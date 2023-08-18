import { BasketListItem } from "./BasketListItem";
import classes from "./page.module.css"

function BasketPage({ searchParams }: any) {
    return (
        <section className={classes.basketPage}>
            <h3>Заказ отправлен!</h3>
            <ul>
                {searchParams.orderedItems.map((item: string) => (
                    <BasketListItem asteroidId={item} />
                ))}
            </ul>
        </section>
    );
}

export default BasketPage;