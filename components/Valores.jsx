import React from 'react'
import ValoresText from './ValoresText'
import Head from 'next/head'

const Valores = ({headingColor, isUppercase, isScaled, hasMargin, isHidden}) => {
    return (
        <div>

            <div className="text-center flex flex-col items-center mx-4 lg:mx-0 lg:mt-[90px] mt-[100px]">
                <div className="flex flex-col space-y-4 items-center">
                    <h2 className="uppercase stella-orange font-semibold text-[24px] relative">Valores <br/> Corporativos</h2>
                    <img src="Layer1.png" alt="" className="mx-8 hidden lg:block"/>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-3 lg:grid-rows-3 justify-items-center xl:mx-[100px] lg:mx-[50px]  mx-8 mt-8 xl:mt-[-50px] space-y-8 lg:space-y-0">
            {ValoresText && ValoresText.map((item) =>
                <div key={item.id}>

                    <div className={item.id %2 === 0 ? "lg:col-start-1 lg:col-end-1 flex flex-col lg:flex-row-reverse lg:items-start items-center space-y-4" : "flex flex-col lg:flex-row lg:items-start items-center lg:col-start-3 lg:col-end-3 text-left space-y-4"}>
                        <img src={item.icon} alt="" className="lg:pr-3 mt-6 max-w-sm"/>
                        <div className=" mt-10 lg:mt-0 space-y-2">
                            <h2 className="uppercase text-gray-400 font-semibold lg:text-[24px] text-lg lg:text-left text-center">{item.heading}</h2>
                            <p className="font-base lg:text-left md:text-center xl:text-[20px] lg:text-[16px] text-[14px] leading-[36px] text-gray-700 tracking-tight">{item.body}</p>
                        </div>


                    </div>


                </div>

        
               )}


               
               <img className="col-start-2 col-span-1 row-start-1 row-end-4" src="/" alt=""/>

               <img className="lg:grid xl:scale-100  lg:scale-75  col-start-2 col-span-1 row-start-2 row-end-4 hidden" src="/icons/Valores/IconStella.png" alt=""/>
            </div>
            
        </div>
    )
}

export default Valores
