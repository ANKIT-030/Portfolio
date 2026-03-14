import React from 'react'

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

export default function App() {
    console.log('App component rendering...')

    return (
        <ErrorBoundary>
            <div style={{ minHeight: '100vh', backgroundColor: '#05060a', color: 'white', position: 'relative', overflowX: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 10, maxWidth: '72rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', color: '#3ee0ff' }}>
                        Portfolio Loading...
                    </h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginBottom: '2rem' }}>
                        If you can see this, React is working! The issue might be with component imports or dependencies.
                    </p>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '0.5rem', padding: '1rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Debug Info:</h2>
                        <p>Current time: {new Date().toLocaleString()}</p>
                        <p>React version: {React.version}</p>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    )
}
