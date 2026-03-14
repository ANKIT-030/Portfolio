import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

console.log('Starting React app...')

const container = document.getElementById('root')
console.log('Root container:', container)

if (!container) {
  console.error('Root container not found!')
} else {
  const root = createRoot(container)
  console.log('Creating root...')

  root.render(
      <React.StrictMode>
          <App />
      </React.StrictMode>
  )

  console.log('App rendered successfully')
}
