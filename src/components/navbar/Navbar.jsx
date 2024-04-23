import './navbar.scss'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>

        <div className="wrapper">
            <motion.h2 initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Alpha_codes</motion.h2>
            <div className='social'>
                <Link to="https://twitter.com/Amorojuoluwa">
                 <BsTwitterX size={14}/>
                </Link>
                <Link to="https://github.com/Morojuoluwa">
                  <FaGithub size={14}/>
                </Link>
                <Link to="https://www.linkedin.com/in/patrick-morojuoluwa">
                   <BsLinkedin size={14}/>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
