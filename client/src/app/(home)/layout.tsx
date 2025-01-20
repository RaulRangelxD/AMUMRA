import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'
import { Navbar } from '@/components/Nabvar'
import { Footer } from '@/components/Footer'

const MontserratFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AMUMRA',
  description: 'AMUMRA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' className='bg-[#f8f9fa]'>
      <body className={`${MontserratFont}`}>
        <div className='flex flex-col min-h-screen bg-[#f8f9fa] text-[#212529] bg-fixed'>
          <Navbar />
          <main className={`flex-1 flex`}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
