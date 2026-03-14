import React from 'react'
import Typing from './Typing'

// Conditionally import framer-motion to prevent SSR issues
let motion = { div: 'div' }
try {
  motion = require('framer-motion').motion
} catch (e) {
  console.warn('Framer Motion not available, using regular divs')
}

export default function Hero() {
    return (
        <section id="hero" className="min-h-[70vh] flex items-center py-12">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Hi, I'm Ankit Chaturvedy — <span className="text-neon-blue">Computer Science and Engineer</span>
                    </h1>

                    <p className="mt-4 text-slate-300 max-w-xl">I build high-quality software, web apps, and AI tools. I enjoy solving hard problems and shipping elegant, scalable solutions.</p>

                    <div className="mt-6 flex gap-3">
                        <a href="#projects" className="btn-neon px-4 py-2 rounded-md">View Projects</a>
                        <a href="#contact" className="glass px-4 py-2 rounded-md border border-slate-700">Contact Me</a>
                    </div>

                    <div className="mt-6 text-lg">
                        <Typing items={["Java Developer", "MERN Stack Developer", "AI Enthusiast"]} />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="hidden md:flex justify-center">
                    <div className="w-72 h-72 glass rounded-xl flex items-center justify-center">
                        <div className="text-center p-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3EE0FF]/30 to-[#8A5BFF]/30 border border-slate-600 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl font-bold">A</span>
                            </div>
                            <div className="text-slate-300">Computer Science Engineer</div>
                            <div className="text-sm text-slate-400 mt-2">Problem solver · Full Stack Developer · AI</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
