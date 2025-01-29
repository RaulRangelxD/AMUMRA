'use client'

import Link from 'next/link'
import { DonateIcon } from '@/components/icons/Donate'
import { motion } from 'framer-motion'

export const Donate = () => {
  return (
    <motion.div
      className='fixed left-0 top-30 z-50'
      initial={{ width: '44px' }}
      whileHover={{
        width: '130px',
        transition: { duration: 0.75 },
      }}
    >
      <Link href='#' className='group flex items-center h-full bg-primary text-default-light rounded-r-full overflow-hidden'>
        <p className='ms-0 group-hover:ms-2 justify-end scale-x-0 w-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:w-24 transition duration-[750ms,0ms]'>Apóyanos</p>
        <DonateIcon className='m-2 w-24' />
      </Link>
    </motion.div>
  )
}
