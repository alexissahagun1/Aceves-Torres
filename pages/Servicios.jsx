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
                        size="md:pt-10 mt-[75px]"
                        heading1Size=""
                        itemsPosition="md:items-start xl:pl-[300px] md:pl-[100px] md:py-[200px] py-[100px] items-center"
                        isBold={true}
                        fontSize="md:text-[56px] text-[42px]"
                        bgPhoto1="LogoATBlanco.png"
                        bgPhotoSizing="absolute xl:-top-30 md:-top-36  scale-50 md:scale-100 -top-36-z-0 "
                    
                    />
            </div>

                
                <div className='flex justify-center lg:-mt-[160px]'>
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

    



            {/* <div className="relative md:mt-[100px]  mt-10 flex flex-col md:flex-row md:justify-start items-center bg-gray-300">
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
            </div> */}


            
      <div className="relative  flex flex-col md:flex-row md:justify-start items-center  ">
        <img src="/ServiciosLastPhoto.png" alt="" className="2xl:w-[900px] xl:w-[600px] lg:w-[500px] md:w-[550px] w-[450px] md:h-[591px]" />
        <div className="flex md:w-[760px] xl:w-full w-full md:bottom-[-77px] items-center justify-center bg-gray-300 md:h-[500px]  z-10">
          <div className="flex flex-col space-y-10 textSizeHome">
            <h3 className="xl:mx-36 mx-10 md:mt-0 mt-8 fontcolor text-[40px] text-justify font-bold leading-[35px] tracking-wide xl:w-[500px]">
                Practicas anticorrupción
            </h3>
            <p className="xl:mx-36 mx-10 fontcolor text-[18px] text-justify font-regular leading-[48px] tracking-wide">
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
