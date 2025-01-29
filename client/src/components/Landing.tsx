'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Landing = () => {
  return (
    <div className='relative flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      {/* Main Text */}
      <div className='text-center z-10'>
        <motion.div viewport={{ amount: 0.8, once: true }} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Image className='' src='/Logo_AMUMRA_large_white.webp' alt='Next.js logo' width={510} height={186} priority />
        </motion.div>
      </div>

      {/* Rotating Rectangles */}
      <motion.div
        className='absolute w-[2000px] h-[400px] bg-gradient-to-r from-purple-700 to-indigo-600 shadow-xl'
        style={{ transformOrigin: '60% 150%' }}
        initial={{ opacity: 0, scale: 2, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -10 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className='absolute w-[2000px] h-[400px] bg-gradient-to-r from-purple-700 to-indigo-600 shadow-xl'
        style={{ transformOrigin: '45% 100%' }}
        initial={{ opacity: 0, scale: 2, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 50 }}
        transition={{ duration: 1 }}
      />

      {/* Transparent Rectangles */}
      <motion.div
        className='absolute w-[500px] h-[500px] border-[15px] border-white/20 left-[-5%] bottom-[-10%]'
        style={{ zIndex: 2 }}
        animate={{
          y: [0, 15, 5, 15, 0],
          rotate: [25, 30, 20, 35, 25],
        }}
        transition={{ repeat: Infinity, duration: 24 }}
      />
      <motion.div
        className='absolute w-[600px] h-[600px] border-[15px] border-white/20 right-[-10%] top-[5%]'
        style={{ zIndex: 2 }}
        animate={{
          y: [0, 15, 5, 15, 0],
          rotate: [25, 30, 20, 35, 25],
        }}
        transition={{ repeat: Infinity, duration: 24 }}
      />

      {/* Circles */}
      {[
        { size: 50, top: '50%', left: '5%' },
        { size: 70, top: '20%', left: '83%' },
        { size: 40, top: '80%', right: '25%' },
      ].map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full border-[2px] border-white`}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            top: circle.top,
            left: circle.left,
            right: circle.right,
            zIndex: 2,
          }}
          animate={{
            y: [0, 5, 0, 5, 0],
            x: [0, 5, 10, 5, 0],
          }}
          transition={{ repeat: Infinity, duration: index == 2 ? 5.5 : index == 1 ? 7 : 4 }}
        />
      ))}

      {/* Triangles */}
      {[
        { size: 50, top: '45%', right: '2%', rotate: 30 },
        { size: 75, top: '30%', left: '15%', rotate: 15 },
        { size: 45, top: '80%', left: '12%', rotate: 40 },
        { size: 45, top: '65%', right: '15%', rotate: -40 },
      ].map((triangle, index) => (
        <motion.div
          key={index}
          className='absolute'
          style={{
            top: triangle.top,
            right: triangle.right,
            left: triangle.left,
            zIndex: 3,
          }}
          animate={{
            rotate: [triangle.rotate, triangle.rotate + 5, triangle.rotate],
            y: [0, 5, 0, 5, 0],
            x: [0, 5, 10, 5, 0],
          }}
          transition={{ repeat: Infinity, duration: index == 2 ? 5 : index == 1 ? 7 : index ? 6 : 4 }}
        >
          <Image src='/obj_triangle.webp' alt='triangle' width={triangle.size} height={triangle.size} />
        </motion.div>
      ))}
    </div>
  )
}
