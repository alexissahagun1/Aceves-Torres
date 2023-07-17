import React from 'react'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Image from 'next/image'
import ServiciosComponent from '../components/ServiciosComponent'



const Servicios = () => {

    return (
        <div>
            <Title/>
            <div className="relative md:mt-[150px] mt-32 md:mx-[115px]">
                <Image
                src="/FondoServicios.png"
                alt="My Image"
                layout="responsive"
                width={1369}
                height={487}
                />
                <div className="absolute top-0 fontcolor flex flex-col md:mx-[126px] mx-4 md:mt-[80px] mt-2 space-y-4">
                    <h3 className="font-bold text-[48px]">-Servicios</h3>
                    <p className="ml-6">Se describen algunos de ellos</p>
                </div>


                
                <div className='flex justify-center 2xl:-mt-[260px] '>
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

    


    


    
          


          


                <div className="md:mt-[300px]"></div>



            <Footer/>
        </div>
    )
}

export default Servicios
