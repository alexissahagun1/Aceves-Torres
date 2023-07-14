import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NosotrosBio from '../components/NosotrosBio'
// import NosotrosContent from '../components/NosotrosContent'
import Valores from '../components/Valores'
import Link from 'next/link'
import IconsCarousel from '../components/IconsCarousel'
import carouselIcons from '../components/CarouselIcons'
import Title from '../components/Title'

const Nosotros = () => {
    return (
        <div>
            <Title/>
            <Hero video="Hero.mp4" heading="Soluciones de energía solar" message2="Nuestro propósito, experiencia y valores corporativos." size="h-[594px]"/>

            <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                <div className="flex flex-col space-y-4 items-center">
                    <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Nosotros</h2>
                    <img src="Layer1.png" alt="" className="mx-8 hidden md:block"/>
                </div>
            </div>

            <NosotrosBio/>
            {/* <NosotrosContent/> */}
            <Valores/>

            <div className="flex md:flex-row flex-col  xl:mx-[200px] lg:mx-[100px] mx-8 lg:mt-[100px] mt-8 md:space-x-10 space-y-4 md:space-y-0 md:items-start items-center">

                <img src="/Fotos/Image33.JPG" className="object-contain xl:max-w-lg lg:max-w-md md:max-w-sm max-w-xs" alt=""/>

                <div className="flex flex-col lg:space-y-10 md:space-y-6 space-y-4">

                    <div className="space-y-4">

                        <h2 className="font-bold lg:text-[24px] text-[20px] leading-[36px] opacity-80">Solidez y Confianza</h2>
                        <p className="lg:text-[16px] text-[14px] leading-[36px]" >
                        En Stella Solar nos motiva poder contribuir a la transición energética para construir un mejor futuro, es por eso que cada proyecto que ejecutamos es un paso más hacia un planeta sustentable.
                        </p>

                    </div>

                    <div className="">
                    <Link href="/Contacto">
                        <button className="px-[20px] py-1.5 text-white font-semibold rounded-md " style={{backgroundColor: "rgb(255, 127, 48)"}}>Contáctenos</button>
                    </Link>
                    </div>
                    
                </div>

            </div>

            
            <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Clientes que confían en nosotros</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

            <IconsCarousel file={carouselIcons} numberItems={5} isAutoPlay={true}/>








            <Footer/>
        </div>
    )
}

export default Nosotros
