import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export function Navbar() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href='/' className={styles.logo}>
                    <Image src='/joss_logo.svg' alt='JOSS DRYWALL Logo' width={80} height={80} />
                </Link>
                <ul className={styles.navList}>
                    <li>
                        <Link href='/services'>Services</Link>
                    </li>
                    {/* <li>
                        <Link href='/gallery'>Gallery</Link>
                    </li> */}
                    <li>
                        <Link href='/contact' className={styles.contactLink}>
                            Get a Quote
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
