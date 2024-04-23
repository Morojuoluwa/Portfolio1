import React from 'react'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from 'react-scroll'
const Leenk = () => {

  const items =[

    {
      id: "homepage",
      name:"Homepage",
    },

    {
      id:"services",
   
      name:"Services"
    },

    {
      id:"portfolio",
      name:"portfolio"
    },
    {
      id:"contact",
      name:"Contact"
    },

    {
      id:"about",
      name:"About"
    }
    
  ]
  const variants = {
    open:{
      transition:{
        staggerChildren:0.1
      },
    },
    closed:{
      transition: {
        staggerChildren:0.05,
        staggerDirection: -1
      }
    }

    
  }

  const itemVariants = {
    open:{
        y:0,
        opacity:1
      },

    closed:{
      y:50,
      opacity:0
      
      }
    
  }
  return (
    <motion.div className='links' variants={variants}>
      {items.map((item)=>(
        <Link to={item.id} smooth={true} duration={300} >
          <motion.p style={{cursor:"pointer"}} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item.name}
        </motion.p>
        </Link>
        
      ))}
    </motion.div>
  )
}

export default Leenk
