import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="flex justify-between px-[3rem] py-12">
      <div className="flex flex-col items-center justify-center mx-auto">
        <h1 className='py-8 font-black text-2xl tracking-[5px]'>Contact Us</h1>
        <form className='border-2 border-black flex flex-col gap-3 px-12 py-6 rounded-xl'>
          {/* Name */}
          <div className='flex flex-col'>
            <label>Name</label>
            <input placeholder="Full Name" type="text" className="outline-none border-2 border-black px-3 rounded py-1" />
          </div>

          {/* Email */}
          <div className='flex flex-col'>
            <label>Email</label>
            <input placeholder="Email" type="email" className="outline-none border-2 border-black px-3 rounded py-1" />
          </div>

          {/* Subject */}
          <div className='flex flex-col '>
            <label>Subject</label>
            <input placeholder="Subject" type="text" className="outline-none border-2 border-black px-3 rounded py-1" />
          </div>

          {/* Message */}
          <div>
            {/* <label>Name</label> */}
            <textarea className="textarea px-3 border-black rounded border-2 outline-none" placeholder="Message..."></textarea>
          </div>

          <div className=''>
            <button className="relative flex items-center justify-center mx-auto  px-6 py-3 bg-white font-semibold mt-8 border-2 border-black overflow-hidden group rounded-full cursor-pointer">
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>

      <div>
        <Image src="/logo.png" alt="logo" width={500} height={500} />
      </div>
    </div>
  );
}

export default Contact;
