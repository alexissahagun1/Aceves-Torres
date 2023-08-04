import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Beneficios from '../components/Beneficios';
import Servicios from '../components/Servicios';
import PerfilContent from '../components/PerfilContent';

const Inicio = () => {
  return (
    <div>
      <Title />
      <Hero
        heading2="Firma de abogados con sede en Guadalajara, Jalisco, especializada en brindar asesoría y patrocinio legal en materias Civil, Mercantil, Societario, Administrativa y Urbana."
        size="md:h-[500px] h-[300px]"
        // bgPhoto1="LogoAceves.png"
        // bgPhoto2="LogoAcevesGrande.png"
        bgPhoto3="LogoATBlanco.png"
      />

      <div className="relative  flex flex-col md:flex-row md:justify-start items-center ">
        <img src="/HomePhoto1.png" alt="" className="2xl:w-[900px] xl:w-[600px] lg:w-[500px] md:w-[550px] w-[450px] md:h-[591px]" />
        <div className="flex md:w-[760px] xl:w-full w-full md:bottom-[-77px] items-center justify-center bg-gray-400 md:h-[500px]  z-10">
          <div className="flex flex-col space-y-10 textSizeHome md:p-0 p-10">
            <p className="mx-10 text-white text-justify font-regular leading-[35px] tracking-wide xl:w-[500px]">
            Aceves & Torres Abogados fue fundada en 2019, con el objetivo de prestar servicios legales de forma personal, con la más alta exigencia técnica y ética a nuestros clientes.
            </p>

            <p className='mx-10 fontcolor text-justify text-[30px] font-medium leading-[35px] tracking-wide xl:w-[500px]'>Conoce más {'\u2192'}</p>
          </div>
        </div>
      </div>
      <Beneficios
        file={Servicios}
        headingColor="fontcolor"
        isUppercase={false}
        isHidden={true}
        marginQuantity="2xl:mx-[430px] xl:mx-[289px]"
      />

      <div className="flex md:justify-end md:mt-32 my-14 md:my-0 md:mr-[288px] md:mx-0 mx-10 fontcolor font-medium text-[30px] ">
        <h4 className="md:w-[320px] w-screen">Más detalles sobre nuestra práctica y servicios</h4>
        <Link href="/Servicios">
          <img src="FlechaGrande.png" className="md:w-[50px] md:h-[35px] w-[40px] h-[25px] mt-[80px] cursor-pointer" alt="" />
        </Link>
      </div>

      <div className="flex flex-col items-center md:mt-[200px] mt-10 text-center md:mx-0 mx-4">
        <h2 style={{ color: '#929ca9' }} className="customFont font-regular md:text-[52px] text-[30px]  md:w-[700px] tracking-wide">
          Forjamos relaciones estrechas y transparentes con nuestros clientes con calidad y ética.
        </h2>
      </div>

      {/* <div className=" md:mt-[100px] mt-20 flex flex-col md:flex-row-reverse md:justify-start items-center">
        <img src="/InicioPhoto1.png" alt="" className="w-[400px] lg:w-[700px]" />
        <div className="bg-gray-400 md:w-[760px] xl:w-[900px] md:bottom-[-77px] right-0 md:h-[487px] flex items-center justify-center">
          <div className="flex flex-col space-y-10">
            <p className="md:mx-10  mx-6 my-6 md:my-0 py-10 md:py-0 font-medium text-white font-regular leading-[35px] xl:w-[500px]">
              Forjamos una relación cliente - abogado, que sea tan confiable, cercana y transparente, que la colaboración conjunta pueda perdurar y trascender más allá de algún asunto en particular. Por ende, los miembros de la Firma dedican todo su esfuerzo y habilidad profesional para obtener los mejores resultados de una forma técnica, eficaz y ética en favor de nuestros clientes.
            </p>
          </div>
        </div>
      </div> */}


      {/* <div className="relative md:mt-[100px]  mt-10 flex flex-col md:flex-row-reverse md:justify-start items-center ">
        <img src="/Forjamos.png" alt="" className="2xl:w-full xl:w-[600px] lg:w-[500px] md:w-[550px] w-[450px] md:h-[591px]" />
        <div className="flex md:w-[760px] xl:w-full w-full md:bottom-[-77px] items-center justify-center bg-gray-400 md:h-[500px]  z-10">
          <div className="flex flex-col space-y-10 items-center">
            <p className="xl:mx-36 mx-10 text-white text-xl text-justify font-regular leading-[35px] tracking-wide xl:w-[500px]">
            Forjamos una relación cliente - abogado, que sea tan confiable, cercana y transparente, que la colaboración conjunta pueda perdurar y trascender más allá de algún asunto en particular. Por ende, los miembros de la Firma dedican todo su esfuerzo y habilidad profesional para obtener los mejores resultados de una forma técnica, eficaz y ética en favor de nuestros clientes.
            </p>
          </div>
        </div>
      </div> */}

      <div className="relative md:mt-[100px] flex flex-col md:flex-row-reverse md:justify-start items-center ">
        <img src="/Forjamos.png" alt="" className="2xl:w-[900px] xl:w-[600px] lg:w-[500px] md:w-[550px] w-[450px] md:h-[591px]" />
        <div className="flex md:w-[760px] xl:w-full w-full md:bottom-[-77px] items-center justify-center bg-gray-400 md:h-[500px]  z-10">
          <div className="flex flex-col space-y-10 textSizeHome md:p-0 p-10">
            <p className="mx-10 text-white text-justify font-regular leading-[35px] tracking-wide xl:w-[500px]">
            Forjamos una relación cliente - abogado, que sea tan confiable, cercana y transparente, que la colaboración conjunta pueda perdurar y trascender más allá de algún asunto en particular. Por ende, los miembros de la Firma dedican todo su esfuerzo y habilidad profesional para obtener los mejores resultados de una forma técnica, eficaz y ética en favor de nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <PerfilContent />

      {/* <div className="flex justify-end md:mt-32 mt-10 mx-10 md:mx-0 md:mr-[288px] fontcolor font-bold text-[30px]">
        <h4 className="w-[350px]">¡Ponte en contacto con nosotros!</h4>
        <Link href="/Contacto">
          <img src="FlechaGrande.png" className="md:w-[50px] md:h-[35px] w-[40px] h-[25px] mt-[80px] cursor-pointer" alt="" />
        </Link>
      </div> */}

      <Footer />
    </div>
  );
};

export default Inicio;

