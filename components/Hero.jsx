import React from 'react'

const Hero = ({ heading, heading1Size, heading2Size, heading3Size, size, isBold, fontSize, bgPhoto1, bgPhotoSizing, itemsPosition}) => {
    return (
      <div className={`flex flex-col ${itemsPosition} bg-gray-300 py-10`}>
        <div className={size} />
        <div style={{ color: '#364156' }} className="absolute flex md:mt-[290px] mt-[150px] md:mx-0 mx-6  ">
          {/* <img src={bgPhoto1} className="absolute top-0 left-0 -z-10 block md:hidden" alt="" /> */}
          <img src={bgPhoto1} className={`${bgPhotoSizing}`} alt="" />
          {/* <img src={bgPhoto2} className="absolute top-0 left-0 -z-10 hidden md:block" alt="" />
          <img src={bgPhoto3} className="absolute md:-top-20 md:-left-48 scale-50 md:scale-100 -top-36 right-80 -z-0 " alt="" />
          <img src={bgPhoto4} className="absolute -top-20 right-10 -z-0" alt="" />
          <img src={bgPhoto5} className="absolute md:-top-20  scale-50 md:scale-100 -top-36  -z-0 " alt="" /> */}
          <h2
            className={`md:text-4xl text-xl md:pb-10 ${heading1Size} ${heading2Size} ${heading3Size}  z-10 ${isBold ? 'font-bold' : 'font-medium'} ${fontSize}  `}
          >
            {heading}
          </h2>
          {/* <h2
            className={`md:text-4xl text-xl md:pb-10 lg:w-[730px] md:w-[630px] z-10 ${isBold ? 'font-bold' : 'font-medium'} ${fontSize} ${hidden ? 'hidden' : 'block'}  `}
          >
            {heading2}
          </h2> */}
          {/* <h2
            className={`md:text-4xl text-xl md:pb-10  z-10 ${isBold ? 'font-bold' : 'font-medium'} ${fontSize} ${hidden ? 'hidden' : 'block'}  `}
          >
            {heading3}
          </h2> */}
        </div>
      </div>
    );
  };
  

export default Hero
