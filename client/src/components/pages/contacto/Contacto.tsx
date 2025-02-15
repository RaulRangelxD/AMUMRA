'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LinkButton } from '@/components/buttons/LinkButton'
import { FacebookIcon } from '@/components/icons/Facebook'
import { InstagramIcon } from '@/components/icons/Instagram'
import { WhatsappIcon } from '@/components/icons/Whatsapp'
import { YoutubeIcon } from '@/components/icons/Youtube'
import { LandingImage } from '@/components/LandingImage'
import Image from 'next/image'
import Link from 'next/link'

export const Contacto = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Contacto' />
      <section className='flex flex-col lg:flex-col items-center px-2 lg:px-12 pb-8 justify-center space-y-4'>
        <h2 className='font-bold text-xl text-center py-4'>Redes Sociales y Contacto</h2>
        <div className='flex flex-col'>
          <div id='social-navbar' className='flex flex-row w-full z-50 items-center justify-center text-default-dark'>
            <Link href={'https://www.instagram.com/amumraddhh/'} className='hover:bg-black/10 rounded py-0.5 px-1'>
              <InstagramIcon className='mx-4 my-0 lg:mx-4 lg:my-2' size='lg' />
            </Link>
            <Link href={'https://www.youtube.com/channel/UCCmGDdO2-paNs-mEfVkMwmA'} className='hover:bg-black/10 rounded py-0.5 px-1'>
              <YoutubeIcon className='mx-4 my-0 lg:mx-4 lg:my-2' size='lg' />
            </Link>
            <Link href={'https://api.whatsapp.com/send/?phone=5491163300000&text&type=phone_number&app_absent=0'} className='hover:bg-black/10 rounded py-0.5 px-1'>
              <WhatsappIcon className='mx-4 my-0 lg:mx-4 lg:my-2' size='lg' />
            </Link>
            <Link href={'https://www.facebook.com/mujeres.migrantas'} className='hover:bg-black/10 rounded py-0.5'>
              <FacebookIcon className='mx-2 my-0 lg:mx-3 lg:my-2' size='lg' />
            </Link>
          </div>
        </div>
      </section>
      <section className='flex flex-col lg:flex-col items-center px-2 lg:px-12 pb-8 justify-center space-y-4 bg-gradient-to-r from-[#333399] to-[#ff00cc] text-default-light'>
        <h2 className='font-bold text-xl text-center py-4'>Voluntariado</h2>
        <div className='flex flex-col lg:flex-row'>
          <DownToUpAnimation amount={0.1} className='max-w-[100%] mx-2 lg:mx-16 lg:max-w-[50%] pb-4 pe-0 lg:pb-0 lg:pe-4 justify-center items-center space-y-4'>
            <p className='font-bold text-center'>¡SUMAMOS VOLUNTARIAS!</p>
            <p className='text-justify'>
              Desde AMUMRA trabajamos para dignificar a las migrantes y refugiadas en Argentina, accionando continuamente para hacer valer sus derechos y lograr que el proceso de ingresar y permanecer
              sea un trayecto más ameno. <br /> Ser voluntarias es una experiencia enriquecedora a nivel humano y un continúo aprendizaje, si quieres formar parte el único requisito es ser mayor de 18
              años. <br />
              Completa el siguiente Link y te contactaremos a la brevedad.
            </p>
            <div className='flex justify-center'>
              <LinkButton color='btn-primary-first' href='https://docs.google.com/forms/d/e/1FAIpQLSdEbwD_tohbayzmp-6YcQ94WpNXxbRK9SAM-NyQUO1ZceLb2w/viewform'>
                Aqui
              </LinkButton>
            </div>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <Image src={'/voluntariadx.webp'} alt='image' width={0} height={0} sizes='100%' priority className='w-full h-auto rounded-xl' />
          </DownToUpAnimation>
        </div>
      </section>
    </div>
  )
}
