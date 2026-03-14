import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Points, PointMaterial, OrbitControls } from '@react-three/drei'

function Cloud(){
  const points = Array.from({length:60}, (_,i)=> [ (Math.random()-0.5)*6, (Math.random()-0.5)*3, (Math.random()-0.5)*6 ])
  return (
    <Points positions={points} stride={3} frustumCulled={false}>
      <PointMaterial size={0.06} color="#6EE7F8" />
    </Points>
  )
}

function Fallback() {
  return (
    <div className="h-full flex items-center justify-center text-slate-400 text-sm">
      3D visualization not available
    </div>
  )
}

export default function TechGraph(){
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <section id="techgraph" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack Visualization</h2>
        <div className="h-64 glass rounded-md overflow-hidden flex items-center justify-center">
          <div className="text-slate-400 text-sm">3D visualization failed to load</div>
        </div>
      </section>
    )
  }

  return (
    <section id="techgraph" className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Tech Stack Visualization</h2>
      <div className="h-64 glass rounded-md overflow-hidden">
        <Canvas
          camera={{ position: [0,0,8], fov:50 }}
          onError={() => setHasError(true)}
          gl={{ antialias: false, alpha: true }}
        >
          <ambientLight intensity={0.6} />
          <spotLight position={[10,10,10]} intensity={0.6} />
          <Suspense fallback={<Fallback />}>
            <Cloud />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.6} />
        </Canvas>
      </div>
    </section>
  )
}
