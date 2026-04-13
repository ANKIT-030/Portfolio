import React from 'react'
import { motion } from 'framer-motion'

export default function Modal({ open, onClose, children }){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute inset-0 bg-black/60" onClick={onClose} />
      <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="glass p-6 rounded-md z-10 max-w-3xl w-full">
        <button onClick={onClose} className="text-slate-400 text-sm mb-2">Close</button>
        {children}
      </motion.div>
    </div>
  )
}
