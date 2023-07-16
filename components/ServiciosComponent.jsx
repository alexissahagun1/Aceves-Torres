import React from 'react'
import Servicios from './ServiciosContent';

const ServiciosComponent = () => {

    return (
      <div className="flex flex-col items-center mt-20 " >
           {Servicios && Servicios.map((item) =>
                <div className='bg-gray-200 md:w-[1029px] text-center w-full flex flex-col  lg:mb-[120px]' key={item.id}>
                    <div className="">
                        <div className="flex flex-col mt-[50px] lg:text-left">
                            <div className="md:mx-24 space-y-6 fontcolor">
                                <p className="font-medium text-left xl:text-[28px] lg:text-[28px] text-[14px] leading-[36px]">{item.heading}</p>
                                <p className="font-base text-left xl:text-[16px] lg:text-[16px] text-[14px] leading-[36px] ">{item.body}</p>
                                <p className="font-medium text-left xl:text-[20px] lg:text-[18px] text-[14px] leading-[36px] ">{item.subheading}</p>
                            </div>
                            <ul className='md:mt-4 md:ml-36'>
                                {/* <li className="whitespace-pre-line  font-base text-left md:w-[533px]  xl:text-[20px] lg:text-[18px] text-[14px] leading-[36px] text-gray-700">{item.data}</li> */}

                                {item.data.split('\n').map((i, index) => (
                                    <li key={index} className='list-disc text-[16px] font-semibold  text-left md:w-[550px] fontcolor'>{i}</li>
                                ))}
                            </ul>
                            <div className="flex justify-end ">
                                <img src={item.logo} className="md:-mb-[49px] md:mr-[69px]" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            )}
      </div>
    );
  };
  

export default ServiciosComponent

