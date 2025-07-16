import fs from 'fs'
import path from 'path'
import { Gallery } from './Gallery'

export const metadata = {
    title: 'Gallery | JOSS DRYWALL',
    description: 'View our portfolio of completed drywall projects in Northeast Ohio.',
}

export default function GalleryPage() {
    const galleryDirectory = path.join(process.cwd(), 'public/images/gallery')
    let imagePaths: string[] = []

    try {
        const imageFilenames = fs.readdirSync(galleryDirectory)
        imagePaths = imageFilenames.map(file => `/images/gallery/${file}`)
    } catch (error) {
        console.error('Could not read gallery directory:', error)
    }

    return (
        <div className='container'>
            <h1>Our Work</h1>
            <p>A showcase of our commitment to quality and precision. Click any image to view it larger.</p>
            <Gallery imagePaths={imagePaths} />
        </div>
    )
}
