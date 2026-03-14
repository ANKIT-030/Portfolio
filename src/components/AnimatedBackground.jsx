import React, { useRef, useEffect } from 'react'

// Conditionally import framer-motion
let motion = { div: 'div' }
try {
  motion = require('framer-motion').motion
} catch (e) {
  console.warn('Framer Motion not available for AnimatedBackground')
}

// Simple Canvas particle background and floating code snippets overlay
export default function AnimatedBackground(){
  const canvasRef = useRef(null)

  useEffect(()=>{
    try {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        console.warn('Canvas context not available')
        return
      }

      let width = canvas.width = window.innerWidth
      let height = canvas.height = window.innerHeight
      const particles = []

      function rand(min,max){ return Math.random()*(max-min)+min }
      for(let i=0;i<120;i++){
        particles.push({x:rand(0,width), y:rand(0,height), r:rand(0.5,1.8), vx:rand(-0.2,0.2), vy:rand(-0.2,0.2)})
      }

      function resize(){
        try {
          width = canvas.width = window.innerWidth
          height = canvas.height = window.innerHeight
        } catch (e) {
          console.warn('Resize failed:', e)
        }
      }
      window.addEventListener('resize', resize)

      let raf
      function draw(){
        try {
          ctx.clearRect(0,0,width,height)
          ctx.globalCompositeOperation = 'lighter'
          particles.forEach(p=>{
            p.x += p.vx; p.y += p.vy
            if(p.x<0) p.x = width
            if(p.x>width) p.x=0
            if(p.y<0) p.y = height
            if(p.y>height) p.y = 0

            ctx.beginPath()
            ctx.fillStyle = 'rgba(62,224,255,0.07)'
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
            ctx.fill()
          })
          raf = requestAnimationFrame(draw)
        } catch (e) {
          console.warn('Draw failed:', e)
          cancelAnimationFrame(raf)
        }
      }
      draw()

      return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
    } catch (e) {
      console.warn('AnimatedBackground initialization failed:', e)
    }
  },[])

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      {/* Floating code snippets */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div initial={{y:0}} animate={{y:[0,-16,0]}} transition={{duration:8, repeat: Infinity}} className="absolute left-10 top-20 glass p-3 rounded-md text-xs code-snippet opacity-80 floating">
          const greet = () =npm console.log('Hello, world!')
        </motion.div>

        <motion.div initial={{y:0}} animate={{y:[0,18,0]}} transition={{duration:10, repeat: Infinity}} className="absolute right-16 top-40 glass p-3 rounded-md text-xs code-snippet opacity-75 floating">
          import Tensor from 'neural-net';
        </motion.div>

        <motion.div initial={{y:0}} animate={{y:[0,-12,0]}} transition={{duration:9, repeat: Infinity}} className="absolute left-[40%] bottom-28 glass p-3 rounded-md text-xs code-snippet opacity-80 floating">
          &lt;Model epochs={50} /&gt;
        </motion.div>
      </div>
    </>
  )
}
