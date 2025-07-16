'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './HomepageGallery.module.css'

type GalleryProps = {
    previewImages: string[]
    allImages: string[]
}

export default function HomepageGallery({ previewImages, allImages }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const openLightbox = (index: number) => setSelectedIndex(index)
    const closeLightbox = () => setSelectedIndex(null)

    const handleNext = () => {
        if (selectedIndex === null) return
        setSelectedIndex((selectedIndex + 1) % allImages.length)
    }

    const handlePrev = () => {
        if (selectedIndex === null) return
        setSelectedIndex((selectedIndex - 1 + allImages.length) % allImages.length)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return
            if (e.key === 'ArrowRight') handleNext()
            if (e.key === 'ArrowLeft') handlePrev()
            if (e.key === 'Escape') closeLightbox()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedIndex])

    const selectedImage = selectedIndex !== null ? allImages[selectedIndex] : null

    return (
        <>
            <div className={styles.galleryGrid}>
                {previewImages.map(path => (
                    <div
                        key={path}
                        className={styles.galleryItem}
                        onClick={() => openLightbox(allImages.indexOf(path))}
                    >
                        <Image
                            src={path}
                            alt='A featured drywall project by JOSS DRYWALL'
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>

            <div className={styles.viewMoreContainer}>
                <button className='button-primary' onClick={() => openLightbox(0)}>
                    View Full Portfolio
                </button>
            </div>

            {selectedImage && (
                <div className={styles.modalOverlay} onClick={closeLightbox}>
                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={e => {
                            e.stopPropagation()
                            handlePrev()
                        }}
                    >
                        ❮
                    </button>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <Image src={selectedImage} alt='Enlarged gallery view' fill style={{ objectFit: 'contain' }} />
                    </div>
                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={e => {
                            e.stopPropagation()
                            handleNext()
                        }}
                    >
                        ❯
                    </button>
                    <button className={styles.closeButton} onClick={closeLightbox}>
                        ×
                    </button>
                </div>
            )}
        </>
    )
}
