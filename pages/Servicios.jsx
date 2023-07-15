import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Title from '../components/Title'




const Servicios = () => {

    return (
        <div>
            <Title/>
            <Hero video="Hero.mp4" isBold={true} fontSize="58px" heading="- Nuestros socios fundadores" size="md:h-[789px] h-[600px]"/>

    


            <div>


            </div>

          


          

            {/* <div id="/Soluciones#Industrias" className="text-center flex flex-col items-center xl:mx-[420px] space-y-5 mx-8">
                <div className="flex flex-row items-center">
                    <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Beneficios para su industria o negocio</h2>
                    <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                </div>
                <p className="font-medium text-gray-600 md:text-[18px] text-base leading-10">Conozca algunos de los beneficios que tendrá por trabajar con paneles solares.</p>
            </div>

            <Beneficios file={BeneficiosText} headingColor="stella-orange" isUppercase={false} isHidden={true} marginQuantity={"2xl:mx-[330px] xl:mx-[150px]"}/>


                <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Proyectos destacados</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

                <CarouselComponent height="md:h-[400px]"/>

                
                <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                    <div className="flex flex-row items-center md:space-x-20 space-x-4">
                        <div className="flex flex-col items-center">
                            <h2 className='font-semibold md:text-6xl text-sm stella-orange'>+15000</h2>
                            <h2 className='font-medium md:text-lg text-xs'>Paneles Instalados</h2>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className='font-semibold md:text-6xl text-sm stella-orange'>+10</h2>
                            <h2 className='font-medium md:text-lg text-xs'>Años de experiencia</h2>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className='font-semibold md:text-6xl text-sm stella-orange'>+156 kWh</h2>
                            <h2 className='font-medium md:text-lg text-xs'>Generados con energía solar</h2>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className='font-semibold md:text-6xl text-sm stella-orange'>+100</h2>
                            <h2 className='font-medium md:text-lg text-xs'>Empresas han confiado en nosotros</h2>
                        </div>
                    </div>
                </div>
                



                <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[65px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Nuestros Clientes</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

                <IconsCarousel file={carouselIcons} numberItems={5} isAutoPlay={true} bgColor=""/>

                <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Alianzas</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

                <IconsCarousel file={alianzasIcons} numberItems={3} isAutoPlay={true}/>

                <Certificaciones/>

                <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Socios Comerciales</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

                <IconsCarousel file={SociosIcons} numberItems={4} isAutoPlay={true} bgColor="bg-white"/>


                <VideoComponent video="bgVideo.mp4" size="md:h-[660px] h-[300px]"/> */}

                <div className="mb-10"></div>



            <Footer/>
        </div>
    )
}

export default Servicios
