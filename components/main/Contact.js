"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CatCanvas from '../sub/CatCanvas';
import { motion } from 'framer-motion';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pzvsuoc', 'template_wmjx3jd', form.current, 'dzvesPOwfRDKXBKTo')
      .then(
        (result) => {
          toast.success('Message Sent Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('Error sending message', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div id="contact" className='pb-20'>
      <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:py-20 md:pb-20 pb-80">
        Contact Me
      </h1>
      <div className='flex justify-center items-center h-screen w-full'>
        <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden backdrop-blur-lg'>
          <div className='sm:flex-[0.75] bg-black-100 p-8 rounded-2xl text-white bg-gradient-to-r from-[#021631] to-[#030014] '>
            <p className='text-xl font-semibold text-gray-600 pb-1'>Get in touch</p>
            <h3 className='text-5xl font-bold'>Contact</h3>

            <form
              ref={form}
              className='mt-12 flex flex-col sm:gap-8 text-white md:w-[400px] gap-8'
              onSubmit={sendEmail}
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                  type='text'
                  name='user_name'
                  placeholder="What's your good name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your email</span>
                <input
                  type='email'
                  name='user_email'
                  placeholder="What's your web address?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea
                  rows={7}
                  name='message'
                  placeholder='What you want to say?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button
                type='submit'
                className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'
              >
                Send
              </button>
            </form>
          </div>

          <motion.div className='xl:flex-1 xl:h-auto md:h-full md:w-[450px] h-[350px] w-[300px] flex justify-center items-center mx-auto'>
            <CatCanvas />
          </motion.div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Contact;