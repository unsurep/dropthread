
import Image from "next/image";

const Hero2 = () => {
    return (
      <div>
        <div className="flex w-full justify-between py-12 px-[1rem]">
          {/* tee */}
          <div
            className="h-screen bg-no-repeat bg-cover bg-center w-100 flex items-end justify-center pb-8"
            style={{ backgroundImage: "url('/tee.png')" }}>

            {/* shop button */}
            <div className="flex flex-col justify-between gap-1 full ">
              <h1 className="text-white font-black text-xl tracking-[5px] text-center">Drop <br /> Shoulder Tee</h1>
              <button className="relative mx-auto px-6 py-3 bg-white w-fit font-semibold border-2 border-white overflow-hidden group rounded-full cursor-pointer">
                <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
                  Shop
                </span>
              </button>
            </div>
          </div>

          {/* sweat */}
           <div
            className="h-screen bg-no-repeat bg-cover bg-center w-100 flex items-end justify-center pb-8"
            style={{ backgroundImage: "url('/sweat.png')" }}>
                
            {/* shop button */}
            <div className="flex flex-col justify-between gap-1 full ">
              <h1 className="text-white font-black text-xl tracking-[5px]">Sweat Shirt</h1>
              <button className="relative mx-auto px-6 py-3 bg-white w-fit font-semibold border-2 border-white overflow-hidden group rounded-full cursor-pointer">
                <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
                  Shop
                </span>
              </button>
            </div>
          </div>

          {/* hoodie */}
          <div
            className="h-screen bg-no-repeat bg-cover bg-center w-100 flex items-end justify-center pb-8"
            style={{ backgroundImage: "url('/hoodie.png')" }}>
                
            {/* shop button */}
            <div className="flex flex-col justify-between gap-1 full ">
              <h1 className="text-white font-black text-xl tracking-[5px]">Hoodie</h1>
              <button className="relative mx-auto px-6 py-3 bg-white w-fit font-semibold border-2 border-white overflow-hidden group rounded-full cursor-pointer">
                <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
                  Shop
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* our values image display */}
        <div>
            <Image src='/section2.png' width={1000} height={1000} alt='image'  className="w-full"/>
        </div>



      </div>
    );



};
export default Hero2;