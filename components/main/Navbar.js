"use client"
import React,{useState} from 'react'
import {AiFillMail, AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai"


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className=" flex text-white w-full h-[80px] fixed top-0 z-50 md:justify-between items-center backdrop-blur-md p-11">
        <h1 className=" font-light text-gray-400 text-2xl md:px-0 md:py-5 cursor-pointer px-0">PORTFOLIO</h1>
        <ul className="hidden md:flex h-[50px] items-center w-[500px] justify-between border border-white bg-[#0300145e] rounded-full text-gray-200 font-extralight">
        <li><a href="#about" className="cursor-pointer ease-in duration-200 focus:bg-white focus:ring-1 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              About Me
            </a></li>
            <li><a href="#experience" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Experience
            </a></li>
            <li><a href="#skills" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[30px] py-[15px] ">
              Skills
            </a></li>
            <li><a href="#projects" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Projects
            </a></li>

           
        </ul>
        <div className='flex items-center justify-center md:visible collapse'>   
        <a href="#contact" className="cursor-pointer text-gray-400 font-light flex items-center justify-center md:visible collapse">   
        <AiOutlineMail size={30}/>
         <span className="pl-2">GET IN TOUCH</span>
</a>

        </div>

        <div onClick={handleNav} className="md:hidden">
            {!nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/> }
        </div>
        <div className={!nav ? "fixed left-[-100%]" : "fixed top-0 left-0 w-[60%] h-[1000px] border border-l-gray-900 bg-[#030014] duration-700 md:hidden z-40" }>
        <ul className=" pt-16 uppercase pr-4 backdrop-blur-md">
        <li className="p-4 pl-8 text-xl border-b border-gray-600"><a href="#about" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px] active:bg-white active:rounded-full">
              About Me
            </a></li>
            <li className="p-4 pl-8 text-xl border-b border-gray-600"><a href="#experience" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Experience
            </a></li>
            <li className="p-4 pl-8 text-xl border-b border-gray-600"><a href="#skills" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[30px] py-[15px] ">
              Skills
            </a></li>
            <li className="p-4 pl-8 text-xl border-b border-gray-600"><a href="#projects" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Projects
            </a></li>
          <li className="p-4 pl-8 text-xl border-b border-gray-600"><a href="#contact" className="cursor-pointer ease-in duration-200  hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Contact
            </a></li>
        </ul>
        </div>
    </div>
  )
    

    
}

export default Navbar
