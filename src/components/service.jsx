import React from 'react';

const Services = () => {
  return (
    <div className="w-full mt-[100px] md:mt-[600px] lg:mt-[200px]">
      <section className="relative w-full max-w-[100vw] mx-auto bg-[#091906] border-2 border-[#58F93B] rounded-[11px] py-12 px-6 md:px-20 lg:py-14 lg:px-20 box-border">
        {/* Heading Container */}
        <div className="relative w-[321px] max-w-full h-[57.22px] mb-12">
          <h2 className="font-['Inter'] font-normal text-[47px] leading-[57px] tracking-[-0.005em] text-white w-[293px]">
            Our Services
          </h2>
          <div className="absolute top-0 left-[293px] w-7 h-6 bg-[#58F93B] clip-polygon-[0_0,100%_0,100%_100%,0_50%]" />
        </div>

        {/* Services Content */}
        <div className="relative w-full max-w-[100vw] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          {/* Services List */}
          <div className="w-full max-w-[586px] space-y-10  ">
            {/* Service 1: Website Development */}
            <div className="flex items-center justify-start">
              <div className="relative flex-shrink-0 mr-[30px] w-10 h-10">
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816395/xvtnswiem3sgtowkpbhy.png"
                  alt="Website Development Icon"
                  className="absolute bottom-0 right-0 w-6 h-6"
                />
              </div>
              <div>
                <h3 className="font-['Inter'] font-normal text-[23px] leading-8 text-white">
                  Website Development
                </h3>
                <p className="font-['Inter'] font-normal text-base leading-6 text-white mt-1">
                  Custom, responsive websites for a strong online presence.
                </p>
              </div>
            </div>

            {/* Service 2: E-Commerce Solutions */}
            <div className="flex items-center">
              <div className="relative flex-shrink-0 mr-[30px] w-10 h-10">
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816417/s46wz4fjfunr3pvtsglx.png"
                  alt="E-Commerce Icon"
                  className="absolute bottom-0 right-0 w-6 h-6"
                />
              </div>
              <div>
                <h3 className="font-['Inter'] font-normal text-[23px] leading-8 text-white">
                  E-Commerce Solutions
                </h3>
                <p className="font-['Inter'] font-normal text-base leading-6 text-white mt-1">
                  Secure and user-friendly online stores with integrated payments.
                </p>
              </div>
            </div>

            {/* Service 3: Mobile App Development */}
            <div className="flex items-center">
              <div className="relative flex-shrink-0 mr-[30px] w-10 h-10">
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816419/bwd6f1zkecortqncr16r.png"
                  alt="Mobile App Icon"
                  className="absolute bottom-0 right-0 w-5 h-[34px]"
                />
              </div>
              <div>
                <h3 className="font-['Inter'] font-normal text-[23px] leading-8 text-white">
                  Mobile App Development
                </h3>
                <p className="font-['Inter'] font-normal text-base leading-6 text-white mt-1">
                  High-quality iOS & Android apps for better engagement.
                </p>
              </div>
            </div>

            {/* Service 4: SEO & Digital Marketing */}
            <div className="flex items-center">
              <div className="relative flex-shrink-0 mr-[30px] w-10 h-10">
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816403/avlzkiiwe6cxpmpxfbev.png"
                  alt="SEO Icon"
                  className="absolute bottom-0 right-0 w-6 h-6"
                />
              </div>
              <div>
                <h3 className="font-['Inter'] font-normal text-[23px] leading-8 text-white">
                  SEO & Digital Marketing
                </h3>
                <p className="font-['Inter'] font-normal text-base leading-6 text-white mt-1">
                  Boost visibility, attract traffic, and increase conversions.
                </p>
              </div>
            </div>

            {/* Service 5: Branding & Design */}
            <div className="flex items-center">
              <div className="relative flex-shrink-0 mr-[30px] w-10 h-10">
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816419/kfkmkpmjj4keqzhjz6m3.png"
                  alt="Branding Icon"
                  className="absolute bottom-0 right-0 w-[30px] h-[30px]"
                />
              </div>
              <div>
                <h3 className="font-['Inter'] font-normal text-[23px] leading-8 text-white">
                  Branding & Design
                </h3>
                <p className="font-['Inter'] font-normal text-base leading-6 text-white mt-1">
                  Professional logos, brand identity, and UI/UX design.
                </p>
              </div>
            </div>
          </div>

          {/* Services Image */}
          <div className="relative w-full max-w-[629.23px] h-[520px] md:h-[520px] border-2 border-[#58F93B] rounded-[20px] shadow-[0_9px_16px_-10px_#DEFED8]">
            <img
              src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742811202/vpiajuw2bvzdxhgy7xnn.png"
              alt="Services Illustration"
              className="absolute top-[35px] right-[40px] h-[90%] w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;