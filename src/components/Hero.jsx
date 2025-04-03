import React from 'react';
import Navbar from './Navbar';

function Home1() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section - Made fully responsive */}
      <section
        className="relative w-full h-screen min-h-[600px] md:h-[800px] lg:h-[1024px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dsu49fx2b/image/upload/v1742811205/ungde6wbrkudgwjmxvnm.png')`,
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content - Responsive positioning and sizing */}
        <div className="absolute w-full px-4 md:px-10 lg:px-20 bottom-20 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
          <div className="max-w-[1268px] mx-auto space-y-4 md:space-y-6 ">
            <h1 className="font-['Inter'] font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-[93px] 
                           leading-[1.2] tracking-tight text-white">
              Empowering Businesses
            </h1>
            <h4 className="font-['Inter'] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[58px] 
                           leading-[1.2] text-white">
              with Affordable Custom Tech Solutions
            </h4>
            <button className="mt-8 w-full max-w-[276px] h-14 md:h-16 bg-[#58F93B] rounded-full 
                              font-['Inter'] font-semibold text-lg md:text-xl tracking-wider text-black 
                              hover:bg-green-600 transition-colors duration-300">
              Start A Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home1;