import React from 'react'
import PerfilText from './PerfilText'


const PerfilContent = () => {
    return (
        <div className="xl:mx-[175px] lg:mx-[75px] lg:mt-[90px] mx-10 mt-10 md:mb-[410px]">

            <div className='flex flex-col items-center space-y-10'>
                <h6 className='customGrey font-medium md:text-[40px] text-[32px] tracking-wide'>Perfil de Nuestros Clientes</h6>

                <p className='fontcolor md:w-[1000px] md:text-[24px] text-[18px] text-justify'>El perfil de los clientes de Aceves & Torres son empresas nacionales o extranjeras, cuyos giros empresariales en diferentes industrias tienen conexión con algún tema jurídico en nuestro país, como lo serían:</p>
            </div>

            {PerfilText && PerfilText.map((item) =>
                <div key={item.id}>
                    <div className="text-center flex flex-col items-center mx-4 lg:mx-0 lg:mt-[90px] md:mt-[85px]">
                        <div className="flex flex-col lg:flex-row mt-[50px] lg:text-left text-center items-center">
                            <div className="lg:mr-20 space-y-8 mt-4 lg:mt-0 mx-4 md:mx-0">
                                <img src={item.image} className="lg:max-w-md md:max-w-sm object-contain" alt="" />
                            </div>
                            <p className="font-base text-left md:w-[533px] md:mt-0 mt-6  lg:text-[24px] text-[18px] leading-[36px] text-gray-700 text-justify">{item.body}</p>

                        </div>
                    </div>
                </div>
            )}
           
        </div>
    )
}
 

export default PerfilContent
