import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Title from '../components/Title';
import EquipoComponent from '../components/EquipoComponent';


const Nosotros = () => {
  return (
    <div>
      <Title />
      <Hero
        heading="Nuestros socios fundadores"
        heading1Size=""
        size="md:pt-10 mt-[75px]"
        isBold={true}
        itemsPosition="md:items-start xl:pl-[300px] md:pl-[100px] md:py-[200px] py-[100px] items-center "
        fontSize="md:text-[56px] text-[36px]"
        bgPhoto1="LogoATBlanco.png"
        bgPhotoSizing="absolute md:-top-20  scale-50 md:scale-100 -top-36  -z-0 "
      />

      <div className="flex flex-col md:flex-row md:justify-around md:mt-[50px] md:mx-0 md:px-20 px-8 md:mb-[200px] mt-10 ">
        <div className="flex flex-col space-y-10 md:w-[450px] text-justify">
          <h2 className="fontcolor font-semibold text-[36px]">
            Luis Andrés Aceves de la Cruz
          </h2>
          <p className="tracking-wide md:text-[20px] text-[18px] text-justify">
            Socio Fundador de la Firma y líder de los equipos de Derecho
            Corporativo y de la Empresa, así como de Derecho Urbano e
            Inmobiliario.
            <br />
            <br />
            Licenciado en Derecho y Maestro en Derecho Privado por la
            Universidad Panamericana, campus Guadalajara.
            <br />
            <br />
            Con más de once años de experiencia, Luis Andrés ha asesorado
            exitosamente a clientes en la planeación, ejecución,
            comercialización y gestión jurídica de proyectos inmobiliarios de
            distintos giros ubicados en diversos puntos de la República
            Mexicana.
            <br />
            <br />
            Además, ha asesorado exitosamente a clientes en la estructuración y
            ejecución de vehículos legales para distintos fines comerciales,
            así como en la implementación y acompañamiento en materia de
            Gobierno Corporativo, entre otros.
            <br />
            <br />
            Obtuvo la certificación por el Instituto de Justicia Alternativa del
            Estado de Jalisco como Prestador de Servicios de Métodos Alternos
            de Solución de Conflictos (mediador, conciliador y árbitro).
          </p>

          <p className="fontcolor font-bold tracking-wide">
            Correo:
            <br /> aa@acevestorres.com
          </p>
        </div>
        <div className="flex flex-col  space-y-4 md:w-[450px] md:mt-0 mt-10">
          <h2 className="fontcolor font-semibold text-[36px]">
            Gerardo Torres González
          </h2>
          <p className="tracking-wide md:text-[20px] text-[18px] text-justify">
            Socio Fundador de la Firma Aceves y Torres Abogados, líder de los
            equipos de Litigio y Solución de Controversias, así como de Derecho
            Corporativo y de la Empresa.
            <br />
            <br />
            Licenciado en Derecho y Maestro en Derecho Privado por la
            Universidad Panamericana, campus Guadalajara. Actualmente es
            profesor de la misma casa de estudios, en las materias de Teoría
            General de las Obligaciones (2016 a la fecha) y Solución Alternativa
            de Controversias (desde 2017 a la fecha).
            <br />
            <br />
            Con más de once años de experiencia, en su práctica profesional
            Gerardo ha asesorado exitosamente a clientes nacionales e
            internacionales en litigios de naturaleza civil, mercantil y
            administrativa.
            <br />
            <br />
            Además, ha asesorado exitosamente a clientes en el diseño,
            organización e implementación de estructuras contractuales,
            societarias y fiduciarias para sus empresas y negocios.
            <br />
            <br />
            En el año de 2023 fue incluido en el prestigiado ranking de Chambers
            and Partners, en el área de General Business Law: Guadalajara.
          </p>

          {/* <Image
                src="/GTGBanner.png"
                alt="My Image"
                width={214}
                height={171}
                /> */}
          <div className="flex justify-center items-center">
              <img src="/GTGBanner.png" className="w-[214px] h-[171px]" alt="" />
          </div>
          <p className="fontcolor font-bold tracking-wide">
            Correo:
            <br /> gt@acevestorres.com
          </p>
        </div>
      </div>


      <EquipoComponent/>

    



      <Footer />
    </div>
  );
};

export default Nosotros;
