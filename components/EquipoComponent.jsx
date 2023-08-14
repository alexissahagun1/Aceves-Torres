import React from 'react'
import Equipo from './EquipoContent';
import Image from 'next/image';

const EquipoComponent = () => {

    return (
        <div className='flex flex-row bg-gray-200 py-20 '>
            <div className="flex flex-col 2xl:mx-64 lg:mx-40 md:mx-16 mx-4" >
                <h4 className='   mx-4 font-medium text-left uppercase fontcolor lg:text-[35px] text-[24px] leading-[36px] md:py-8 py-4'>Equipo</h4>
                {Equipo && Equipo.map((item) =>
                        <div className='text-center w-full flex flex-col lg:mb-[50px] mb-[20px]' key={item.id}>
                            <div className="">
                                <div className="flex flex-col mt-[50px] lg:text-left md:w-[700px]">
                                    <div className=" mx-4 md:space-y-6 space-y-4 fontcolor">
                                        <p className="font-medium text-left  lg:text-[30px] text-[24px] leading-[36px]">{item.heading}</p>
                                        <p className="font-base text-justify  lg:text-[20px] text-[18px] leading-[36px] md:mx-0 mx-2 ">{item.body}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )}

            </div>

            <div className='hidden md:flex md:items-end md:scale-125 xl:mx-[300px] md:mx-[150px] md:mb-[175px]'>
              <Image
                  src="/LogoATBlanco.png"
                  alt="My Image"
                  width={256}
                  height={283}
                  />
            </div>

        </div>
    );
  };
  

export default EquipoComponent

