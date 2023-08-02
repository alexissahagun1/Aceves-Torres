import React from 'react'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '../components/Hero'
import ServiciosComponent from '../components/ServiciosComponent'



const Servicios = () => {

    return (
        <div>
            <Title/>
            <div>
            {/* <div className="relative md:mt-[150px] mt-32 md:mx-[115px">
                <Image
                src="/FondoServicios.png"
                alt="My Image"
                layout="responsive"
                width={1369}
                height={487}
                />
                <div className="absolute top-0 fontcolor flex flex-col md:mx-[126px] mx-4 md:mt-[80px] mt-2 space-y-4">
                    <h3 className="font-bold text-[48px]">Servicios</h3>
                </div>
        </div> */}
            <div className='relative'>
                <Hero
                        heading="Servicios"
                        size="md:h-[600px] h-[300px] "
                        isBold={true}
                        fontSize="md:text-[56px] text-[36px]"
                        bgPhoto4="LogoATBannerChico.png"
                    />
            </div>

                
                <div className='flex justify-center lg:-mt-[260px] '>
                    <Image
                    src="/FotoServicios1.png"
                    alt="My Image"
                    width={974}
                    height={516}
                    />
                </div>
            </div>

            <div className="flex justify-center md:mt-[69px] mt-10">
                <Image
                    src="/LineaServicios.png"
                    alt="My Image"
                    width={65}
                    height={4}
                />
            </div>

            <ServiciosComponent/>

    



            <div className="relative md:mt-[100px]  mt-10 flex flex-col md:flex-row md:justify-start items-center bg-gray-300">
                <img src="/ServiciosLastPhoto.png" alt="" className="lg:w-[900px] md:w-[550px] w-[450px]" />
                <div className="xl:w-[900px] md:bottom-[-77px] flex items-center justify-center">
                <div className="flex flex-col space-y-10">
                    <h3 className="xl:mx-36 mx-10 fontcolor text-[40px] text-justify font-bold leading-[35px] tracking-wide xl:w-[500px]">
                        Practicas anticorrupción
                    </h3>
                    <p className="xl:mx-36 mx-10 fontcolor text-xl text-justify font-regular leading-[48px] tracking-wide">
                        La firma y sus integrantes nos hemos ceñido a diversos ordenamientos e iniciativas de prácticas de ética profesional y anticorrupción, como lo son (i) el Código de Ética Profesional de la Barra Mexicana, Colegio de Abogados y (ii) la Iniciativa de Integridad Judicial de la International Bar Association: Compromiso de Anticorrupción Judicial.
                    </p>
                </div>
                </div>
            </div>
    


    
          


          


                <div className="md:mt-[300px]"></div>



            <Footer/>
        </div>
    )
}

export default Servicios
