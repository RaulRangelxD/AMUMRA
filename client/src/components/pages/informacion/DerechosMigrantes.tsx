'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'

export const DerechosMigrantes = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Derechos Migrantes' />
      <div className='flex flex-col lg:flex-row items-center px-2 lg:px-12 py-8 justify-center'>
        <DownToUpAnimation amount={0.1} className='w-full shadow-xl aspect-video max-w-xl rounded-xl'>
          <iframe
            src='https://www.youtube.com/embed/-Ub2nqMGOhw'
            title='Derechos Humanos  de Migrantes y refugiadxs'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='w-full shadow-xl aspect-video max-w-xl rounded-xl'
          ></iframe>
        </DownToUpAnimation>
      </div>
    </div>
  )
}
