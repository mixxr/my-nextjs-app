import Link from "next/link"
import styles from '../styles/Home.module.css'

/* menu component */

export default function Layout({ children }) {
    console.log('Layout:', children)
    return (<>
        <Link href={`/contacts/${children}`}>
            <div className={styles.card}>
                {children}
            </div>
        </Link>
        </>
    )
}