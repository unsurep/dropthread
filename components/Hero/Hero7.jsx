import React from 'react'

const Hero7 = () => {
  return (
    <div className='h-auto py-20 w-full bg-no-repeat bg-cover bg-center items-center flex flex-col justify-center' style={{backgroundImage: "url('/gradient.svg')"}}>
      <h1 className='font-black text-white text-2xl sm:text-3xl md:text-4xl tracking-[2px] text-center'>20% OFF SELECT STYLES</h1>
      <h2 className='text-white text-xl sm:text-2xl md:text-3xl uppercase tracking-[8px] sm:tracking-[12px] md:tracking-[16px] text-center'>Drop Threads</h2>
      <h3 className='text-white text-lg sm:text-xl md:text-xl tracking-[5px] text-center'>EXCLUSIONS APPLY. LIMITED TIME ONLY.</h3>

      <div className='flex flex-col sm:flex-row gap-5'>
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
