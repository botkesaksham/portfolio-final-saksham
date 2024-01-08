import React from 'react';
import img from '@/public/seksom bg trimmed.png';
import Image from 'next/image';
import { Socials } from '@/constants';

export default function About() {
  return (
    <div id="about" className='pt-28'>
      <div className='relative md:w-full md:justify-center md:h-full md:flex md:pt-0 md:flex-row text-white w-full p-14'>
        <div className='md:w-80 md:flex md:flex-col z-30'> 
          <h1 className='md:text-4xl md:text-left md:pt-16 font-bold text-[2rem] text-gray-400'>Hi, my name is</h1>
          <h1 className='md:text-[95px] md:text-left md:pt-5 text-[3rem] leading-[45px] pt-4 font-semibold md:pb-24 md:leading-[100px]'>SAKSHAM BOTKE</h1>
        </div>

        <div>
          <Image
            src={img}
            alt="logo"
            className="md:pt-8 md:pb-0 md:w-[600px] md:h-[500px] pt-7 pb-12"
          />
        </div>

        <div className='md:w-80 md:pt-12 font-semibold flex'>
          <div className='w-[3px] h-[300px] bg-white'></div>
          <div className='pl-5'>
            <p className='text-justify'>I'm a prefinal Engineering student who is deeply passionate about Web Development and the transformative potential of technology. Soon to be an Information Technology professional with a Bachelor of Technology from SRM University. Let&apos;s connect to explore the dynamic world of tech and design together!</p>
            <div className="flex flex-row gap-5 pt-5">
              {Socials.map((social,index) => (
                <a href={social.WebUrl} target="_blank" rel="noopener noreferrer" key={index}>
                  <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={30}
                    height={30}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
