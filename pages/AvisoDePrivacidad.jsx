import React from 'react';
import {useEffect, useRef} from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Title from '../components/Title';




const AvisoDePrivacidad = () => {
  

  return (
    <div>
      <Title />
      <Hero
        heading="Aviso de Privacidad"
        heading1Size=""
        size="md:pt-10 mt-[75px]"
        isBold={true}
        itemsPosition="md:items-start xl:pl-[300px] md:pl-[100px] md:py-[200px] py-[100px] items-center "
        fontSize="md:text-[56px] text-[36px] lg:pl-[180px] "
        bgPhoto1="LogoATBlanco.png"
        bgPhotoSizing="absolute md:-top-20  scale-50 md:scale-100 -top-36  -z-0 "
      />

      <iframe className='w-screen h-screen' src="/files/2023 - A&T - Aviso Privacidad.pdf" frameborder="0"></iframe>


    



      <Footer />
    </div>
  );
};

export default AvisoDePrivacidad;
