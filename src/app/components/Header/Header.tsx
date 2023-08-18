"use client"

import { useRouter } from 'next/navigation'
import classes from "./Header.module.css"

function Header() {
    const router = useRouter();

    function handleClick() {
        router.push("/")
    }

    return (
        <header
            onClick={handleClick}
            className={classes.header}
        >
            <h1>ARMAGEDDON 2023</h1>
            <p>ООО "Команда им. Б. Уиллиса".</p>
            <p>Взрываем астероиды с 1998 года.</p>
        </header>
    );
}

export default Header;