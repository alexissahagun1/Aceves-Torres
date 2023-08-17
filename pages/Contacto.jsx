import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import CardContact from '../components/CardContact';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';
import Image from 'next/image'

const Contacto = () => {
    
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Title />
        <div className="md:mt-[200px] mt-[100px] flex md:flex-row flex-col  md:space-x-[100px] justify-between">

          <div className='md:mt-[70px] md:mx-[215px] mx-[25px] '>
            <h4 className='md:ml-[30px] fontcolor font-bold text-[48px]'>Contacto</h4>
            <p className="md:mt-[50px] fontcolor mt-[25px] font-medium text-[20px]">Ponte en contacto</p>
            <ContactForm/>

            <div className='md:block hidden'>
              <Image
                  src="/LogoAcevesGrande.png"
                  alt="My Image"
                  width={256}
                  height={283}
                  />
            </div>

          </div>

          <div className=' md:w-[397px] md:h-[729px] w-screen h-[300px] md:mt-0 mt-10 bg-gray-400 flex flex-col'>
            
            <div className='md:space-y-[45px] space-y-[20px] mx-[36px] md:my-[150px] my-[25px] text-white'>
              <h6 className='underline underline-offset-8 decoration-2'>Oficinas</h6>
              <p className='leading-7 tracking-wide'>Edificio Corporativo H+C <br /> Herrera y Cairo 2835-3B <br /> CP 4689 Fraccionamiento Terranova <br /> Guadalajara, Jalisco, México</p>

              <p className='underline underline-offset-8 decoration-2'>Email</p>

              <p className=''>contacto@acevestorres.com</p>

            </div>



            
          </div>

        </div>





      </div>

      
      
      <Footer />
    </>
  );
};

export default Contacto;
