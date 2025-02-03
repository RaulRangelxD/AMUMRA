'use client'

import { motion } from 'motion/react'

interface LandingImageProps {
  bg: string
  text: string
}

export const LandingImage = ({ bg, text }: LandingImageProps) => {
  return (
    <div className={`${bg} bg-cover bg-center relative flex items-center justify-center w-full h-screen overflow-hidden`}>
      <div className='text-center z-10 text-default-light'>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className='text-5xl font-bold border-[14px] p-4'>{text}</h1>
        </motion.div>
      </div>
    </div>
  )
}
