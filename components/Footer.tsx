import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerColumn}>
                    <Link href='/' className={styles.logo}>
                        <Image src='/joss_logo.svg' alt='JOSS DRYWALL Logo' width={40} height={40} />
                        <h4>JOSS DRYWALL</h4>
                    </Link>
                    <p className={styles.tagline}>Reliable & Experienced Drywall Professionals.</p>
                </div>

                <div className={styles.footerColumn}>
                    <h5>Quick Links</h5>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/services'>Services</Link>
                        </li>
                        <li>
                            <Link href='/gallery'>Gallery</Link>
                        </li>
                        <li>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h5>Contact & Service Area</h5>
                    <p>
                        <a href='tel:216-376-4868'>(216) 376-4868</a>
                        <br />
                        <a href='mailto:jossdriwall@gmail.com'>jossdriwall@gmail.com</a>
                    </p>
                    <p>Proudly serving communities across Northeast Ohio.</p>
                </div>
            </div>
            <div className={styles.subFooter}>
                <p>© {new Date().getFullYear()} JOSS DRYWALL. All Rights Reserved.</p>
                <a
                    href='https://www.facebook.com/profile.php?id=61553556332012'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Find us on Facebook
                </a>
            </div>
        </footer>
    )
}
