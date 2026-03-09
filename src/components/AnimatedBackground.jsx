import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

// Simple Canvas particle background and floating code snippets overlay
export default function AnimatedBackground(){
  const canvasRef = useRef(null)

  useEffect(()=>{
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight
    const particles = []

    function rand(min,max){ return Math.random()*(max-min)+min }
    for(let i=0;i<120;i++){
      particles.push({x:rand(0,width), y:rand(0,height), r:rand(0.5,1.8), vx:rand(-0.2,0.2), vy:rand(-0.2,0.2)})
    }

    function resize(){ width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)

    let raf
    function draw(){
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
    }
    draw()
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  },[])

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      {/* Floating code snippets */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div initial={{y:0}} animate={{y:[0,-16,0]}} transition={{duration:8, repeat: Infinity}} className="absolute left-10 top-20 glass p-3 rounded-md text-xs code-snippet opacity-80 floating">
          const greet = () => console.log('Hello, world!')
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
