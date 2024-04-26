import './hero.scss'
import { motion } from 'framer-motion'
import { Link, animateScroll } from 'react-scroll'
import React from 'react'
const textVariant = {
    initial:{
        x:-500,
        opacity:0
    },

    animate:{
        x:0,
        opacity:1,
        transition:{
            duretion:1,
            staggerChildren:0.1
        }
    }
}

const slideVariant = {
    initial:{
        x:0,
        
    },

    animate:{
        x:"-220%",
        transition:{
           repeat:Infinity,
           repeatType:"mirror",
           duration:20,
        }
    }
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className='wrapper'>
            <motion.div className='textContainer' variants={textVariant} initial="initial" animate="animate">
                <motion.h2  variants={textVariant}>Patrick Abimbola</motion.h2>
                <motion.h1  variants={textVariant}>Front-End developer</motion.h1>
                <motion.div  variants={textVariant} className='button'>
                <Link to='portfolio' smooth={true} duration={300}>
                    <motion.button  variants={textVariant}>See the latest works</motion.button>
                </Link>
                <Link to='contact' smooth={true} duration={300}>
                    <motion.button  variants={textVariant}>Contact me</motion.button>
                </Link>
                </motion.div>

            </motion.div>

                
            <div className="imgContainer">
                <img className='emg' src='/pic.png'/>
            </div>
        </div>
        
        
      
    </div>
  )
}

export default Hero
