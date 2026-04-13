import React, { Suspense } from 'react'

// Lazy load components to prevent build issues
const AnimatedBackground = React.lazy(() => import('./components/AnimatedBackground').catch(() => ({ default: () => null })))
const Hero = React.lazy(() => import('./components/Hero').catch(() => ({ default: () => <div className="text-center py-12"><h1 className="text-2xl">Hero Section</h1></div> })))
const About = React.lazy(() => import('./components/About').catch(() => ({ default: () => <div className="text-center py-12"><h1 className="text-2xl">About Section</h1></div> })))
const Skills = React.lazy(() => import('./components/Skills').catch(() => ({ default: () => <div className="text-center py-12"><h1 className="text-2xl">Skills Section</h1></div> })))
const Projects = React.lazy(() => import('./components/Projects').catch(() => ({ default: () => <div className="text-center py-12"><h1 className="text-2xl">Projects Section</h1></div> })))
const TechGraph = React.lazy(() => import('./components/TechGraph').catch(() => ({ default: () => <div className="text-center py-12"><h1 className="text-2xl">Tech Visualization</h1></div> })))
const Experience = React.lazy(() => import('./components/Experience').catch(() => ({ default: () => <div className="text-center py-12"><h1 className="text-2xl">Experience Section</h1></div> })))
const Contact = React.lazy(() => import('./components/Contact').catch(() => ({ default: () => <div className="text-center py-12"><h1 className="text-2xl">Contact Section</h1></div> })))

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
        <div style={{ minHeight: '100vh', backgroundColor: '#05060a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '1rem' }}>Something went wrong</h1>
            <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>The application encountered an error.</p>
            <details style={{ textAlign: 'left', backgroundColor: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
              <summary style={{ cursor: 'pointer' }}>Error details</summary>
              <pre style={{ color: '#fca5a5', fontSize: '0.875rem', marginTop: '0.5rem', overflow: 'auto' }}>
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

function LoadingFallback() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
      Loading...
    </div>
  )
}

export default function App() {
    console.log('App component rendering...')

    return (
        <ErrorBoundary>
            <div className="min-h-screen text-slate-100 relative overflow-x-hidden" style={{ backgroundColor: '#05060a' }}>
                <Suspense fallback={<LoadingFallback />}>
                    <AnimatedBackground />
                </Suspense>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                    <Suspense fallback={<LoadingFallback />}>
                        <Hero />
                    </Suspense>

                    <Suspense fallback={<LoadingFallback />}>
                        <About />
                    </Suspense>

                    <Suspense fallback={<LoadingFallback />}>
                        <Skills />
                    </Suspense>

                    <Suspense fallback={<LoadingFallback />}>
                        <Projects />
                    </Suspense>

                    <Suspense fallback={<LoadingFallback />}>
                        <TechGraph />
                    </Suspense>

                    <Suspense fallback={<LoadingFallback />}>
                        <Experience />
                    </Suspense>

                    <Suspense fallback={<LoadingFallback />}>
                        <Contact />
                    </Suspense>

                    <footer className="mt-24 text-center text-slate-400 text-sm">
                        © {new Date().getFullYear()} Ankit Chaturvedy — Built with React, Tailwind, Framer Motion & Three.js
                    </footer>
                </div>
            </div>
        </ErrorBoundary>
    )
}
