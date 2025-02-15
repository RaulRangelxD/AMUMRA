'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'
import Image from 'next/image'

export const Apoyanos = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Apóyanos' />
      <section className='flex flex-col lg:flex-col items-center px-2 lg:px-12 py-8 justify-center space-y-4'>
        <DownToUpAnimation amount={0.1} className='max-w-[100%] mx-2 lg:mx-16 lg:max-w-[50%] pb-4 pe-0 lg:pb-0 lg:pe-4'>
          <p>
            En estos momentos tan difíciles qué vivimos a nivel mundial necesitamos tu ayuda, con tu donación podés sumarte a nuestras campañas para defender la igualdad de derechos, de Migrantes,
            prevenir las violencias de género, la trata de mujeres y adolescentes, asistir a víctimas y ayudarnos a organizar nuestras actividades.
          </p>
        </DownToUpAnimation>
        <div className='flex flex-row max-w-[100%] mx-2 lg:mx-16 lg:max-w-[50%] pb-4 pe-0 lg:pb-0 lg:pe-4 justify-center items-center'>
          <DownToUpAnimation amount={0.1}>
            <div className='flex flex-col bg-neutral-300 rounded-full justify-center items-center p-8'>
              <p>TU APORTE</p>
              <p>
                N° De Cuenta: 0633296591 <br /> CBU:1500013800006332965914 <br /> BANCO: BANC0 HSBC <br /> AMUMRA ASOCIACIÓN CIVIL
              </p>
              <Image src={'/hsbc.webp'} alt='image' width={75} height={75} priority className='h-auto rounded-xl' />
            </div>
          </DownToUpAnimation>
        </div>
      </section>
    </div>
  )
}
