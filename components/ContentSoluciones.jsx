import React from 'react'
import imagesWD from './ContentComponent'


const ContentSoluciones = () => {
    return (
        <div className="3xl:mx-[425px] xl:mx-[215px] lg:mx-[75px] lg:mt-[58px] mx-8">
            {imagesWD && imagesWD.map((item) =>
                // <div className="flex md:flex-row-reverse  flex-col space-x-[30px] items-center" key={item.id}>
                <div className={item.id %2 === 0 ? "flex md:flex-row flex-col md:space-x-20 mt-[112px] md:text-left text-center " : "flex flex-col md:flex-row-reverse mt-[112px] md:text-left text-center"} key={item.id}>
                        <img src={item.image} className="2xl:max-w-xl lg:max-w-md md:max-w-sm max-w-xs object-contain" alt="" />
                        <div className="md:mr-20 space-y-8 mt-10 md:mt-0">
                            <h6 className="font-bold 2xl:text-[30px] text-[24px] text-gray-800 opacity-95">{item.heading}</h6>
                            <p className="font-base 3xl:text-[25px] text-[17px] leading-[27px] text-gray-700">{item.body}</p>
                            <p className="font-base 3xl:text-[25px] text-[17px] leading-[27px] text-gray-700 whitespace-pre-line text-left">{item.details}</p>
                        </div>
                </div>
            )}
        </div>
    )
}

export default ContentSoluciones
