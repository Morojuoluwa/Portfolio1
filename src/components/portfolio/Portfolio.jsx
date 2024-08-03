import React, { useRef } from 'react'
import './portfolio.scss'
import { Link } from 'react-router-dom'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const Portfolio = () => {
    const items = [
        {
            id:1,
            title:"Admin Dashboard",
            img: "https://demos.pixinvent.com/vuexy-angular-admin-template/landing/img/bg-img/dark.jpg",
            desc:"This is an Admin Dashboard built with React js, tailwind css, framer-motion and recharts. The dasboard shows interactive charts and graphs for data insight. It also tracks and displays key performance indicators.",
            path: "https://admindashboard-livid.vercel.app/"
        },
        {
            id:2,
            title:"IMDb clone",
            img: "https://cdn.geekwire.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-13-at-8.30.23-AM.png",
            desc: "This is an IMDB clone web application built with Next js, Tailwind CSS, and the Movie Database API. It seeks to imitate the essential features and layout of IMDb, enabling users to explore and search for movies, view information about individual films, and find trending and top rated movies.",
            path: "https://imdb-clone-zdqrs.vercel.app/"
        },
        
        {
            id:3,
            title:"Gemini Clone",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_98J90IpOcv9fo2Cxk5pcrdgLrZw-5EaX_g&s",
            desc: "This project is a clone of Gemini, an artificial intelligence chatbot, built with React js, tailwind css, context api, swiper js, and Gemini Api. This app, powered by gemini API, provides a personalized assistance and conversational interface to users",
            path:"https://gemini-sigma-puce.vercel.app/"

           
        },

        {
            id:4,
            title:"Nike Landing Page",
            img: "https://cdn.dribbble.com/users/3496468/screenshots/17614059/nike_landing_page_concept.png",
            desc: "Built this Nike landing page with  react js, tailwind css and framer-motion.",
            path:"https://nike-landing-page-psi-two.vercel.app/"
        },

        {
            id:5,
            title: "Youtube Clone",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vHYjHhrB5lAx7KnOgTmJLSvqSgBq9j0r-Q&s",
            desc:"This is a YouTube clone web application built with React, Tailwind CSS, and the YouTube Data API. The project allows users to watch videos, select different video categories, and view video details such as likes, views, and comments.",
            path:"https://youtube-five-gamma.vercel.app/"
        },

        {
            id:6,
            title: "Gadget Store",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-Pkocjdkl19-YFEa45dFpqR14m3dV_azGQ&s",
            desc: "Built this Ecommerce website with React js, TailwindCss, Redux and framer motion. This web app allows users to have access to a variety of elctronic gadgets, add items and remove items from cart and a checkout process was also implemented",
            path:"https://sp-gadget-store.vercel.app/"
        }

    ]

    const Single = ({item}) =>{
    //     const handleClick = () => {
    //     window.location.href = item.path; // Redirect to the specified URL
    // };

        return <section>
            <div className="container" >
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                         <img src={item.img} alt=''/> 
                    </div>
                  

                    <motion.div className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <Link to={item.path}>
                            <button>see demo</button>
                        </Link>
                        
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
    <div className='portfolio' id='portfolio' ref={ref}>
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
