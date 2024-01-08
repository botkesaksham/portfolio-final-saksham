"use client"
import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className=" flex text-white w-full h-[80px] fixed top-0 z-50 md:px-10 md:justify-between items-center backdrop-blur-md px-14">
        <h1 className=" font-semibold text-gray-400 text-2xl md:px-10 md:py-5 cursor-pointer px-0 pr-36">PORTFOLIO</h1>
        <ul className="hidden md:flex h-[50px] items-center w-[550px] justify-between border border-white bg-[#0300145e] rounded-full text-gray-200 mr-[22rem]">
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
          <li><a href="#contact" className="cursor-pointer ease-in duration-200  hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Contact
            </a></li>
           
        </ul>

        <div onClick={handleNav} className="md:hidden">
            {!nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/> }
        </div>
        <div className={!nav ? "fixed left-[-100%]" : "fixed top-0 left-0 w-[70%] h-[1000px] border border-r-gray-900 backdrop-blur-md duration-700 md:hidden z-40" }>
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
            {/* <li className="p-3 pl-6 text-xl border-b border-gray-600">Home</li>
            <li className="p-3 pl-6 text-xl border-b border-gray-600">Company</li>
            <li className="p-3 pl-6 text-xl border-b border-gray-600">Resources</li>
            <li className="p-3 pl-6 text-xl border-b border-gray-600">About</li>
            <li className="p-3 pl-6 text-xl">Contact</li> */}
        </ul>


        </div>
    </div>
  )
    

    
}

export default Navbar

// "use client"
// import React,{useState} from "react";
// import Image from "next/image";
// import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

// const Navbar = () => {
//   const [nav, setNav] = useState(false)

//   const handleNav=()=>{
//       setNav(!nav)
//   }
//   return (
//     <>
//     <div className="w-full h-[70px] fixed top-0  backdrop-blur-md z-50 px-10">
//       <div className="w-full h-[70px] flex flex-row items-center justify-center m-auto px-[10px]">
//         <div className="w-[600px] h-[70px] flex flex-row items-center justify-between">
//           <div className="flex items-center justify-between w-full h-[80px] border border-white bg-[#0300145e] rounded-full text-gray-200">
//             <a href="#about" className="cursor-pointer ease-linear hover:text-black hover:bg-white hover:rounded-full px-5 py-px">
//               About Me
//             </a>
//             <a href="#experience" className="cursor-pointer  hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[10px]">
//               Experience
//             </a>
//             <a href="#skills" className="cursor-pointer hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[10px] ">
//               Skills
//             </a>
//             <a href="#projects" className="cursor-pointer hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[10px] ">
//               Projects
//             </a>
//             <a href="#contact" className="cursor-pointer  hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[10px]">
//               Contact
//             </a>
//           </div>
//         </div>
//         </div>

//       </div>

//       {/* <div onClick={handleNav} className="block md:hidden pr-5">
//       {!nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/> }
//       </div>

//       <div className={!nav ?"fixed left-[-100%]" : "fixed top-0 left-0 w-[70%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-700 md:hidden" }>
//         <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
//           <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
//             <a href="#about" className="cursor-pointer hover:text-[17px]">
//               About me
//             </a>
//             <a href="#experience" className="cursor-pointer hover:text-[17px]">
//               Experience
//             </a>
//             <a href="#skills" className="cursor-pointer hover:text-[17px]">
//               Skills
//             </a>
//             <a href="#projects" className="cursor-pointer hover:text-[17px]">
//               Projects
//             </a>
//             <a href="#contact" className="cursor-pointer hover:text-[17px]">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>



//     </div> */}
// </>
//   );
// };

// export default Navbar;