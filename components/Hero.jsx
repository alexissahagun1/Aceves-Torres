import React from 'react'


const Hero = ({ heading, size}) => {
    return (
        <div className="flex flex-col justify-items-center items-center ">
            <div className={` ${size}`}/>
            <div style={{color: '#364156'}} className="absolute flex fle mt-[290px] ">
            <img src="LogoAceves.png" className="absolute top-0 left-0 -z-10" alt="" />
                <h2 className="md:text-4xl text-2xl font-medium tracking-tight pb-10 md:w-[930px] ">{heading}</h2>
            </div>
        </div>
    )
}

export default Hero
