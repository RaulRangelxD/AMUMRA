'use client'

import { DownToUpAnimation, LeftToRightAnimation, RightToLeftAnimation } from '@/components/Animations'
import { LinkButton } from '@/components/buttons/LinkButton'
import { LandingImage } from '@/components/LandingImage'
import Image from 'next/image'

export const FeriaMigrante = () => {
  const buttonsItems = [
    { title: 'Gastronomía y Pastelería', href: '/informacion/ingresoyegresodelpais' },
    { title: 'Servicios', href: '/informacion/residenciasdeargentina' },
    { title: 'Moda', href: '/informacion/dniextranjeros' },
    { title: 'Cuidado Personal', href: '/informacion/derechosmigrantes' },
    { title: 'Librería y Manualidades', href: '/informacion/derechosmigrantes' },
  ]
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Feria Migrante' />
      <div className='flex flex-col lg:flex-row items-start px-2 lg:px-12 py-8 justify-center gap-4'>
        <LeftToRightAnimation amount={0.2} className='flex w-full justify-center mb-8 lg:mb-0'>
          <Image className='w-full h-auto shadow-xl max-w-xl rounded-xl' src='/feria_migrante_large.webp' alt='Next.js logo' width={0} height={0} sizes='100%' priority />
        </LeftToRightAnimation>
        <div className='flex flex-col w-full space-y-8 justify-center'>
          <RightToLeftAnimation amount={0.5} className='flex flex-col items-center justify-center'>
            <h2 className='font-bold text-2xl'>Feria Migrante Virtual</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Contamos con el apoyo de Fondo de Mujeres del Sur</p>
          </RightToLeftAnimation>
          <RightToLeftAnimation amount={0.5} className='flex justify-center'>
            <div className='w-full shadow-xl aspect-video max-w-xl rounded-xl'>
              <iframe
                src='https://www.youtube.com/embed/0YSaYenyoAw'
                title='Feria Migrante'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                className='w-full shadow-xl aspect-video max-w-xl rounded-xl'
              ></iframe>
            </div>
          </RightToLeftAnimation>
          <div className='w-full flex flex-row gap-4 justify-center'>
            <DownToUpAnimation amount={0.5}>
              <Image className='w-full h-auto max-w-xl rounded-xl' src='/logo_amumra_large_black.webp' alt='Next.js logo' width={210} height={0} priority />
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.5}>
              <Image className='w-full h-auto shadow-xl max-w-xl rounded-xl' src='/fondo_mujeres_sur.webp' alt='Next.js logo' width={215} height={0} priority />
            </DownToUpAnimation>
          </div>
        </div>
      </div>
      <DownToUpAnimation amount={0.5} className='mb-4'>
        <div className='grid grid-rows-2 lg:grid-cols-5 mx-0 lg:mx-8 mt-4 gap-3 justify-center'>
          {buttonsItems.map((item) => (
            <LeftToRightAnimation amount={0.2} key={item.title}>
              <LinkButton color='btn-primary-first' className='text-default-dark' href={item.href}>
                {item.title}
              </LinkButton>
            </LeftToRightAnimation>
          ))}
        </div>
      </DownToUpAnimation>
    </div>
  )
}
