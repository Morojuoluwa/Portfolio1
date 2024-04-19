import './navbar.scss'
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>

        <div className="wrapper">
            <motion.h2 initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Alpha_codes</motion.h2>
            <div className='social'>
                <BsTwitterX size={12}/>
                <SiGmail size={12}/>
                <BsLinkedin size={12}/>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
