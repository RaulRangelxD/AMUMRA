import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'
import { Navbar } from '@/components/Nabvar'
import { Footer } from '@/components/Footer'
import { Donate } from '@/components/Donate'

const MontserratFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | AMUMRA',
    default: 'AMUMRA',
  },
  description: 'Asociación Civil de Derechos Humanos Mujeres Unidas Migrantes y Refugiadas en Argentina',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' className='bg-[#f8f9fa] w-full'>
      <body className={`${MontserratFont.className}`}>
        <div className='flex flex-col lg:flex-row min-h-screen '>
          <Donate />
          <div className='flex flex-col min-h-screen w-full bg-[#f8f9fa] text-default-dark bg-fixed'>
            <Navbar />
            <main className={`flex-1 flex`}>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
