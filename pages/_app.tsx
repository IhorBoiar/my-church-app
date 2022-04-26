import '../styles/main.scss'
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
    return (
    <>
        <NextNProgress color="yellow" />
        <Component {...pageProps} />
    </>
    )
}