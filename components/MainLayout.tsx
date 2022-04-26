import Head from "next/head"
import Link from "next/link"

export default function MainLayout({children, title='My Church App'}) {
    return(
        <>
            <Head>
                <title>{title} | My Church App</title>
                <meta name='keywords' content='church, ministry, youth'/>
                <meta name='description' content='app for people of church'/>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
                <Link href={'/about'}><a>About</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
              nav {
              position: fixed;
              top: 0;
              left: 0;
              background: #0070f3;
              width: 100%;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              }
              nav a {
              text-decoration: none;
              color: white;
              font-size: 24px;
              font-weight: 600;
              }
              main {
              padding-top: 60px;
              }
            `
            }</style>
        </>
    )


}