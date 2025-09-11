import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDF Tools Online - Merge, Split, Compress & Convert PDF Files',
  description: 'Free online PDF tools to merge, split, compress, convert, and edit PDF files. Easy to use, fast, and secure PDF processing in your browser.',
  keywords: 'PDF tools, merge PDF, split PDF, compress PDF, convert PDF, PDF editor, online PDF',
  openGraph: {
    title: 'PDF Tools Online - Free PDF Processing',
    description: 'Professional PDF tools for all your document needs. Merge, split, compress, and convert PDF files online.',
    type: 'website',
    url: 'https://pdf-tools.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF Tools Online - Free PDF Processing',
    description: 'Professional PDF tools for all your document needs.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}