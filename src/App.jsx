import React from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TechGraph from './components/TechGraph'
import Experience from './components/Experience'
import Contact from './components/Contact'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#05060a] text-slate-100 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
            <p className="text-slate-400 mb-4">The application encountered an error.</p>
            <details className="text-left bg-slate-800 p-4 rounded">
              <summary className="cursor-pointer">Error details</summary>
              <pre className="text-red-300 text-sm mt-2 overflow-auto">
                {this.state.error?.toString()}
              </pre>
            </details>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default function App() {
    return (
        <ErrorBoundary>
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
        </ErrorBoundary>
    )
}
