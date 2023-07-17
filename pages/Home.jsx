import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Beneficios from '../components/Beneficios';
import Servicios from '../components/Servicios';
import PerfilContent from '../components/PerfilContent';

const Home = () => {
  return (
    <div>
      <Title />
      <Hero
        heading="Firma de abogados con sede en Guadalajara, Jalisco, especializada en brindar asesoría y patrocinio legal en materias Civil, Mercantil, Societario, Administrativa y Urbana."
        size="md:h-[500px] h-[300px]"
        bgPhoto="LogoAceves.png"
      />

      <div className="relative md:mt-[100px]  flex flex-col md:flex-row justify-start">
        <img src="/HomePhoto1.png" alt="" className="xl:w-[900px]" />
        {/* <div className="bg-gray-400 md:w-[760px] xl:w-[900px] md:bottom-[-77px] right-0 h-[487px] flex items-center justify-center"> */}
        <div className="bg-gray-400  xl:w-[900px] md:bottom-[-77px] right-0 h-[487px] flex items-center justify-center">
          <div className="flex flex-col space-y-10">
            <p className="xl:mx-36 mx-10 font-medium text-white font-regular leading-[35px] xl:w-[500px]">
              Forjamos una relación cliente - abogado, que sea tan confiable, cercana y transparente, que la colaboración conjunta pueda perdurar y trascender más allá de algún asunto en particular. Por ende, los miembros de la Firma dedican todo su esfuerzo y habilidad profesional para obtener los mejores resultados de una forma técnica, eficaz y ética en favor de nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <Beneficios
        file={Servicios}
        headingColor="text-indigo-900"
        isUppercase={false}
        isHidden={true}
        marginQuantity="2xl:mx-[530px] xl:mx-[350px]"
      />

      <div className="flex md:justify-end md:mt-32 my-14 md:my-0 md:mr-[288px] md:mx-0 mx-10 fontcolor font-bold text-[30px] ">
        <h4 className="md:w-[350px] w-screen">Más detalles sobre nuestros servicios</h4>
        <Link href="/Servicios">
          <img src="FlechaGrande.png" className="md:w-[50px] md:h-[35px] w-[40px] h-[25px] mt-[80px] cursor-pointer" alt="" />
        </Link>
      </div>

      <div className="flex flex-col items-center md:mt-[200px] mt-10 text-center md:mx-0 mx-4">
        <h2 style={{ color: '#929ca9' }} className="customFont font-regular md:text-[42px] text-[30px]  md:w-[700px] tracking-wide">
          Forjamos relaciones estrechas y transparentes con nuestros clientes
        </h2>
        <p className="md:mt-[30px] mt-4 font-color md:text-[18px] font-regular">Con calidad, técnica y ética.</p>
      </div>

      <div className="relative md:mt-[100px] mt-20 flex flex-col md:flex-row-reverse justify-start">
        <img src="/HomePhoto1.png" alt="" className="xl:w-[900px]" />
        <div className="bg-gray-400 md:w-[760px] xl:w-[900px] md:bottom-[-77px] right-0 md:h-[487px] flex items-center justify-center">
          <div className="flex flex-col space-y-10">
            <p className="md:mx-36 mx-6 my-6 md:my-0 py-10 md:py-0 font-medium text-white font-regular leading-[35px] xl:w-[500px]">
              Forjamos una relación cliente - abogado, que sea tan confiable, cercana y transparente, que la colaboración conjunta pueda perdurar y trascender más allá de algún asunto en particular. Por ende, los miembros de la Firma dedican todo su esfuerzo y habilidad profesional para obtener los mejores resultados de una forma técnica, eficaz y ética en favor de nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <PerfilContent />

      <div className="flex justify-end md:mt-32 mt-10 mx-10 md:mx-0 md:mr-[288px] fontcolor font-bold text-[30px]">
        <h4 className="w-[350px]">¡Ponte en contacto con nosotros!</h4>
        <Link href="/Contacto">
          <img src="FlechaGrande.png" className="md:w-[50px] md:h-[35px] w-[40px] h-[25px] mt-[80px] cursor-pointer" alt="" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

