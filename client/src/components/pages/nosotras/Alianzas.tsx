'use client'

import { EmblaSlider } from '@/components/Carousel'
import { LandingImage } from '@/components/LandingImage'
import { motion } from 'motion/react'
import Image from 'next/image'

export const Alianzas = () => {
  const images = [
    { src: '/fondo_mujeres_sur.webp', alt: 'Image 1' },
    { src: '/gaatw.webp', alt: 'Image 2' },
    { src: '/fondo_global_mujeres.webp', alt: 'Image 3' },
    { src: '/womens_fund.webp', alt: 'Image 4' },
    { src: '/miredes.webp', alt: 'Image 5' },
    { src: '/vgif.webp', alt: 'Image 6' },
  ]
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Alianzas' />
      <section className=''>
        <motion.div
          className='flex flex-col items-center px-2 lg:px-12 pt-8 justify-center'
          viewport={{ amount: 0.6, once: true }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='max-w-[100%] lg:max-w-2xl text-lg text-center'>AMUMRA trabaja gracias al apoyo de las siguientes organizaciones e instituciones:</h2>
          <div className='mt-4'>
            <EmblaSlider autoplayDelay={3000}>
              {images.map((image, index) => (
                <div key={index} className='flex-[0_0_50%] items-center'>
                  <Image className='w-full h-auto' src={image.src} alt={image.alt} width={0} height={0} sizes='100vw' />
                </div>
              ))}
            </EmblaSlider>
          </div>
        </motion.div>
      </section>
      <motion.article className='flex justify-center' viewport={{ amount: 0.7, once: true }} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Image src={'/banner_alianzas.webp'} alt='image' width={0} height={0} sizes='100vw' priority className='w-full lg:w-2xl h-auto' />
      </motion.article>
    </div>
  )
}
