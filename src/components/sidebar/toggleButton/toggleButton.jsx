import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const ToggleButton = ({setOpen}) => {
  const [izopen, setIzopen] = useState(false)

  const handleBut = () =>{
    setOpen((prev) =>!prev)
    setIzopen(prev => !prev)

  }

  
  return (
   <button onClick={handleBut}>
   {!izopen? <CiMenuBurger style={{ width:'20px', height:'20px'}}/> : <IoMdClose style={{ width:'15px', height:'15px'}}/>}
   </button>
  )
}

export default ToggleButton
