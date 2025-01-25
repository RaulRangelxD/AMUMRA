'use client'

import { LinkButton } from '@/components/buttons/LinkButton'
import { SimpleCard } from '@/components/cards/SimpleCard'
import { Landing } from '@/components/Landing'
import { EyeIcon } from '@/components/icons/EyeIcon'
import { Facebook } from '@/components/facebook/Facebook'

export const Home = () => {
  return (
    <div className='flex flex-col'>
      <Landing />
      {window.innerWidth <= 499 ? <Facebook w={window.innerWidth} /> : <Facebook w={500} />}

      <section className='lg:min-h-screen flex flex-col items-center mx-2 lg:px-12 py-8'>
        <h1 className='max-w-[100%] lg:max-w-[60%] font-bold text-2xl text-center'>Asociación Civil de Derechos Humanos Mujeres Unidas Migrantes y Refugiadas en Argentina</h1>
        <p className='max-w-[100%] lg:max-w-[80%] text-center mt-6'>
          AMUMRA busca la integración social, económica y cultural de las mujeres migrantes, refugiadas y de sus familias, así como el respeto irrestricto de su ciudadanía global. Contribuye a la
          superación de las desigualdades históricas y contextuales para la construcción de una sociedad más justa y democrática, con respeto a todas las características de sus identidades
          individuales y colectivas, desde los enfoques de género, interculturalidad y derechos humanos.
        </p>
        <SimpleCard icon={<EyeIcon />} title='perro' description='ksadgsakhfgksa' />
      </section>

      <section className='lg:min-h-screen flex flex-col lg:flex-row items-center px-2 lg:px-12 bg-gradient-to-r from-[#333399] to-[#ff00cc] text-default-light py-8'>
        <div className='max-w-[100%] mx-2 lg:mx-16 lg:max-w-[50%] pb-4 pe-0 lg:pb-0 lg:pe-4'>
          <h2 className='font-bold text-xl text-center mb-10'>Sin nosotras no se mueve el mundo</h2>
          <p className='text-center mb-10'>AMUMRA tiene sus inicios en el año 2001, busca la integración social, económica y cultural de las mujeres migrantes, refugiadas y de sus familias</p>
          <div className='flex flex-row justify-center space-x-2'>
            <LinkButton href='#' size='md' color='btn-primary-first'>
              Derecho Migrantes
            </LinkButton>
            <LinkButton href='#' size='md' color='btn-primary-second'>
              Derecho Refugiadxs
            </LinkButton>
            <LinkButton href='#' size='md' color='btn-primary-first'>
              Migrantes Refugiadxs
            </LinkButton>
          </div>
        </div>
        <iframe
          src='https://www.youtube.com/embed/APq_JievwbY?si=3DHFnDHDOMGueLzZ'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          className='w-full shadow-xl aspect-video'
        ></iframe>
      </section>
      <section className='lg:min-h-screen flex flex-col items-center mx-2 lg:px-12 py-8'>
        <h1 className='max-w-[100%] lg:max-w-[60%] font-bold text-2xl text-center'>Asociación Civil de Derechos Humanos Mujeres Unidas Migrantes y Refugiadas en Argentina</h1>
        <p className='max-w-[100%] lg:max-w-[80%] text-center mt-6'>
          AMUMRA busca la integración social, económica y cultural de las mujeres migrantes, refugiadas y de sus familias, así como el respeto irrestricto de su ciudadanía global. Contribuye a la
          superación de las desigualdades históricas y contextuales para la construcción de una sociedad más justa y democrática, con respeto a todas las características de sus identidades
          individuales y colectivas, desde los enfoques de género, interculturalidad y derechos humanos.
        </p>
      </section>
      <section className='lg:min-h-screen flex flex-col-reverse lg:flex-row items-center px-2 lg:px-12 bg-gradient-to-r from-[#333399] to-[#ff00cc] text-default-light py-8'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/APq_JievwbY?si=3DHFnDHDOMGueLzZ'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          className='w-full shadow-xl aspect-video'
        ></iframe>
        <div className='max-w-[100%] mx-2 lg:mx-16 lg:max-w-[50%] pb-4 ps-0 lg:pb-0 lg:ps-4'>
          <h2 className='font-bold text-xl text-center mb-10'>Sin nosotras no se mueve el mundo</h2>
          <p className='text-center mb-10'>AMUMRA tiene sus inicios en el año 2001, busca la integración social, económica y cultural de las mujeres migrantes, refugiadas y de sus familias</p>
          <div className='flex flex-row justify-center space-x-2'>
            <LinkButton href='#' size='md' color='btn-secondary-first'>
              Feria Migrante
            </LinkButton>
            <LinkButton href='#' size='md' color='btn-secondary-second'>
              Carpas Intinerantes
            </LinkButton>
            <LinkButton href='#' size='md' color='btn-secondary-first'>
              Voluntariado
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  )
}
