import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <motion.div className="glass p-4 rounded-md" whileHover={{ y: -6 }}>
          <h3 className="font-medium">Education</h3>
          <p className="text-slate-400">B.Tech — Computer Science & Engineering</p>
        </motion.div>

        <motion.div className="glass p-4 rounded-md" whileHover={{ y: -6 }}>
          <h3 className="font-medium">Focus</h3>
          <p className="text-slate-400">Problem Solving · Programming · Innovation</p>
        </motion.div>

        <motion.div className="glass p-4 rounded-md" whileHover={{ y: -6 }}>
          <h3 className="font-medium">Timeline</h3>
          <div className="text-slate-400 text-sm mt-2">
            <div className="flex gap-3 items-start">
              <div className="text-neon-purple">2020</div>
              <div>Started B.Tech, Learned core CS fundamentals</div>
            </div>
            <div className="flex gap-3 items-start mt-2">
              <div className="text-neon-purple">2022</div>
              <div>Built several web apps and explored ML</div>
            </div>
            <div className="flex gap-3 items-start mt-2">
              <div className="text-neon-purple">2024</div>
              <div>Internships & AI projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
