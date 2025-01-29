'use client'

import { LandingImage } from '@/components/LandingImage'

export const MisionHistoria = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Mision e Historia' />
      <section className='flex flex-row items-center px-2 lg:px-12 py-8 justify-center'>
        <div className='max-w-[100%] mx-2 lg:mx-16 lg:max-w-[50%] pb-4 pe-0 lg:pb-0 lg:pe-4'>
          <h2 className='max-w-[100%] lg:max-w-2xl font-bold text-2xl text-center'>MISIÓN</h2>
          <p className='max-w-[100%] lg:max-w-4xl text-center mt-6'>
            AMUMRA busca la integración social, económica y cultural de las mujeres migrantes, refugiadas y de sus familias, así como el respeto irrestricto de su ciudadanía global. Contribuye a la
            superación de las desigualdades históricas y contextuales para la construcción de una sociedad más justa y democrática, con respeto a todas las características de sus identidades
            individuales y colectivas, desde los enfoques de género, interculturalidad y derechos humanos.
          </p>
        </div>
        <iframe
          src='https://www.youtube.com/embed/1RiyiLyUbz8?si=clbRTeIZo6zzXHXh'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          className='w-full shadow-xl aspect-video max-w-xl rounded-xl'
        ></iframe>
      </section>
      <section className='flex flex-col items-center px-2 lg:px-12 py-8 justify-center'>
        <h2 className='max-w-[100%] lg:max-w-2xl font-bold text-2xl text-center'>Historia</h2>
        <p className='max-w-[100%] lg:max-w-4xl text-center mt-6'>
          AMUMRA tiene sus inicios en el año 2001. Su hito fundacional fue la lucha emprendida por un grupo de mujeres migrantes peruanas por el derecho al acceso a la educación superior de sus hijos,
          quienes lograron el ingreso de varios jóvenes a la universidad en medio de un contexto de fuerte estigmatización y discriminación hacia la población inmigrante latinoamericana. Este hecho
          logra dar cuenta de la capacidad organizativa, participativa y de acción colectiva de las mujeres migrantes.A lo largo de más de diez (10) años, AMUMRA ha sostenido acciones de activismo e
          incidencia política para la aprobación de leyes (Ley de Migraciones de 2003; Ley de Refugiados de 2006; y Ley de Trabajadores de Casas Particulares de 2013, entre otras). Así mismo, ha
          generado acciones de visibilización y denuncia de situaciones de vulneración a los derechos humanos de las mujeres migrantes y sus familias, con acciones como los tres “Tribunales de Mujeres
          Migrantes y Refugiadas en la Argentina”; la realización de once “Mesas de Diálogo” entre sociedad civil y entidades gubernamentales en temas fundamentales para la población migrante como
          educación, salud, trabajo, voto migrante, entre otras; la creación del Observatorio de Migración y Refugio; y la participación en numerosas marchas y manifestaciones que abogan por la
          democratización y la inclusión social. Parte fundamental de nuestra historia, ha sido promover y fortalecer lazos solidarios entre las mujeres migrantes y refugiadas y organizaciones
          sociales; así como la pedagogía en derechos humanos, lo cual se expresa en nuestras propuestas de los “Centros Integrales de Atención a las Mujeres Migrantes” y la realización de numerosas
          Carpas Itinerantes.Hitos históricos en los que AMUMRA ha participado activamente: Ley de Migraciones: Ley 25.871 Aprobación de la Ley de Refugiad@: Ley 26.165 Firma y ratificación del
          Protocolo CEDAW en Argentina Firma 2005 y Ratificación 2006 dela Convención de los Derechos de l@s trabajadores migrantes y sus familias. Regularización de l@s migrantes a través del
          programa Patria Grande Aprobación de la recomendación 26 de la CEDAW mujeres migrantes Aprobación de la Ley 26844 de Trabajadoras de Casas Particulares en 2013 y su reglamentación en 2014
          Ratificación del convenio 189 de la OIT por parte de Argentina en 2014
        </p>
      </section>
    </div>
  )
}
