import React from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TechGraph from './components/TechGraph'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
    return (
        <div className="min-h-screen text-slate-100 relative overflow-x-hidden">
            <AnimatedBackground />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <TechGraph />
                <Experience />
                <Contact />

                <footer className="mt-24 text-center text-slate-400 text-sm">
                    © {new Date().getFullYear()} Ankit Chaturvedy — Built with React, Tailwind, Framer Motion & Three.js
                </footer>
            </div>
        </div>
    )
}
