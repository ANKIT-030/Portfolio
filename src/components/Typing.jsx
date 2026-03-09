import React, { useState, useEffect } from 'react'

export default function Typing({ items = [], speed = 120 }){
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(()=>{
    if(index === items.length) return
    if(!reverse){
      if(subIndex <= items[index].length - 1){
        setTimeout(()=> setSubIndex(s => s + 1), speed)
      } else {
        setTimeout(()=> setReverse(true), 800)
      }
    } else {
      if(subIndex > 0){
        setTimeout(()=> setSubIndex(s => s - 1), 40)
      } else {
        setReverse(false)
        setIndex(i => (i + 1) % items.length)
      }
    }
  }, [index, subIndex, reverse, items, speed])

  useEffect(()=>{
    const t = setInterval(()=> setBlink(b => !b), 500)
    return ()=> clearInterval(t)
  },[])

  return (
    <span className="code-snippet">
      {items[index].substring(0, subIndex)}<span className="text-neon-blue">{blink ? '|' : ' '}</span>
    </span>
  )
}
