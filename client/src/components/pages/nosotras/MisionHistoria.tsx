'use client'

import { LandingImage } from '@/components/LandingImage'
import { EmblaSlider } from '@/components/Carousel'
import Image from 'next/image'
import { DownToUpAnimation, LeftToRightAnimation, RightToLeftAnimation } from '@/components/Animations'

export const MisionHistoria = () => {
  const images = [
    { src: '/placeholder.webp', alt: 'Image 1' },
    { src: '/placeholder.webp', alt: 'Image 2' },
    { src: '/placeholder.webp', alt: 'Image 3' },
    { src: '/placeholder.webp', alt: 'Image 4' },
    { src: '/placeholder.webp', alt: 'Image 5' },
  ]
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Mision e Historia' />
      <section className='flex flex-col lg:flex-row items-center px-2 lg:px-12 py-8 justify-center'>
        <LeftToRightAnimation amount={0.5} className='max-w-[100%] mx-2 lg:mx-16 lg:max-w-[50%] pb-4 pe-0 lg:pb-0 lg:pe-4'>
          <h2 className='max-w-[100%] lg:max-w-2xl font-bold text-2xl text-center'>MISIÓN</h2>
          <p className='max-w-[100%] lg:max-w-4xl text-center mt-6'>
            AMUMRA busca la integración social, económica y cultural de las mujeres migrantes, refugiadas y de sus familias, así como el respeto irrestricto de su ciudadanía global. Contribuye a la
            superación de las desigualdades históricas y contextuales para la construcción de una sociedad más justa y democrática, con respeto a todas las características de sus identidades
            individuales y colectivas, desde los enfoques de género, interculturalidad y derechos humanos.
          </p>
        </LeftToRightAnimation>
        <RightToLeftAnimation amount={0.5} className='w-full aspect-video max-w-xl rounded-xl'>
          <iframe
            src='https://www.youtube.com/embed/1RiyiLyUbz8?si=clbRTeIZo6zzXHXh'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='w-full shadow-lg aspect-video max-w-xl rounded-xl'
          ></iframe>
        </RightToLeftAnimation>
      </section>
      <section className='bg-gradient-to-r from-[#333399] to-[#ff00cc] text-default-light'>
        <DownToUpAnimation amount={0.5} className='flex flex-col items-center px-2 lg:px-12 py-8 justify-center '>
          <h2 className='max-w-[100%] lg:max-w-2xl font-bold text-2xl text-center'>Historia</h2>
          <p className='max-w-[100%] lg:max-w-4xl mt-6'>
            AMUMRA nació en 2001 impulsada por la lucha de mujeres migrantes peruanas por el acceso a la educación superior de sus hijos, en un contexto de discriminación. Desde entonces, ha trabajado
            en activismo e incidencia política, contribuyendo a la aprobación de leyes clave como la Ley de Migraciones (2003), la Ley de Refugiados (2006) y la Ley de Trabajadores de Casas
            Particulares (2013). Ha realizado acciones de visibilización y denuncia de violaciones de derechos humanos, organizando tribunales de mujeres migrantes, mesas de diálogo con entidades
            gubernamentales y promoviendo la inclusión social. Además, ha fortalecido redes solidarias y desarrollado iniciativas como los Centros Integrales de Atención y las Carpas Itinerantes para
            la educación en derechos humanos.
          </p>
        </DownToUpAnimation>
      </section>
      <article>
        <DownToUpAnimation amount={0.5} className='flex justify-center my-4'>
          <EmblaSlider autoplayDelay={3000}>
            {images.map((image, index) => (
              <div key={index} className='flex-[0_0_100%] mx-2'>
                <Image className='w-full h-auto rounded-xl' src={image.src} alt={image.alt} width={0} height={0} sizes='100%' />
              </div>
            ))}
          </EmblaSlider>
        </DownToUpAnimation>
      </article>

      <section className='bg-gradient-to-r from-[#333399] to-[#ff00cc] text-default-light'>
        <DownToUpAnimation amount={0.5} className='flex flex-col items-center px-2 lg:px-12 py-8 justify-center'>
          <h2 className='max-w-[100%] lg:max-w-2xl font-bold text-2xl text-center'>Hitos históricos en los que AMUMRA ha participado activamente:</h2>
          <ul className='max-w-[100%] lg:max-w-2xl list-disc mx-1 mt-4'>
            <li>Ley de Migraciones: Ley 25.871</li>
            <li>Aprobación de la Ley de Refugiados: Ley 26.165</li>
            <li>Firma y ratificación del Protocolo CEDAW en Argentina</li>
            <li>Firma en 2005 y ratificación en 2006 de la Convención de los Derechos de los trabajadores migrantes y sus familias</li>
            <li>Regularización de los migrantes a través del programa Patria Grande</li>
            <li>Aprobación de la recomendación 26 de la CEDAW sobre mujeres migrantes</li>
            <li>Aprobación de la Ley 26.844 de Trabajadoras de Casas Particulares en 2013 y su reglamentación en 2014</li>
            <li>Ratificación del Convenio 189 de la OIT por parte de Argentina en 2014</li>
          </ul>
        </DownToUpAnimation>
      </section>
    </div>
  )
}
