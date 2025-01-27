'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Estado inicial
      animate={{ opacity: 1 }} // Estado final
      transition={{ ease: 'easeInOut', duration: 0.75 }} // Transición
    >
      {children}
    </motion.div>
  )
}