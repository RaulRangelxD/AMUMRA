'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'
import Image from 'next/image'

export const RedFederal = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Red Federal' />
      <div className='flex flex-col px-2 lg:px-12 py-12 justify-center items-center'>
        <div className='grid grid-col-1 lg:grid-cols-2 gap-2 max-w-[100%] space-y-8'>
          <Image className='row-span-1 lg:row-span-3 w-full shadow-xl max-w-xl rounded-xl' src='/redfederal.webp' alt='provincias' width={523} height={799} priority />
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>Referentas Responsables</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Red Federal de Mujeres Migrantes, Refugiadas y Disidencias de Prevención de las Violencias</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>CABA, Ciudad Autónoma de Buenos Aires</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 1</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Maya Nayrob, Migrante Boliviana</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Frede Montaño, Migrante Ecuatoriana</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Alba Cuellar Murillo, Argentina</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 3</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Zunilda Valenciano, Migrante Venezolana</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Natalia Moroskova, Migrante Rusa</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Flor Araujo, Migrante Venezolana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 4</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Perla Doldán, Migrante Paraguaya</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Sandra Velásquez, Migrante Boliviana</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Ángela Velandia, Migrante Colombiana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 6</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Karim Rossio Bonifacio, Migrante Peruana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 7</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Mercedes Salvatierra, Migrante Boliviana, Barrio Rodolfo Ricciardelli (Ex Villa 1-11-14)</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Elizabeth Saravia, Migrante Boliviana, Mza 22 Casa 37, Barrio Rodolfo Ricciardelli (Ex Villa 1-11-14)</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Rocío Mazuelos, Migrante Peruana, Barrio Rodolfo Ricciardelli (Ex Villa 1-11-14)</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 8</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Karina Lorenti, Migrante Boliviana</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Maria Martinez, Migrante Paraguaya, Villa 15 - Lugano</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 9</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Sergina Da Boa Morte, Migrante Brasilera</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 10</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Leslie Cahique, Migrante Peruana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 11</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Natalia Sobrino, Argentina</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 13</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Alba Cuellar Murillo, Argentina</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.5}>
            <h3 className='font-bold text-xl'>Comuna 15</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-2'>Rosa Catalina Chavez Abarca, Migrante Peruana</p>
          </DownToUpAnimation>
        </div>
      </div>
    </div>
  )
}
