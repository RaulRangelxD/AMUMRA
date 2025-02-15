'use client'

import Image from 'next/image'
import * as Dialog from 'toldo'
import { MenuIcon } from '@/components/icons/Menu'
import { AnimatePresence } from 'motion/react'
import { DefaultButton } from '@/components/buttons/DefaultButton'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@/components/icons/ChevronDown'
import { LinkButton } from '@/components/buttons/LinkButton'

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
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  type NavItem = {
    title: string
    href: string
    dropdownItems?: { title: string; href: string }[]
  }

  const navItems: NavItem[] = [
    {
      title: 'Nosotras',
      href: '/',
      dropdownItems: [
        { title: 'Misión e Historia', href: '/nosotras/misionehistoria' },
        { title: 'Programas', href: '/nosotras/programas' },
        { title: 'Alianzas', href: '/nosotras/alianzas' },
      ],
    },
    {
      title: 'Actividades',
      href: '#',
      dropdownItems: [
        { title: 'Articular', href: '#' },
        { title: 'Carpas Intinerantes', href: '#' },
        { title: 'Talleres', href: '#' },
        { title: 'Publicación', href: '#' },
        { title: 'Conversatorios', href: '#' },
        { title: 'Visita de la Ministra', href: '#' },
        { title: 'Migrar es un Derecho', href: '#' },
        { title: 'Informes', href: '#' },
      ],
    },
    {
      title: 'Información',
      href: '/informacion',
      dropdownItems: [
        { title: 'Ingreso y Egreso del País', href: '/informacion/ingresoyegresodelpais' },
        { title: 'Residencias en Argentina', href: '/informacion/residenciasdeargentina' },
        { title: 'DNI Extranjeros', href: '/informacion/dniextranjeros' },
        { title: 'Derechos Migrantes', href: '/informacion/derechosmigrantes' },
      ],
    },
    {
      title: 'Red Federal',
      href: '/redfederal',
      dropdownItems: [{ title: 'Referentas Comunas', href: '/redfederal/referentascomunas' }],
    },
    {
      title: 'Denuncias',
      href: '/denuncias',
    },
    {
      title: 'Noticias',
      href: '#',
    },
    {
      title: 'Feria Migrante',
      href: '#',
      dropdownItems: [
        { title: 'Gastronomía y Pasteleria', href: '#' },
        { title: 'Servicios', href: '#' },
        { title: 'Moda', href: '#' },
        { title: 'Cuidado Personal', href: '#' },
        { title: 'Librería y Manualidades', href: '#' },
      ],
    },
    {
      title: 'Contacto',
      href: '/contacto',
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [menuIndex, setMenuIndex] = useState<number | null>(null)

  const handleMenuClick = (index: number) => {
    if (index === menuIndex) {
      setMenuIndex(null)
      return
    }
    setMenuIndex(index)
  }

  return (
    <nav id='navbar-overlay' className='from-10% h-12 lg:h-12 z-50 fixed top-0 lg:top-0 flex flex-row space-x-2 py-4 w-full items-center text-[#f8f9fa] px-2 xl:px-16'>
      <LinkButton href='/'>
        <Image className='max-h-10 w-auto' src='/Logo_AMUMRA_short_white.webp' alt='Next.js logo' width={130} height={20} priority />
      </LinkButton>
      <div className='flex-grow'></div>

      <ul className='space-x-4 hidden lg:flex'>
        {navItems.map((item, index) => (
          <li key={item.title} className='relative' onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
            <Link href={item.href} className='flex items-center py-2 hover:text-default-light transition-colors duration-200'>
              {item.title}
            </Link>
            {item.dropdownItems && hoveredIndex === index && (
              <ul
                className={`absolute w-48 backdrop-blur bg-black/40 border border-gray-200 rounded-md shadow-lg z-10 ${
                  index === navItems.length - 1 || index === navItems.length - 2 ? 'right-0' : 'left-0'
                }`}
              >
                {item.dropdownItems.map((dropdownItem) => (
                  <li key={dropdownItem.title} className='flex '>
                    <Link className='w-full px-4 py-2 text-sm hover:bg-gray-100/15 transition-colors duration-200 rounded-md' href={dropdownItem.href}>
                      {dropdownItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className='block lg:hidden'>
        <DefaultButton type='button' onClick={toggleModal} color='btn-transparent'>
          <MenuIcon size='sm' />
        </DefaultButton>
        <AnimatePresence initial={false}>
          {isModalOpen && (
            <Dialog.Root modal={false} open={isModalOpen}>
              <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black-a10' />
                <Dialog.Content>
                  <motion.div
                    initial={{ x: '150%' }}
                    animate={{ x: '1px' }}
                    exit={{ x: '150%' }}
                    transition={{ duration: 0.7 }}
                    className='z-40 end-0 fixed top-12 left-1/2 flex-col overflow-hidden bg-black/40 backdrop-blur rounded-l-xl'
                  >
                    <Dialog.Title className='hidden'>Menu</Dialog.Title>
                    <Dialog.Description className='hidden'>Navbar menu</Dialog.Description>
                    <ul className='flex flex-col'>
                      {navItems.map((item, index) => (
                        <li key={item.title} className={`${menuIndex === index && 'bg-black/40'}`}>
                          <div className='flex flex-row justify-end hover:bg-default-light/15 transition-colors duration-200'>
                            <Link href={item.href} className='px-2 py-2 flex items-center text-default-light'>
                              {item.title}
                            </Link>
                            {item.dropdownItems ? (
                              <DefaultButton className='px-0 pe-2 py-0' color='btn-transparent' onClick={() => handleMenuClick(index)}>
                                <ChevronDownIcon size='sm' />
                              </DefaultButton>
                            ) : (
                              <div className='size-8'></div>
                            )}
                          </div>
                          {item.dropdownItems && menuIndex === index && (
                            <ul className='flex flex-col z-10 w-full'>
                              {item.dropdownItems.map((dropdownItem) => (
                                <li key={dropdownItem.title} className='flex flex-row w-full'>
                                  <Link className='px-2 w-full text-end py-2 text-sm text-default-light hover:bg-default-light/15 transition-colors duration-200 pe-2' href={dropdownItem.href}>
                                    {dropdownItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
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
