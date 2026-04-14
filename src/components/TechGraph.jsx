import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'

const techLayers = [
  {
    title: "🧠 AI & Data",
    tech: "Python • SQL • Data Analysis • AI APIs"
  },
  {
    title: "⚙️ Backend",
    tech: "Node.js • Express.js • REST APIs"
  },
  {
    title: "💻 Frontend",
    tech: "React.js • React Native • HTML • CSS • JavaScript • TypeScript • Tailwind • Bootstrap"
  },
  {
    title: "🗄️ Database",
    tech: "MongoDB (Mongoose) • PostgreSQL • MySQL • Firebase"
  },
  {
    title: "☁️ Tools & Tech",
    tech: "Git • GitHub • Vercel • VS Code • Agile"
  }
]

function TechText() {
  return (
    <>
      {techLayers.map((layer, i) => (
        <group key={i} position={[0, 2 - i * 1, 0]}>
          <Text
            fontSize={0.3}
            color="#6EE7F8"
            anchorX="center"
            anchorY="middle"
          >
            {layer.title}
          </Text>

          <Text
            position={[0, -0.3, 0]}
            fontSize={0.2}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {layer.tech}
          </Text>
        </group>
      ))}
    </>
  )
}

function Fallback() {
  return (
    <div className="h-full flex items-center justify-center text-slate-400 text-sm text-center px-4">
      <div>
        <p className="mb-2 font-semibold">Tech Stack</p>
        {techLayers.map((layer, i) => (
          <p key={i} className="mb-1">
            {layer.title} → {layer.tech}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function TechGraph() {
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

      <div className="h-80 glass rounded-md overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          onError={() => setHasError(true)}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[5, 5, 5]} />

          <Suspense fallback={null}>
            <TechText />
          </Suspense>

          <OrbitControls autoRotate autoRotateSpeed={0.7} enableZoom={false} />
        </Canvas>
      </div>
    </section>
  )
}