'use client'
import Image from "next/image";




const Hero1 = () => {
    return (
      <>
        <div className="h-screen w-full bg-no-repeat bg-cover bg-center pt-16 relative" style={{backgroundImage: "url('/section1.png')"}}>
          {/* <Image
            src="/section1.png"
            width={1000}
            height={1000}
            alt="image"
            className="w-full"
          /> */}

          {/* Drop the ordinary */}
          <div className="flex flex-col py-12 lg:pt-[10rem] text-white items-center justify-center">
            <h1 className="font-black text-6xl glitch" data-text="Drop the Ordinary">Drop the Ordinary</h1>
            <p className="text- font-semibold pt-2">
              Welcome to Drop Thread, the ultimate destination for fashion
              enthusiasts and trendstters.
            </p>

            {/* shop button */}
            <button className="relative px-6 py-3 bg-white font-semibold mt-8 border-2 border-white overflow-hidden group rounded-full cursor-pointer">
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
                Shop
              </span>
            </button>
          </div>
        </div>
      </>
    );


};
export default Hero1;