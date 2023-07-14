import React from 'react'
import Image from 'next/image'
import Beneficios from '../components/Beneficios'
import PorqueElegirText from '../components/PorqueElegir'


const Certificaciones = () => {

    const src = '/FondoCertificaciones.png'
    return (

        <div>
            <div className="relative xl:h-[1500px] lg:h-[1550px] md:h-[1630px] h-[1250px] w-screen mt-20">
                <Image src={src} layout="fill" objectFit="cover"/>
                <div className="relative flex flex-col items-center mx-8 md:mx-0">
                    <h6 className="mt-[70px] uppercase font-semibold leading-[36px] text-[24px] text-gray-700">Certificaciones</h6>
                    <div className="flex flex-row space-x-10 mt-[60px] items-end">
                        <h6 className="w-56 font-semibold text-gray-700 leading-[22px] uppercase xl:text-[20px] lg:text-[18px] text-[16px]items-center">Certificación en los estándares <span className="text-green-400">ECO586.01</span> y <span className="text-green-400">EC1181</span></h6>
                        <img src="icons/Certificaciones/Icon1.png" alt=""/>
                    </div>

                    <div className="md:grid flex-row md:grid-cols-4 md:grid-rows-1 mt-[75px] space-y-10 md:space-y-0 mx-4 ">

                        <div className="flex flex-col items-center space-y-5 mx-16">
                            <img src="icons/Certificaciones/Icon5.png" className="w-[96px]" alt=""/>
                            <div className="space-y-1 w-[200px] md:text-left text-center">
                                <h6 className="stella-orange font-semibold xl:text-[20px] lg:text-[16px] leading-[22px]">NOM-0029-STPS</h6>
                                <p className="font-medium text-[13px] text-gray-800 leading-[22px]">Condiciones de seguridad en el mantenimiento de instalaciones eléctricas.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-5 mx-16">
                            <img src="icons/Certificaciones/Icon2.png" className="w-[96px]" alt=""/>
                            <div className="space-y-1 w-[200px] md:text-left text-center">
                                <h6 className="stella-orange font-semibold xl:text-[20px] lg:text-[16px] leading-[22px]">NOM-002-STPS</h6>
                                <p className="font-medium text-[13px] text-gray-800 leading-[22px]">Prevención y protección contra incendios en los centros de trabajo.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-5 mx-16">
                            <img src="icons/Certificaciones/Icon3.png" className="w-[96px]" alt=""/>
                            <div className="space-y-1 w-[200px] md:text-left text-center">
                                <h6 className="stella-orange font-semibold xl:text-[20px] lg:text-[16px] leading-[22px]">NOM-006-STPS</h6>
                                <p className="font-medium text-[13px] text-gray-800 leading-[22px]">Manejo y almacenamiento de materiales.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-5 mx-16">
                            <img src="icons/Certificaciones/Icon4.png" className="w-[96px]" alt=""/>
                            <div className="space-y-1 w-[200px] md:text-left text-center">
                                <h6 className="stella-orange font-semibold xl:text-[20px] lg:text-[16px] leading-[22px]">NOM-009-STPS</h6>
                                <p className="font-medium text-[13px] text-gray-800 leading-[22px]">Trabajo en alturas</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:mt-[325px]">
                        <div className="text-center flex flex-col items-center mx-4 md:mx-0 hidden md:flex">
                            <div className="flex flex-row items-center">
                                <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                                <h2 className="uppercase opacity-90 text-gray-900 font-semibold md:text-[24px] text-lg">Por qué elegir stella solar</h2>
                                <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                            </div>
                        </div>

                        <Beneficios file={PorqueElegirText} headingColor="text-white" isUppercase={false} isHidden={true} marginQuantity={"xl:mx-[158px]"}/>


                    </div>



                </div>
                
            </div>

            <div className="text-center flex flex-col items-center mx-4 md:mx-0 mt-10 md:mt-0 md:hidden">
                            <div className="flex flex-row items-center">
                                <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                                <h2 className="uppercase opacity-90 text-gray-900 font-semibold md:text-[24px] text-lg">Por qué elegir stella solar</h2>
                                <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                            </div>
                        </div>

            <Beneficios file={PorqueElegirText} headingColor="text-gray-800" isUppercase={false} isHidden={false} hasMargin={true}/>


        </div>
    )
}

export default Certificaciones
