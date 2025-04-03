import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#091906] text-white '>
      {/* Get Started Today Section */}
      <div className="relative w-full flex justify-center z-[100px]">
    <section className="hidden sm:block absolute lg:-top-[180px] md:-top-[180px]  max-w-[90vw] sm:max-w-[95vw] md:max-w-[855px] w-full h-[300px] sm:h-[330px] md:h-[354px] mx-auto bg-[#EEFEEB] rounded-[11px] p-6 md:p-8 lg:p-10 flex flex-col justify-center items-start">          {/* Heading */}
          <h2 className="font-['Inter']  font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[40px] lg:leading-[44px] text-[#0A3403] mb-8">
            Get Started Today!
            <span className="inline-block w-2 h-2 bg-[#58F93B] ml-2" />
          </h2>

          {/* Contact Details */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center">
              <div className="w-6 h-6 mr-4">
                {/* Replace with your envelope icon */}
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1743660302/okbepubibnuar1cc0ncu.png"
                  alt="Email Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-['Inter'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-[#0A3403]">
                Email: contact@obiztec.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <div className="w-6 h-6 mr-4">
                {/* Replace with your phone icon */}
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1743660302/axii5wxlxq64ftcleerp.png"
                  alt="Phone Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-['Inter'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-[#0A3403]">
                Phone: +1 (325) 275-5589
              </p>
            </div>

            {/* Website */}
            <div className="flex items-center">
              <div className="w-6 h-6 mr-4">
                {/* Replace with your globe icon */}
                <img
                  src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1743660302/vabrljnasmikjpgd0yrb.png"
                  alt="Website Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-['Inter'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-[#0A3403]">
                Website: www.obiztec.com
              </p>
            </div>
          </div>

          {/* Plane Icon */}
          <div className="absolute top-1/2 right-20 transform -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 lg:w-42 lg:h-42">
            {/* Replace with your plane icon */}
            <img
              src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1743658588/bb5jtq9xesfus51r8giv.png"
              alt="Plane Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </section>
      </div>

      {/* Main Footer Content */}
      <footer className="w-full mt-[10px] sm:mt-[200px] pt-[50px] font-['Inter'] pb-8">        {/* Footer Columns */}
        <div className="max-w-[100vw] mx-auto px-5 flex flex-wrap justify-between">
          {/* Column 1: Company Info */}
          <div className="w-[388px] mb-10">
            <div className="text-[40px] font-bold mb-5">Obiztec</div>
            <h3 className="text-[19px] font-normal leading-[27px] tracking-[0.25px] mb-5">
              Empowering Businesses with Affordable Custom Tech Solutions
            </h3>
            <h4 className="text-[23px] font-normal leading-[32px] text-[#eefeeb] mt-[50px] mb-[15px]">
              Supported Tech Stacks
            </h4>
            <p className="text-[16px] font-normal leading-[24px] tracking-[0.5px] mb-[10px] mt-[26px]">
              Flutter, .NET, Node.js, React, Next.js, Vue.js, JavaScript, PHP Laravel and more.
            </p>
            <p className="text-[16px] font-normal leading-[24px] tracking-[0.5px]">
              Contact us about other tech stacks not mentioned.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-[206px] mb-10">
            <h2 className="text-[33px] font-normal leading-[44px] tracking-[0.25px] mb-5">
              Quick Links
            </h2>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Approach', 'Pricing', 'Portfolio', 'Blog', 'FAQs', 'Get a Quote'].map((item) => (
                <li key={item} className="text-[16px] font-normal leading-[24px] tracking-[0.5px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="w-[218px] mb-10">
            <h2 className="text-[33px] font-normal leading-[44px] tracking-[0.25px] mb-5">
              Services
            </h2>
            <ul className="space-y-4">
              {[
                'Email Marketing', 'Newsletter Management', 'Web Development',
                'E-Commerce Development', 'SEO Services', 'Social Media Management',
                'Google Ads', 'Branding & Design', 'Website Maintenance'
              ].map((item) => (
                <li key={item} className="text-[16px] font-normal leading-[24px] tracking-[0.5px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="w-[277px] mb-10">
            <h2 className="text-[33px] font-normal leading-[44px] tracking-[0.25px] mb-5">
              Legal & Policies
            </h2>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Refund Policy', 'Cookie Policy', 'Service Agreement'].map((item) => (
                <li key={item} className="text-[16px] font-normal leading-[24px] tracking-[0.5px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="w-[481px] mb-10">
            <ul className="space-y-4">
              <li className="flex items-center text-[16px] font-normal leading-[24px] tracking-[0.5px]">
                <span className="text-[#58F93B] mr-2">📍</span>
                Address: 5900 Balcones Drive #24285, Austin, TX 78731
              </li>
              <li className="flex items-center text-[16px] font-normal leading-[24px] tracking-[0.5px]">
                <span className="text-[#58F93B] mr-2">📧</span>
                Email: contact@obiztec.com
              </li>
              <li className="flex items-center text-[16px] font-normal leading-[24px] tracking-[0.5px]">
                <span className="text-[#58F93B] mr-2">📞</span>
                Phone: +1 (325) 275-5589
              </li>
              <li className="flex items-center text-[16px] font-normal leading-[24px] tracking-[0.5px]">
                <span className="text-[#58F93B] mr-2">🌐</span>
                Live Chat: Available
              </li>
            </ul>
          </div>

          {/* Column 6: Social Media */}
          <div className="w-[180px] mb-10">
            <h2 className="text-[33px] font-normal leading-[44px] tracking-[0.25px] mb-5">
              Follow Us
            </h2>
            <div className="flex gap-5">
              <span className="w-9 h-9 bg-[#eefeeb] rounded-full flex items-center justify-center text-[#091906] text-[20px]">f</span>
              <span className="w-9 h-9 bg-[#eefeeb] rounded-full flex items-center justify-center text-[#091906] text-[20px]">t</span>
              <span className="w-9 h-9 bg-[#eefeeb] rounded-full flex items-center justify-center text-[#091906] text-[20px]">in</span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#12320c] my-10"></div>

        {/* Copyright */}
        <div className="text-center text-[16px] font-normal leading-[24px] tracking-[0.5px]">
          © 2025 Obiztec. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;