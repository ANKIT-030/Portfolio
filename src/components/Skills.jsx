import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {category:'Programming', items:['Java','Python','C++']},
  {category:'Web', items:['HTML','CSS','JavaScript','React','Node.js','Express']},
  {category:'Tools', items:['Git','AWS','Docker']}
]

export default function Skills(){
  return (
    <section id="skills" className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((s,i)=> (
          <motion.div key={s.category} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="glass p-5 rounded-md">
            <h3 className="font-medium mb-3">{s.category}</h3>
            <div className="grid grid-cols-2 gap-2">
              {s.items.map(it=> (
                <div key={it} className="flex items-center gap-3 p-2 bg-[rgba(255,255,255,0.02)] rounded-md">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3EE0FF]/20 to-[#8A5BFF]/20 flex items-center justify-center text-xs font-semibold">{it[0]}</div>
                  <div className="flex-1">
                    <div className="text-sm">{it}</div>
                    <div className="h-2 bg-slate-800 rounded mt-1 overflow-hidden">
                      <motion.div className="bg-gradient-to-r from-[#3EE0FF] to-[#8A5BFF] h-2" initial={{width:0}} whileInView={{width: `${40 + Math.floor(Math.random()*50)}%`}} transition={{duration:1.2}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
