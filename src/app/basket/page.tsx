import { v4 } from "uuid";
import { BasketListItem } from "./BasketListItem";
import classes from "./page.module.css"
import { BasketPageProps } from "@/types";

function BasketPage({
    searchParams
}: BasketPageProps) {

    function renderItems() {
        if (Array.isArray(searchParams.orderedItems)) {
            const orderedItems = searchParams.orderedItems as string[];

            return (
                orderedItems.map((item: string) => (
                    <BasketListItem key={v4()}
                        asteroidId={item} />
                ))
            )
        }

        return (
            <BasketListItem
                key={v4()}
                asteroidId={searchParams.orderedItems as string}
            />
        )
    }

    return (
        <section className={classes.basketPage}>
            <h3>Заказ отправлен!</h3>
            <ul>
                {renderItems()}
            </ul>
        </section>
    );
}

export default BasketPage;