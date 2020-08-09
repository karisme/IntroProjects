import styles from "./layout.module.css"
import Head from "next/head"
import Link from "next/link"
import utilStyles from "../styles/utils.module.css"

export const siteTitle = "Starter Project Website"

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                    <img
                    src="/images/Senegal.png"
                    height="400"
                    weidth="400"
                    className={'${styles.headerHomeImage} ${utilStyles.borderCircle}'}
                    alt={"Picture of Senegal"} />
                    <h1 className={utilStyles.heading2Xl}>Senegal</h1>
                    </>
                ) : (
                    <>
                    <Link href="/">
                        <a>
                            <img
                            height="400"
                            weidth="400"
                            src="/images/Senegal.png"
                            className={'${styles.headerHomeImage} ${utilStyles.borderCircle}'}
                            alt={"Picture of Senegal"} />
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>Senegal</a>
                        </Link>
                    </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a> ← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Layout