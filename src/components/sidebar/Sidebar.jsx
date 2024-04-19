import React, { useState } from 'react'
import './sidebar.scss'
import Leenk from './Leenk/Leenk'

import { motion } from 'framer-motion'
import ToggleButton from './toggleButton/toggleButton'

const Sidebar = () => {

  const [open, setOpen] = useState(false)

  const variants = {
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transittion:{
        type:"spring",
        stiffness:20
      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness:400,
        damping:40,
      },
    },
  }
  return ( 
    <motion.div className='sidebar' animate={open? "open":"closed"}>
      <motion.div className='bg' variants={variants}>
        <Leenk/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
      
    </motion.div>
  )
}

export default Sidebar
