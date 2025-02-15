import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationProps {
  children: ReactNode
  amount?: number
  className?: string
}

export const DownToUpAnimation: React.FC<AnimationProps> = ({ children, amount, className }) => {
  return (
    <motion.div
      className={`${className}`}
      viewport={{ amount: amount ? amount : 1, once: true }}
      initial={{ opacity: 0, y: '50%', scaleY: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export const LeftToRightAnimation: React.FC<AnimationProps> = ({ children, amount, className }) => {
  return (
    <motion.div
      className={`${className}`}
      viewport={{ amount: amount ? amount : 1, once: true }}
      initial={{ opacity: 0, x: '-50%', scaleX: 0.1 }}
      whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export const RightToLeftAnimation: React.FC<AnimationProps> = ({ children, amount, className }) => {
  return (
    <motion.div
      className={`${className}`}
      viewport={{ amount: amount ? amount : 1, once: true }}
      initial={{ opacity: 0, x: '50%', scaleX: 0.1 }}
      whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
