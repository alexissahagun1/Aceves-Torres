import React from 'react'


const Beneficios = ({file, headingColor, isUppercase, isScaled, hasMargin, isHidden, marginQuantity}) => {
    return (
       <div className={`grid md:grid-cols-1 grid-cols-1 justify-items-start md:mt-20 ${marginQuantity} lg:mx-[50px] mx-[10px] align-middle ${isHidden ? "hidden md:grid" : "md:hidden"}`}>
        <h6 className='text-4xl font-semibold fontcolor'>Servicios</h6>
        <p className='fontcolor text-[15px] md:mt-[20px] tracking-wide'>Tenemos equipos de práctica en las siguientes áreas:</p>
               {file && file.map((item) =>
                <div className={`flex flex-row  md:my-[20px] my-[30px]  ${hasMargin ? "mx-6" : "mx-0"}`} key={item.id}>
                    <p style={{color: '#929ca9'}} className="font-bold text-[14px] tracking-normal md:mt-14">{item.number}</p>
                    <div className='flex items-center'>
                        <img src={item.icon} alt="" className={`md:p-[27px] pr-4  md:scale-100 ${isScaled ? "scale-75" : "scale-100"}`}/>
                        <div className="flex flex-col text-left space-y-[15px]">
                            <h6 className={`font-semibold ${headingColor} ${isUppercase ? "uppercase" : ""} text-base leading-[18px]`}>{item.heading}</h6>
                            <p className="font-medium text-[14px] tracking-normal">{item.body}</p>
                        </div>
                    </div>
                </div>
               )}

       </div>
    )
}

export default Beneficios
