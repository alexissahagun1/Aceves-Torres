import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Beneficios from '../components/Beneficios'
import IconsCarousel from '../components/IconsCarousel'
import carouselIcons from '../components/CarouselIcons'
import BeneficiosText from '../components/BeneficiosContent'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title'
import PhotoCollage from '../components/PhotoCollage'


const customPhotos = [
    '/FotosIndustria/1.JPG',
    '/FotosIndustria/4.JPG',
    '/FotosIndustria/5.JPG',
    '/FotosIndustria/6.JPG',
    '/FotosIndustria/7.JPG',
    '/FotosIndustria/9.JPG',
    '/FotosIndustria/10.JPG',
    '/FotosIndustria/11.jpg',
    '/FotosIndustria/12.jpg',
    '/FotosIndustria/13.jpg',
    '/FotosIndustria/14.jpg',
    '/FotosIndustria/15.jpg',
    '/FotosIndustria/16.jpg',
    '/FotosIndustria/17.jpg',
    '/FotosIndustria/19.jpg',
    '/FotosIndustria/20.jpg',
    '/FotosIndustria/21.jpg',
    '/FotosIndustria/22.jpg',
    '/FotosIndustria/23.jpg',
    '/FotosIndustria/24.jpg',
    '/FotosIndustria/25.jpg',
    '/FotosIndustria/26.JPG',
    '/FotosIndustria/27.jpeg',
    '/FotosIndustria/28.jpeg',
  ];



const Industria = () => {

    return (
        <div>
            <Title/>
            <Hero video="Hero.mp4" heading="Paneles solares para hogares, comercios e industria." message="1 Año de poliza de mantenimiento gratis" size="md:h-[789px] h-[600px]"/>

            <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[65px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Nuestros Clientes</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

                <IconsCarousel file={carouselIcons} numberItems={5} isAutoPlay={true} bgColor=""/>

                <div className="mx-auto p-4">
                    <PhotoCollage customPhotos={customPhotos} />
                </div>

                <div id="/Soluciones#Industrias" className="text-center flex flex-col items-center xl:mx-[420px] space-y-5 mx-8 mt-10">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Beneficios para su industria o negocio</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                    <p className="font-medium text-gray-600 md:text-[18px] text-base leading-10">Conozca algunos de los beneficios que tendrá por trabajar con paneles solares.</p>
                </div>

                <Beneficios file={BeneficiosText} headingColor="stella-orange" isUppercase={false} isHidden={true} marginQuantity={"2xl:mx-[330px] xl:mx-[150px]"}/>

        
                <div className="mb-10"></div>

                <ContactForm isOverlapped={false}/>


            <Footer/>
        </div>
    )
}

export default Industria
