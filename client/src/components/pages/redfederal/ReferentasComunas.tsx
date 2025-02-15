'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'
import Image from 'next/image'

export const ReferentasComunas = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Referentas Comunas' />
      <div className='flex flex-col px-2 lg:px-12 py-12 justify-center items-center'>
        <div className='grid grid-col-1 lg:grid-cols-2 gap-2 max-w-[100%] space-y-8'>
          <Image className='row-span-1 lg:row-span-7 w-full shadow-xl max-w-xl rounded-xl' src='/provincias.webp' alt='provincias' width={523} height={799} priority />
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Avellaneda</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Yanela Freires, Migrante Venezolana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Berazategui</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Cinthia Acosta, Migrante Paraguaya (El Pato)</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Bellavista</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Sandra Jaqueline Ledesma, Argentina, Barrio Rafael Obligado, Partido de San Miguel</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Burzaco</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Rosa Fernández, Migrante Boliviana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Canning</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Alexandra Yepez, Migrante Colombiana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Esteban Echeverría</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Rosana Huaman, Migrante Peruana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Ezpeleta</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Noemí Coque, Migrante Boliviana</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Lourdes Rodríguez, Migrante Boliviana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>González Catán</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Sandra Fleitas Caballero, Migrante Paraguaya</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Gregorio de Laferrere</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Maria Lily Garcia, Migrante Boliviana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Lanús</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Liliana Paolo, Argentina</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Loma Hermosa</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Hilary Álvarez, Migrante Boliviana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Lomas de Zamora</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Luisa Ayala Azurduy, Migrante Boliviana, Barrio 17 de Noviembre</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Cecilia Sanchez Valdiviezo, Migrante Peruana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Merlo</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Mónica Patricia Austiniano, Argentina</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Moreno</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Lilian Cano Gonzalez, Migrante Paraguaya</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Leonor Gloker, Argentina</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Clara Ayelén Franco, Argentina</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Morón</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Arisdona Idrogo, Migrante Venezolana</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Morena Herrera, Migrante Salvadoreña</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Ramos Mejía</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Rosibel Vizcaíno, Migrante Venezolana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>San Fernando</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Miriam Huaman, Migrante Peruana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Villa Celina</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Eliana De Rosa, Argentina</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Karina Villalba, Argentina</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Mar del Plata</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Katia Do Santos, Migrante Brasilera</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Provincia del Chaco</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Rebeca Hilai, Migrante Venezolana</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-xl'>Provincia de Córdoba</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Lizeth Salvatierra, Migrante Boliviana</p>
          </DownToUpAnimation>
        </div>
      </div>
    </div>
  )
}
