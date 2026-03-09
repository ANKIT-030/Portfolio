import React from 'react'
import { motion } from 'framer-motion'

const internships = [
  {company:'Internship Co', role:'Software Engineering Intern', period:'Jun 2023 - Aug 2023', tools:['React','Node.js','Docker']}
]

export default function Experience(){
  return (
    <section id="experience" className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Experience / Internship</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {internships.map(i=> (
          <motion.div key={i.company} whileHover={{ y:-6 }} className="glass p-4 rounded-md">
            <div className="font-semibold">{i.role} — {i.company}</div>
            <div className="text-slate-400 text-sm">{i.period}</div>
            <div className="mt-3 flex gap-2">
              {i.tools.map(t=> <span key={t} className="text-xs bg-slate-800 px-2 py-1 rounded">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
