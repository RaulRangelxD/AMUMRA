'use client'

import Image from 'next/image'
import * as Dialog from 'toldo'
import { MenuIcon } from './icons/Menu'
import { AnimatePresence } from 'motion/react'
import { DefaultButton } from '@/components/buttons/Button'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    if (window.scrollY <= 0) {
      if (!isModalOpen) {
        document.getElementById('navbar-overlay')?.classList.add('bg-gradient-to-r', 'from-[#333399]', 'to-[#ff00cc]')
      }
      if (isModalOpen) {
        setTimeout(() => {
          document.getElementById('navbar-overlay')?.classList.remove('bg-gradient-to-r', 'from-[#333399]', 'to-[#ff00cc]')
        }, 700)
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar-overlay')
      if (window.scrollY <= 0) {
        navbar?.classList.remove('bg-gradient-to-r', 'from-[#333399]', 'to-[#ff00cc]')
      }
      if (window.scrollY > 0) {
        navbar?.classList.add('bg-gradient-to-r', 'from-[#333399]', 'to-[#ff00cc]')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav id='navbar-overlay' className='h-24 z-50 fixed top-0 flex flex-row space-x-2 py-4 w-full items-center text-[#f8f9fa] px-16 lg:px-2'>
      <Image className='max-h-20 w-auto' src='/Logo_AMUMRA_short_white.png' alt='Next.js logo' width={130} height={20} priority />

      <div className='flex-grow'></div>
      <div className='space-x-2 hidden lg:block'>
        <a href=''>Nosotras</a>
        <a href=''>Actividades</a>
        <a href=''>Informacion</a>
        <a href=''>Red Federal</a>
        <a href=''>Denuncias</a>
        <a href=''>Noticias</a>
        <a href=''>Apoyanos</a>
        <a href=''>Feria Migrante</a>
        <a href=''>Encuestas</a>
        <a href=''>Contacto</a>
      </div>

      <div className='block lg:hidden'>
        <DefaultButton type='button' onClick={toggleModal} color='btn-transparent'>
          <MenuIcon />
        </DefaultButton>
        <AnimatePresence initial={false}>
          {isModalOpen && (
            <Dialog.Root modal={false} open={isModalOpen}>
              <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black-a10' />
                <Dialog.Content>
                  <motion.div
                    initial={{ y: '-150%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-150%' }}
                    transition={{ duration: 0.7 }}
                    className='z-40 start-0 fixed top-24 left-1/2 w-full flex-col overflow-hidden bg-gradient-to-r from-[#333399] to-[#ff00cc]'
                  >
                    <Dialog.Title className='hidden'>Menu</Dialog.Title>
                    <Dialog.Description className='hidden'>Navbar menu</Dialog.Description>
                    <div className='flex flex-col space-y-4 mx-16 my-4'>
                      <a href=''>Nosotras</a>
                      <a href=''>Actividades</a>
                      <a href=''>Informacion</a>
                      <a href=''>Red Federal</a>
                      <a href=''>Denuncias</a>
                      <a href=''>Noticias</a>
                      <a href=''>Apoyanos</a>
                      <a href=''>Feria Migrante</a>
                      <a href=''>Encuestas</a>
                      <a href=''>Contacto</a>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
