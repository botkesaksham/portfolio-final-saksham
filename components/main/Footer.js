import React from 'react'
import img from "@/public/cat.svg"
import { Socials } from '@/constants'

function Footer() {
  return (
    <>
    <div className=' bg-[#010b19] flex justify-between items-center h-[60px] md:mt-0 mt-56'>
       {/* <div>
        <a href="#about"><img src={img} className='h-[40px] w-[40px] ml-10' alt='cat' /></a>
       
       </div> */}

       <div className='text-white text-center ml-20 font-semibold'>
            <h1>Made with Love 🐾 <span className=' text-gray-500 mr-3 text-[13px]'>By Saksham Botke</span></h1>
       </div>

       <div>
       <div className="flex md:flex-row gap-5 mr-10">
          {Socials.map((social) => (
            <a href={social.WebUrl} target="_blank" rel="noopener noreferrer">
            <img
              key={social.key}
              src={social.src}
              alt={social.name}
              width={20}
              height={20}
            />
          </a>
          ))}
        </div>

       </div>
    </div>
    </>
  )
}

export default Footer