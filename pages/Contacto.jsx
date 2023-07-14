import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import CardContact from '../components/CardContact';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';

const Contacto = () => {
    
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Title />
        <Hero
          video="Hero.mp4"
          heading="Escríbanos para programar una llamada de energía solar"
          message2="Nuestros especialistas en energía se pondrán en contacto con usted lo antes posible para atender cualquier duda."
          size="h-[594px]"
        />
        <ContactForm>
        </ContactForm>
      </div>

      <CardContact />
      
      <Footer />
    </>
  );
};

export default Contacto;
