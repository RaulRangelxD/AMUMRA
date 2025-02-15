'use client'

import { SimpleCard } from '@/components/cards/SimpleCard'
import { Landing } from '@/components/Landing'
import { Facebook } from '@/components/Facebook'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { DownToUpAnimation, LeftToRightAnimation, RightToLeftAnimation } from '@/components/Animations'

export const Home = () => {
  const [facebookWidth, setFacebookWidth] = useState<number>(0)

  useEffect(() => {
    const handleWidth = () => {
      if (window.outerWidth <= 519) {
        setFacebookWidth(window.outerWidth - 20)
        return
      }
      setFacebookWidth(500)
    }
    handleWidth()
  }, [])

  return (
    <div className='flex flex-col w-full'>
      <Landing />
      <section>
        <DownToUpAnimation amount={0.5} className='flex flex-col items-center px-2 lg:px-12 py-8 justify-center'>
          <h1 className='max-w-[100%] lg:max-w-2xl font-bold text-2xl text-center'>Asociación Civil de Derechos Humanos Mujeres Unidas Migrantes y Refugiadas en Argentina</h1>
          <p className='max-w-[100%] lg:max-w-4xl text-center mt-6'>
            AMUMRA busca la integración social, económica y cultural de las mujeres migrantes, refugiadas y de sus familias, así como el respeto irrestricto de su ciudadanía global. Contribuye a la
            superación de las desigualdades históricas y contextuales para la construcción de una sociedad más justa y democrática, con respeto a todas las características de sus identidades
            individuales y colectivas, desde los enfoques de género, interculturalidad y derechos humanos.
          </p>
        </DownToUpAnimation>
      </section>

      <section className='flex flex-col lg:flex-row items-center px-2 lg:px-12 py-8 justify-center bg-gradient-to-r from-[#333399] to-[#ff00cc] text-default-light'>
        <LeftToRightAnimation amount={0.5} className='max-w-[100%] mx-2 lg:mx-16 lg:max-w-[50%] pb-4 pe-0 lg:pb-0 lg:pe-4'>
          <h2 className='font-bold text-xl text-center mb-10'>Sin nosotras no se mueve el mundo</h2>
          <p className='text-center mb-10'>AMUMRA tiene sus inicios en el año 2001, busca la integración social, económica y cultural de las mujeres migrantes, refugiadas y de sus familias</p>
          <div className='flex flex-row justify-center space-x-2'></div>
        </LeftToRightAnimation>
        <RightToLeftAnimation amount={0.5} className='w-full shadow-xl aspect-video max-w-xl rounded-xl'>
          <iframe
            src='https://www.youtube.com/embed/APq_JievwbY?si=3DHFnDHDOMGueLzZ'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='w-full shadow-xl aspect-video max-w-xl rounded-xl'
          ></iframe>
        </RightToLeftAnimation>
      </section>

      <article className='flex flex-col items-center px-2 lg:px-12 py-2 lg:py-8 justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:flex-row w-full'>
          <LeftToRightAnimation amount={0.5}>
            <Facebook w={facebookWidth} />
          </LeftToRightAnimation>

          <RightToLeftAnimation amount={0.5} className='grid grid-cols-2 justify-items-center gap-2 px-2 my-2 lg:my-0 w-full'>
            <Image className='w-full shadow-xl max-w-3xs rounded-xl' src='/AC2.webp' alt='Next.js logo' width={150} height={100} priority />
            <Image className='w-full shadow-xl max-w-3xs rounded-xl' src='/144.webp' alt='Next.js logo' width={150} height={100} priority />
            <Image className='w-full shadow-xl max-w-3xs rounded-xl' src='/conare.webp' alt='Next.js logo' width={150} height={100} priority />
            <Image className='w-full shadow-xl max-w-3xs rounded-xl' src='/anses.webp' alt='Next.js logo' width={150} height={100} priority />
            <Image className='w-full shadow-xl max-w-3xs rounded-xl' src='/migraciones.webp' alt='Next.js logo' width={150} height={100} priority />
            <Image className='w-full shadow-xl max-w-3xs rounded-xl' src='/fondo_mujeres_sur.webp' alt='Next.js logo' width={150} height={100} priority />
            <Image className='w-full shadow-xl max-w-3xs rounded-xl' src='/ministerio_mujeres.webp' alt='Next.js logo' width={150} height={100} priority />
            <Image className='w-full shadow-xl max-w-3xs rounded-xl' src='/fondo_global_mujeres.webp' alt='Next.js logo' width={150} height={100} priority />
          </RightToLeftAnimation>
        </div>
      </article>

      <section className='flex flex-col lg:flex-row items-center px-2 lg:px-12 py-8 justify-center bg-gradient-to-r from-[#333399] to-[#ff00cc] text-default-light'>
        <LeftToRightAnimation amount={0.5} className='max-w-[100%] mx-2 lg:mx-16 lg:max-w-[50%] pb-4 pe-0 lg:pb-0 lg:pe-4'>
          <h2 className='font-bold text-xl text-center mb-10'>Feria Migrante</h2>
          <p className='text-center mb-10'>
            Fomenta y acompaña el empoderamiento de las mujeres refugiadas y migrantes, quienes con sus habilidades y creatividad llevan adelante proyectos económicamente viables y sustentables
          </p>
          <div className='flex flex-row justify-center space-x-2'></div>
        </LeftToRightAnimation>
        <RightToLeftAnimation amount={0.5} className='w-full'>
          <Image className='w-full shadow-xl max-w-xl rounded-xl' src='/feria_migrante_small.webp' alt='Next.js logo' width={510} height={510} priority />
        </RightToLeftAnimation>
      </section>
      <article>
        <div className='flex flex-col items-center px-2 lg:px-12 py-2 lg:py-8 justify-center'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-5xl'>
            <DownToUpAnimation amount={0.1}>
              <SimpleCard
                className='bg-[url(/persons.webp)] bg-cover bg-center m-4 lg:m-4 lg:mt-8'
                title='Derecho Migrantes'
                description='Información detallada y preguntas frecuentes para todas las migrantes refugiadxs!'
              />
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.1}>
              <SimpleCard
                className='bg-[url(/teach.webp)] bg-cover bg-center m-4 lg:m-4 lg:mb-8'
                title='Capacitaciones'
                description='Para mujeres migrantes y refugiadas! Desde AMUMRA, brindamos este espacio para cursos y talleres.'
              />
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.1}>
              <SimpleCard className='bg-[url(/law.webp)] bg-cover bg-center m-4 lg:m-4 lg:mt-8' title='Tribunales' description='Informacion sobre los objetivos y intereses de AMUMRA.' />
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.1}>
              <SimpleCard className='bg-[url(/work.webp)] bg-cover bg-center m-4 lg:m-4 lg:mt-8' title='Bolsa de Trabajo' description='Completa un simple formulario para que podamos recomendarte.' />
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.1}>
              <SimpleCard className='bg-[url(/union.webp)] bg-cover bg-center m-4 lg:m-4 lg:mb-8' title='Voluntariado' description='¿Te gustaria formar parte del equipo de voluntarixs de amumra?.' />
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.1}>
              <SimpleCard
                className='bg-[url(/news.webp)] bg-cover bg-center m-4 lg:m-4 lg:mt-8'
                title='Noticias'
                description='Ultimas noticias de argentina con respecto a nuestros derechos que podrian interesarte.'
              />
            </DownToUpAnimation>
          </div>
        </div>
      </article>
    </div>
  )
}
