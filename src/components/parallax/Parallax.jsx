import React, { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({type}) => {
const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
  return (
    <div ref={ref} className='parallax' style={{background: type==="services"? "linear-gradient(180deg, #111132, #0c0c1d)":"linear-gradient(180deg, #111132, #505064)"}}>
      <motion.h1 style={{y:yBg}}>{type === "services"? "Services": "What we do"}</motion.h1>
      <motion.div className='mountains'>
      </motion.div>
      <motion.div className='planets'></motion.div>
      <motion.div className='stars'></motion.div>
      
    </div>
  )
}

export default Parallax