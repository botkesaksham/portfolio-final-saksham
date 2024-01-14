import React from 'react';
import img from '@/public/cat.svg';
import Image from 'next/image';
import { Socials } from '@/constants';

function Footer() {
  return (
    <>
    <div className='md:pt-10 z-50 pt-44'>
      <div className=' bg-[#010b19] flex justify-between items-center md:h-[60px] md:mt-0 md:flex-row flex-col h-[150px] md:p-0 p-5'>
        <div>
          <a href="#about">
            <Image src={img} className='h-[40px] w-[40px] md:ml-10' alt='cat' />
          </a>
        </div>

        <div className='text-white md:ml-32 font-semibold m-0 text-left'>
          <h1>Made with Love 🐾 <span className=' text-gray-500 md:mr-3 md:text-[13px] '>By Saksham Botke</span></h1>
        </div>

        <div>
          <div className="flex md:flex-row gap-5 md:mr-10 md:visible" >
            {Socials.map((social, index) => ( 
              <a href={social.WebUrl} target="_blank" rel="noopener noreferrer" key={index}>
                <img
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
      </div>
    </>
  );
}

export default Footer;
