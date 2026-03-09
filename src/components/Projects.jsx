import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'

const EX = [
  {id:1, title:'AI Study Mate', desc:'AI learning assistant that provides study plans, quizzes and explanations.', tech:['Python','TensorFlow','React'], github:'#', live:'#'},
  {id:2, title:'MERN Stack Web App', desc:'Full-stack web app with authentication and real-time features.', tech:['MongoDB','Express','React','Node'], github:'#', live:'#'},
  {id:3, title:'Data Science Project', desc:'Exploratory analysis and predictive models.', tech:['Python','Pandas','Scikit-learn'], github:'#', live:'#'}
]

export default function Projects(){
  const [open, setOpen] = useState(null)
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {EX.map(p=> (
          <motion.div key={p.id} whileHover={{ y:-8 }} className="glass p-4 rounded-md cursor-pointer" onClick={()=> setOpen(p)}>
            <div className="text-lg font-semibold">{p.title}</div>
            <div className="text-slate-400 text-sm mt-2">{p.desc}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t=> <span key={t} className="text-xs bg-slate-800 px-2 py-1 rounded">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>

      <Modal open={!!open} onClose={()=> setOpen(null)}>
        {open && (
          <div>
            <h3 className="text-xl font-semibold">{open.title}</h3>
            <p className="text-slate-400 mt-2">{open.desc}</p>
            <div className="mt-4 flex gap-3">
              <a className="btn-neon px-3 py-2 rounded" href={open.github}>GitHub</a>
              <a className="glass px-3 py-2 rounded border" href={open.live}>Live Demo</a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
