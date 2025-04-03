import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="w-full min-h-[screen] mx-auto px-4 py-16 flex justify-center bg-white">
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Heading */}
        <div className="relative w-full max-w-2xl mb-16 text-center">
          <h1 className="font-['Inter'] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 tracking-tight relative z-10">
            Welcome to <span className="text-[#58F93B]">Obiztec</span>
            <span className="absolute -top-3 -left-6 md:-top-4 md:-left-8 flex flex-col gap-1.5">
              <span className="bg-[#58F93B] w-4 h-4 rounded-full md:w-5 md:h-5"></span>
              <span className="bg-[#58F93B] w-2 h-2 rounded-full md:w-3 md:h-3"></span>
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto">
            Empowering your business with innovative digital solutions
          </p>
        </div>

        {/* Features Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Feature 1: Affordable Solutions */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#F5FFF2] to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6 rounded-xl bg-white shadow-md flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1743507259/goal_achievement_mission_business_success_finish_flag_target_icon_232591_1_2x_t8tzv3.png"
                  alt="Affordable Solutions Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h2 className="font-['Inter'] font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                Affordable Solutions
              </h2>
              <p className="font-['Inter'] text-gray-600 leading-relaxed mb-6">
                We offer affordable, top-tier website and app development solutions tailored for entrepreneurs and small businesses.
              </p>
              <div className="mt-auto w-full">
                <div className="h-1 w-16 mx-auto bg-[#58F93B] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Feature 2: Our Mission */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#F5FFF2] to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:mt-8">
            <div className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6 rounded-xl bg-white shadow-md flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742817506/gmhufcspmkjmokcokhpe.png"
                  alt="Our Mission Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h2 className="font-['Inter'] font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="font-['Inter'] text-gray-600 leading-relaxed mb-6">
                To empower entrepreneurs and small to medium-sized businesses with accessible, high-quality custom tech solutions that drive growth and success.
              </p>
              <div className="mt-auto w-full">
                <div className="h-1 w-16 mx-auto bg-[#58F93B] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Feature 3: Our Goal */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#F5FFF2] to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:mt-16">
            <div className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6 rounded-xl bg-white shadow-md flex items-center justify-center relative">
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1743655753/ud0ogaxncummjvxjqy37.png"
                  alt="Our Mission Icon"
                  className="w-12 h-12 object-contain"
                />
               
              </div>
              <h2 className="font-['Inter'] font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                Our Goal
              </h2>
              <p className="font-['Inter'] text-gray-600 leading-relaxed mb-6">
                We aim to bridge the digital gap by making custom tech solutions accessible and affordable, helping businesses boost their online presence and engagement.
              </p>
              <div className="mt-auto w-full">
                <div className="h-1 w-16 mx-auto bg-[#58F93B] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;