'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'
import Image from 'next/image'

export const Programas = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Programas' />
      <section className='bg-gradient-to-r from-[#333399] to-[#ff00cc] text-default-light'>
        <DownToUpAnimation amount={0.5} className='flex flex-col items-center px-2 lg:px-12 py-8 justify-center'>
          <h2 className='max-w-[100%] lg:max-w-2xl font-bold text-2xl text-center'>PROGRAMAS En consonancia con nuestra misión, las acciones de AMUMRA tienen como propósito:</h2>
          <ul className='max-w-[100%] lg:max-w-2xl list-disc mx-1 mt-4'>
            <li>Difundir y promover los derechos, la integración, y el aporte socioeconómico y cultural de las mujeres migrantes y refugiadas y sus comunidades.</li>
            <li>Proponer y fortalecer redes autogestivas y propiciar acciones colectivas de acompañamiento para la atención de necesidades de las mujeres migrantes y refugiadas y sus familias.</li>
            <li>
              Incidir en procesos de planificación, modificación, implementación y evaluación de políticas públicas en temas relevantes para las comunidades migrantes en Argentina y América Latina.
            </li>
            <li>Generar alianzas y trabajo articulado con organizaciones gubernamentales y de la sociedad civil que trabajen con y para las comunidades migrantes.</li>
            <li>Promover la construcción de conocimiento en torno a las comunidades migrantes.</li>
          </ul>
        </DownToUpAnimation>
      </section>
      <article>
        <DownToUpAnimation amount={0.5} className='flex justify-center my-4'>
          <Image src={'/placeholder.webp'} alt='image' width={0} height={0} sizes='100vw' priority className='w-full lg:w-2xl h-auto' />
        </DownToUpAnimation>
      </article>
      <section className='bg-gradient-to-r from-[#333399] to-[#ff00cc] text-default-light'>
        <DownToUpAnimation amount={0.5} className='flex flex-col items-center px-2 lg:px-12 py-8 justify-center'>
          <h2 className='max-w-[100%] lg:max-w-2xl font-bold text-2xl text-center'>¿Cómo lo hacemos?</h2>
          <ul className='max-w-[100%] lg:max-w-2xl list-disc mx-1 mt-4'>
            <li>
              <strong>Fortalecimiento Comunitario:</strong> AMUMRA busca fortalecer las capacidades socio-organizativas de las comunidades migrantes, teniendo en cuenta tanto sus necesidades como sus
              potencialidades y capacidades como sujetos de cambio. Brinda espacios móviles (Carpas Itinerantes) y permanentes (CIAM) de acceso a la información sobre derechos, servicios y
              herramientas organizativas y/o productivas para mujeres migrantes y refugiadas en sus comunidades, así como puntos de encuentro y apoyo mutuo.
            </li>
            <li>
              <strong>Incidencia Política:</strong> Por medio del Observatorio de Migración y Refugio, AMUMRA emplea la recolección y difusión de información, la vigilancia sobre el contexto de las
              comunidades migrantes, la generación del diálogo social y la movilización colectiva como mecanismos de incidencia. Promueve la articulación entre organizaciones de migrantes, organismos
              gubernamentales y de cooperación. Participa de redes nacionales y regionales (REDLAC, GAATW, MIREDES Internacional) y grupos de trabajo para la defensa de los derechos de las poblaciones
              migrantes.
            </li>
            <li>
              <strong>Acompañamiento:</strong> Se otorga asesoría y acompañamiento a las personas con dificultades para tramitar, comprender y regularizar su documentación migratoria y otras que
              restringen el goce de sus derechos humanos (derechos sociales, programas sociales o servicios públicos); así como respecto a acciones en caso de vulneración de derechos y situaciones de
              discriminación.
            </li>
            <li>
              <strong>Asesoría en situaciones de violencia hacia las mujeres migrantes y refugiadas:</strong> Partiendo de la comprensión de que son complejas y singulares las expresiones de
              violencias que enfrentan las mujeres migrantes y refugiadas, AMUMRA busca generar estrategias de acompañamiento y asesorías en casos de violencias, con un enfoque de género,
              interculturalidad y derechos humanos.
            </li>
          </ul>
        </DownToUpAnimation>
      </section>
    </div>
  )
}
