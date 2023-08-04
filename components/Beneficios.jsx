import React from 'react'


const Beneficios = ({file, headingColor, isUppercase, isScaled, hasMargin, isHidden, marginQuantity}) => {
    return (
       <div className={`grid md:grid-cols-1 grid-cols-1 justify-items-start md:mt-20 mt-10 ${marginQuantity} lg:mx-[50px] mx-[18px] align-middle  md:grid"`}>
        <h6 className='md:text-[56px] text-[40px] font-bold fontcolor'>Práctica</h6>
        <p className='fontcolor md:text-[30px] text-[24px]  font-medium md:mt-[20px] md:mb-10 mt-4 tracking-wide'>Tenemos equipos de práctica en las siguientes áreas:</p>
               {file && file.map((item) =>
                <div className={`flex flex-col  md:my-[20px] my-[30px]   ${hasMargin ? "mx-6" : "mx-0"}`} key={item.id}>
                    <div className='flex items-start '>
                    <p style={{color: '#929ca9'}} className="font-bold text-[24px] tracking-normal md:mr-[40px] mr-4">{item.number}</p>
                        {/* <img src={item.icon} alt="" className={`md:p-[27px] pr-4  md:scale-100 ${isScaled ? "scale-75" : "scale-100"}`}/> */}
                        <div className="flex flex-col text-left md:space-y-5 space-y-4 fontcolor">
                            <h6 className={`font-semibold ${headingColor} ${isUppercase ? "uppercase" : ""} text-[24px] md:leading-[18px] leading-[28px]`}>{item.heading}</h6>
                            <p className=" md:text-[24px] text-[18px] tracking-normal text-justify">{item.body}</p>
                        </div>
                    </div>
                </div>
               )}

       </div>
    )
}

export default Beneficios
