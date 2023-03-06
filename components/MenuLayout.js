import Link from "next/link"
import styles from '../styles/Home.module.css'
import Head from "next/head"

/* menu component */

function Menu({section}) {
    return(
        <>
            <Head>
                <title>{section}</title>
                <meta name="description" content={section}/>
            </Head>
            <ul>
                <Link href="/">Home</Link>&nbsp;
                <Link href={`/${section}`}>{section.toUpperCase()}</Link>
            </ul>
        </>
    )
}

export default function MenuLayout({ children, section="contacts" }) {
    console.log('MenuLayout:', section, children.length)
    return (
        <>
        <Menu section={section}/>
        <h1>{section.toLocaleUpperCase()}</h1>
        <div className={styles.container}>
            {children}
        </div>
        </>
    )
}