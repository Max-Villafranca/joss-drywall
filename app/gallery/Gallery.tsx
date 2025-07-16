'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './GalleryPage.module.css'

type GalleryProps = {
    imagePaths: string[]
}

export function Gallery({ imagePaths }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const handleNext = () => {
        if (selectedIndex === null) return
        const nextIndex = (selectedIndex + 1) % imagePaths.length
        setSelectedIndex(nextIndex)
    }

    const handlePrev = () => {
        if (selectedIndex === null) return
        const prevIndex = (selectedIndex - 1 + imagePaths.length) % imagePaths.length
        setSelectedIndex(prevIndex)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return
            if (e.key === 'ArrowRight') handleNext()
            if (e.key === 'ArrowLeft') handlePrev()
            if (e.key === 'Escape') setSelectedIndex(null)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedIndex, handleNext, handlePrev])

    if (!imagePaths || imagePaths.length === 0) {
        return <p>There are currently no images in the gallery. Check back soon!</p>
    }

    const selectedImage = selectedIndex !== null ? imagePaths[selectedIndex] : null

    return (
        <>
            <div className={styles.galleryGrid}>
                {imagePaths.map((path, index) => (
                    <div key={path} className={styles.galleryItem} onClick={() => setSelectedIndex(index)}>
                        <Image
                            src={path}
                            alt={`Joss Drywall Gallery Image ${index + 1}`}
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className={styles.modalOverlay} onClick={() => setSelectedIndex(null)}>
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
                    <button className={styles.closeButton} onClick={() => setSelectedIndex(null)}>
                        ×
                    </button>
                </div>
            )}
        </>
    )
}
