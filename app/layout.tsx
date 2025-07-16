import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
    title: 'JOSS DRYWALL',
    description:
        'Expert drywall installation and finishing for commercial and residential projects in the greater Cleveland area.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={`${inter.variable} ${lora.variable}`}>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

