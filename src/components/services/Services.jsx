import React from 'react'
import './Services.scss'
import { motion } from 'framer-motion'  

const variants = {
    initial:{
        x:-300,
        y:100,
        opacity:0,
    },

    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}
const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer"  variants={variants}>
            <p>I focus on helping your brand grow <br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer"  variants={variants}>
            <div className="title">
                <img src='/people.webp' alt=''/>
                <h1>
                    <motion.b className='bee' whileHover={{color:"orange"}}>Unique</motion.b> ideas
                </h1>
            </div>
            <div className="title">
                <h1>For your <motion.b className="bee" whileHover={{color:"orange"}}>Business</motion.b></h1>
                <button>What i do</button>
            </div>
        </motion.div>
        <motion.div className="listContainer"  variants={variants}>
            <motion.div whileHover={{background:"lightgray", color:"black"}} className="box">
                <h2>Web design</h2>
                <p>
                  Creating captivating and conversion-focused websites that are visually stunning. I specialise in bringing your brand to life through seamless user interfaces.  
                </p>
            </motion.div>
            <motion.div whileHover={{background:"lightgray", color:"black"}} className="box">
                <h2>Web development</h2>
                <p>
                    With a keen eye for design and a passion for innovation, I specialize in the development of websites at a professional level, creating dynamic and responsive websites that stand out in today's digital world
                </p>
            </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services
