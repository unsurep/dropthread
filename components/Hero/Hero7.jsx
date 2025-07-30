import React from 'react'

const Hero7 = () => {
  return (
    <div className='h-screen w-full bg-no-repeat bg-cover bg-center items-center flex flex-col justify-center' style={{backgroundImage: "url('/gradient.svg')"}}>
      <h1 className='font-black text-white text-4xl tracking-[2px]'>20% OFF SELECT STYLES</h1>
      <h2 className='text-white text-3xl uppercase tracking-[16px]'>Drop Threads</h2>
      <h3 className='text-white text-xl tracking-[5px]'>EXCLUSIONS APPLY. LIMITED TIME ONLY.</h3>

      <div className='flex gap-5'>
        <button className="relative px-6 py-3 bg-white font-semibold mt-8 border-2 border-white overflow-hidden group rounded-full cursor-pointer">
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
                Shop Tee
              </span>
        </button>


        <button className="relative px-6 py-3 bg-white font-semibold mt-8 border-2 border-white overflow-hidden group rounded-full cursor-pointer">
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
                Shop Sweat
              </span>
        </button>

        <button className="relative px-6 py-3 bg-white font-semibold mt-8 border-2 border-white overflow-hidden group rounded-full cursor-pointer">
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
                Shop Hoodie
              </span>
        </button>
      </div>
    </div>
  )
}

export default Hero7
