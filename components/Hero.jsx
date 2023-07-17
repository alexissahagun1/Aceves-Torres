import React from 'react'

const Hero = ({ heading, size, isBold, fontSize, bgPhoto1, bgPhoto2}) => {
    return (
      <div className="flex flex-col justify-items-center items-center">
        <div className={size} />
        <div style={{ color: '#364156' }} className="absolute flex  md:mt-[290px] mt-[150px] md:mx-0 mx-6">
          <img src={bgPhoto1} className="absolute top-0 left-0 -z-10 block md:hidden" alt="" />
          <img src={bgPhoto2} className="absolute top-0 left-0 -z-10 hidden md:block" alt="" />
          <h2
            className={`md:text-4xl text-xl tracking-tight md:pb-10 md:w-[930px] ${isBold ? 'font-bold' : 'font-medium'} ${fontSize}`}
          >
            {heading}
          </h2>
        </div>
      </div>
    );
  };
  

export default Hero
