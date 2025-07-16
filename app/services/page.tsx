import Link from 'next/link'
import styles from './ServicesPage.module.css'

export default function ServicesPage() {
    return (
        <div className='container'>
            <div className={styles.header}>
                <h1>Comprehensive Drywall Solutions</h1>
                <p>
                    We provide specialized drywall services with a focus on reliability and a flawless final product.
                    Our experience covers both residential and commercial needs, from new construction to detailed
                    repairs.
                </p>
            </div>

            <div className={styles.serviceList}>
                <div className={styles.serviceItem}>
                    <h3>Drywall Installation (Hanging)</h3>
                    <p>
                        Precision is key. We expertly hang drywall for new homes, additions, and commercial spaces. Our
                        process ensures a solid, perfectly aligned foundation for the finishing stages.
                    </p>
                </div>

                <div className={styles.serviceItem}>
                    <h3>Drywall Finishing & Taping</h3>
                    <p>
                        This is where craftsmanship shines. We tape, mud, and sand to create seamless, ultra-smooth
                        surfaces ready for any paint or texture. We are proficient in all finish levels, including Level
                        5 for premium, light-critical areas.
                    </p>
                </div>

                <div className={styles.serviceItem}>
                    <h3>Drywall Repair & Patchwork</h3>
                    <p>
                        From minor cracks and holes to significant water damage, we can restore your walls to their
                        original condition. Our patching techniques blend invisibly with the existing surface.
                    </p>
                </div>
            </div>

            <section className={styles.ctaSection}>
                <h2>Have a Project in Mind?</h2>
                <p>We&apos;re ready to discuss the details and provide a clear, comprehensive estimate.</p>
                <Link href='/contact' className='button-primary'>
                    Get Your Free Quote
                </Link>
            </section>
        </div>
    )
}
