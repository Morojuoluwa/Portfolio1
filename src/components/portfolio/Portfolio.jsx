import React, { useRef } from 'react'
import './portfolio.scss'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const Portfolio = () => {
    const items = [
        {
            id:1,
            title:"merch store",
            img: "https://images.pexels.com/photos/18156147/pexels-photo-18156147/free-photo-of-woman-wearing-wedding-dress-sitting-on-concrete-block.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repudiandae cumque debitis magnam deserunt asperiores ipsa optio dignissimos incidunt facere."
        },

        {
            id:2,
            title:"ecommerce",
            img: "https://images.pexels.com/photos/15045040/pexels-photo-15045040/free-photo-of-man-standing-on-a-beach-in-a-suit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repudiandae cumque debitis magnam deserunt asperiores ipsa optio dignissimos incidunt facere."
        },

        {
            id:3,
            title:"movie rating app",
            img: "https://images.pexels.com/photos/14894306/pexels-photo-14894306.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repudiandae cumque debitis magnam deserunt asperiores ipsa optio dignissimos incidunt facere."
        }
    ]

    const Single = ({item}) =>{

        const ref = useRef()

        const {scrollYProgress} = useScroll({
            target:ref,
            // offset:["start start", "end end"]
        })

        const y = useTransform(scrollYProgress, [0,1], [-200,160])
        return <section>
            <div className="container" >
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                         <img src={item.img} alt=''/> 
                    </div>
                  

                    <motion.div className="textContainer"style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>see demo</button>
                    </motion.div>
                </div>
                
            </div>
        </section>
    }

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref, offset:["end end", "start start"]
    })

const scaleX = useSpring(scrollYProgress, {
    stiffness:100,
    damping:30
})
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress" >
            <h1>Featured works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
       
            {items.map((item) =>(
                <Single item={item} key={item.id}/>
            ))}
    </div>
  )
}

export default Portfolio
