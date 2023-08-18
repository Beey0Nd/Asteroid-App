import classes from "./page.module.css"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <footer className={classes.footer}>© Все права и планета защищены</footer>
        </>
    )
}
