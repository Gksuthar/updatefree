import React from 'react';

const WhyChooseObiztec = () => {
  const reasons = [
    {
      title: "Affordable & Scalable Solutions",
      description: "Cost-effective tech solutions that grow with your business needs.",
      icon: "https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816699/a9d9nzqe4j0fpjtzvhky.png"
    },
    {
      title: "Custom Development",
      description: "Tailored websites and apps designed to meet your unique requirements.",
      icon: "https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816699/a9d9nzqe4j0fpjtzvhky.png"
    },
    {
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality or functionality.",
      icon: "https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816699/a9d9nzqe4j0fpjtzvhky.png",
      indent: "md:pl-[72px]"
    },
    {
      title: "Post-Launch Support",
      description: "Ongoing maintenance and support to ensure your tech runs smoothly.",
      icon: "https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816699/a9d9nzqe4j0fpjtzvhky.png"
    },
    {
      title: "Proven Expertise",
      description: "A team experienced in web development, marketing, and app design.",
      icon: "https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816699/a9d9nzqe4j0fpjtzvhky.png",
      fullWidth: true
    }
  ];

  return (
<div className="min-h-screen lg:h-[1500px] overflow-hidden p-0 m-0">
     
    <section className="w-full mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Header - Responsive */}
      <div className="relative flex justify-center items-center mb-6 md:mb-12">
        <h1 className="font-['Inter'] font-normal text-3xl md:text-4xl lg:text-[56.4px] 
                       leading-[1.2] md:leading-[68.4px] tracking-[-0.005em] 
                       text-black text-center mt-5 mb-8 md:mb-12">
          Why Choose Obiztec
        </h1>
        <div className="hidden md:block absolute md:right-[25%] lg:right-[22%] 
                        md:top-1/2 lg:top-[60px] -translate-y-1/2">
          <div className="w-12 h-12 lg:w-24 lg:h-24 rounded-full flex items-center 
                         justify-center ">
            <svg 
              className="w-6 h-6 lg:w-12 lg:h-12"
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM15.07 9.25C14.86 9.92 14.4 10.47 13.74 10.79C13.24 11.03 12.5 11.25 12 11.43V12H11V11.43C11.5 11.25 12.24 11.03 12.74 10.79C13.4 10.47 13.86 9.92 14.07 9.25C14.28 8.58 14.22 7.89 13.89 7.28C13.56 6.67 12.95 6.25 12.18 6.07C11.41 5.89 10.63 6.07 9.93 6.57C9.23 7.07 8.76 7.83 8.54 8.75H7.5C7.72 7.58 8.24 6.53 9.07 5.75C9.9 4.97 10.95 4.5 12 4.5C13.05 4.5 14.1 4.97 14.93 5.75C15.76 6.53 16.28 7.58 16.5 8.75C16.72 8.92 16.5 9.08 15.07 9.25Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Image Section - Responsive */}
      <div className="relative w-full h-auto md:h-[540px] mb-6 md:mb-12">
        {/* Mobile Single Image */}
        <div className="block md:hidden w-full h-64 rounded-lg overflow-hidden">
          <img 
            src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742811703/erz49zumffusdcvzhglg.png" 
            alt="Obiztec Team Working" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Desktop Image Composition */}
        <div className="hidden md:block">
          <div className="absolute w-[60%] h-[420px] left-[20%] top-[15%] border-3 border-[#58F93B] rounded-[11px] z-10"></div>
          <div className="absolute w-[50%] max-w-[660px] h-[470px] left-[80px] top-0 rounded-[11px] overflow-hidden z-30">
            <img 
              src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742811703/erz49zumffusdcvzhglg.png" 
              alt="Obiztec Team Working" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-[45%] max-w-[660px] h-[460px] right-[120px] top-[120px] rounded-[11px] overflow-hidden z-20">
            <img 
              src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742811703/pv0wojpb2ygptc3imljs.png" 
              alt="Obiztec Development" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Reasons Section - Responsive */}
      <div className="mt-2 md:mt-[100px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-8 md:gap-y-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`
                flex items-start
                ${reason.fullWidth ? 'md:col-span-2 flex justify-center gap-4' : ''}
              `}
            >
              {/* Icon - Responsive Sizing */}
              <div className="w-6 h-6 md:w-[30px] md:h-[30px] mr-3 md:mr-4 mt-1 md:mt-[10px] flex-shrink-0">
                <img 
                  src={reason.icon} 
                  alt="Checkmark" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Text Content - Responsive Typography */}
              <div className={`${reason.fullWidth ? 'max-w-2xl' : 'w-full'}`}>
                <h3 className="font-['Inter'] font-normal text-xl md:text-2xl lg:text-[28.8px] 
                               leading-[1.3] md:leading-[38.4px] tracking-[0.25px] 
                               text-black mb-1">
                  {reason.title}
                </h3>
                <p className="font-['Inter'] font-normal text-base md:text-lg lg:text-[19.2px] 
                             leading-[1.5] md:leading-[28.8px] text-black">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
  );
};

export default WhyChooseObiztec;