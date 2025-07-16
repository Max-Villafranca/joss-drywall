import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import styles from './HomePage.module.css'
import HomepageGallery from '../components/HomepageGallery'

export default function HomePage() {
    const galleryDirectory = path.join(process.cwd(), 'public/images/gallery')
    let allImagePaths: string[] = []
    try {
        const imageFilenames = fs.readdirSync(galleryDirectory)
        allImagePaths = imageFilenames.map(file => `/images/gallery/${file}`)
    } catch (error) {
        console.error('Could not read gallery directory:', error)
    }
    const previewImagePaths = allImagePaths.slice(0, 6)

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <Image
                    src='/images/hero.jpg'
                    alt='Technically challenging drywall work on a dome ceiling'
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    priority
                />
                <div className={styles.heroContent}>
                    <h1>Quality Drywall. Professional Service.</h1>
                    <p>Installation, finishing, and repair for projects across Northeast Ohio.</p>
                    <Link href='/contact' className='button-primary'>
                        Request a Free Estimate
                    </Link>
                </div>
            </section>

            <section className='container'>
                <div className={styles.intro}>
                    <h2>Your Trusted Partner for Flawless Walls</h2>
                    <p>
                        At JOSS DRYWALL, we combine years of experience with meticulous attention to detail. Whether
                        it's a new construction project, a residential remodel, or a simple repair, we deliver results
                        that are built to last.
                    </p>
                </div>
            </section>

            <section className={styles.servicesSection}>
                <div className='container'>
                    <h2 className={styles.sectionTitle}>Our Core Services</h2>
                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <h3>Drywall Installation</h3>
                            <p>
                                Precise and efficient hanging for new builds and renovations, ensuring a perfect
                                foundation.
                            </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Finishing & Taping</h3>
                            <p>
                                From Level 1 to a flawless Level 5 finish, we provide smooth, seamless surfaces ready
                                for paint.
                            </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Repair & Patchwork</h3>
                            <p>Expertly fixing cracks, holes, and water damage to make your walls look new again.</p>
                        </div>
                    </div>
                    <div className={styles.servicesLink}>
                        <Link href='/services'>Learn More About Our Services</Link>
                    </div>
                </div>
            </section>

            <section className={`${styles.gallerySection} container`}>
                <h2 className={styles.sectionTitle}>Featured Work</h2>
                <HomepageGallery previewImages={previewImagePaths} allImages={allImagePaths} />
            </section>

            <section className={`${styles.finalCta} container`}>
                <h2>Ready to Start Your Project?</h2>
                <p>Let's discuss your needs. We provide clear communication and transparent pricing.</p>
                <Link href='/contact' className='button-primary'>
                    Get Your Free Quote
                </Link>
            </section>
        </>
    )
}

