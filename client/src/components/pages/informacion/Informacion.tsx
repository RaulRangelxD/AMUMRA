'use client'

import { LeftToRightAnimation, RightToLeftAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'
import Image from 'next/image'
import { LinkButton } from '@/components/buttons/LinkButton'

export const Informacion = () => {
  const buttonsItems = [
    { title: 'Ingreso y Egreso del País', href: '/informacion/ingresoyegresodelpais' },
    { title: 'Residencias en Argentina', href: '/informacion/residenciasdeargentina' },
    { title: 'DNI Extranjeros', href: '/informacion/dniextranjeros' },
    { title: 'Derechos Migrantes', href: '/informacion/derechosmigrantes' },
  ]
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Información' />
      <section className=''>
        <div className='flex flex-col-reverse lg:flex-row items-center px-2 lg:px-12 py-2 lg:py-8 justify-center space-x-0 lg:space-x-4'>
          <div className='mt-4 space-y-3'>
            {buttonsItems.map((item) => (
              <LeftToRightAnimation amount={0.2} key={item.title}>
                <LinkButton color='btn-primary-first' className='text-default-dark' href={item.href}>
                  {item.title}
                </LinkButton>
              </LeftToRightAnimation>
            ))}
          </div>
          <div className='flex justify-center mt-4 rounded-xl'>
            <RightToLeftAnimation amount={0.2}>
              <Image src={'/informacion.webp'} alt='image' width={0} height={0} sizes='100vw' priority className='w-full lg:w-xs h-auto rounded-xl' />
            </RightToLeftAnimation>
          </div>
        </div>
        <LeftToRightAnimation amount={0.2} className='flex flex-col justify-center items-center space-y-2 my-4 px-2 lg:px-12'>
          <p className='text-center'>Si desea realizar una consulta sobre tramites migratorios pulsa</p>
          <LinkButton color='btn-primary-first' className='text-default-dark' href='https://docs.google.com/forms/d/e/1FAIpQLScvJS5MPHlghlBbcVfRWRvNTZ40HXWJlI6SIPSRQjn8gfhbXg/viewform'>
            Aqui
          </LinkButton>
        </LeftToRightAnimation>
      </section>
    </div>
  )
}
