import React from 'react'
import { motion } from 'framer-motion'

const internships = [
  {company:'Next Gen Dev', role:'Web Development Intern', period:'July 2024 – Sept 2024',  points:[
      "Developed responsive frontend modules using HTML, CSS, and JavaScript",
      "Integrated REST APIs into a React-based dashboard",
      "Worked in Agile teams (sprints, stand-ups)",
      "Optimized performance and fixed bugs"]},
  {company:'1M1B (1 Million for 1 Billion)', role:'Data Analyst Intern', period:'Jun 2025 – Aug 2025', tools:['Python', 'SQL', 'Pandas', 'NumPy', 'Excel'], points:[ "Performed data cleaning and analysis using Python and SQL",
      "Generated insights for digital education programs",
      "Worked with real datasets for impact analysis"]}
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
