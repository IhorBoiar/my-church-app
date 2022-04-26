import MainLayout from "../components/MainLayout";
import Router from "next/router"
import classes from "../styles/error.module.scss";

export default function ErrorPage() {
    return(
        <MainLayout title={'404'}>
            <h1 className={classes.error}>Error 404</h1>
            <button className={classes.button} onClick={() => Router.push('/')}>Go home page</button>
        </MainLayout>
    )
}