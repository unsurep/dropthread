'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

const Hero1 = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToProducts = () => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/section1.png"
                    fill
                    alt="Drop Thread Fashion Background"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                {/* Animated hero text */}
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 " 
                        data-text="Drop the Ordinary">
                        Drop the Ordinary
                    </h1>
                    
                    <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
                        Welcome to Drop Thread, where fashion meets innovation. 
                        Discover exclusive streetwear that defines your unique style.
                    </p>
                </div>

                {/* CTA buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <button 
                        onClick={scrollToProducts}
                        className="group relative px-8 py-4 bg-white text-black font-bold text-lg border-2 border-white overflow-hidden rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hvr-float-shadow"
                    >
                        <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-400">
                            Shop Collection
                        </span>
                    </button>

                    <button className="group px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                        Explore Lookbook
                    </button>
                </div>

                {/* Social proof */}
                <div className={`mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
                        <div className="text-center">
                            <div className="text-2xl font-bold">10K+</div>
                            <div className="text-sm">Happy Customers</div>
                        </div>
                        <div className="w-px h-8 bg-white/30"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">500+</div>
                            <div className="text-sm">Unique Designs</div>
                        </div>
                        <div className="w-px h-8 bg-white/30"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">24/7</div>
                            <div className="text-sm">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
export default Hero1;