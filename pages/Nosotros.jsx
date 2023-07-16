import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Link from 'next/link'
import Title from '../components/Title'
import Image from 'next/image'

const Nosotros = () => {
    return (
        <div>
            <Title/>
            <Hero heading="- Nuestros socios fundadores" size="md:h-[600px] h-[600px]" isBold={true} fontSize="56px" bgPhoto="LogoAcevesGrande.png" />

            <div className="flex justify-center md:space-x-[150px] mt-[50px]">
                <div className="flex flex-col space-y-10 md:w-[400px] ">
                    <h2 className='fontcolor font-semibold text-[24px]'>Luis Andrés Aceves de la Cruz</h2>
                    <p className='tracking-wide'>Socio Fundador de la Firma y líder de los equipos de Derecho Corporativo y de la Empresa, así como de Derecho Urbano e Inmobiliario.<br /><br />Licenciado en Derecho y Maestro en Derecho Privado por la Universidad Panamericana, campus Guadalajara.<br /><br />Con más de once años de experiencia, Luis Andrés ha asesorado exitosamente a clientes en la planeación, ejecución, comercialización y gestión jurídica de proyectos inmobiliarios de distintos giros ubicados en diversos puntos de la República Mexicana.<br /><br /> Además, ha asesorado exitosamente a clientes en la estructuración y ejecución de vehículos legales para distintos fines comerciales, así como en la implementación y acompañamiento en materia de Gobierno Corporativo, entre otros.<br /><br />Obtuvo la certificación por el Instituto de Justicia Alternativa del Estado de Jalisco como Prestador de Servicios de Métodos Alternos de Solución de Conflictos (mediador, conciliador y árbitro). </p>

                    <p className='fontcolor font-bold tracking-wide'>Correo: <br /> aa@acevestorres.com</p>
                </div>
                <div className="flex flex-col space-y-10 md:w-[400px]">
                    <h2 className='fontcolor font-semibold text-[24px]'>Gerardo Torres González</h2>
                    <p className='tracking-wide'>Socio Fundador de la Firma Aceves y Torres Abogados, líder de los equipos de Litigio y Solución de Controversias, así como de Derecho Corporativo y de la Empresa.<br /><br /> Licenciado en Derecho y Maestro en Derecho Privado por la Universidad Panamericana, campus Guadalajara. Actualmente es profesor de la misma casa de estudios, en las materias de Teoría General de las Obligaciones (2016 a la fecha) y Solución Alternativa de Controversias (desde 2017 a la fecha).<br /><br /> Con más de once años de experiencia, en su práctica profesional Gerardo ha asesorado exitosamente a clientes nacionales e internacionales en litigios de naturaleza civil, mercantil y administrativa.<br /><br />Además, ha asesorado exitosamente a clientes en el diseño, organización e implementación de estructuras contractuales, societarias y fiduciarias para sus empresas y negocios.<br /><br /> En el año de 2023 fue incluido en el prestigiado ranking de Chambers and Partners, en el área de General Business Law: Guadalajara.</p>
                    <p className='fontcolor font-bold tracking-wide'>Correo: <br /> aa@acevestorres.com</p>
                </div>
            </div>


            <div className="relative md:mt-[100px] flex flex-row justify-start">
                <img src="/HomePhoto1.png" alt="" className="xl:w-[900px]" />
                <div className="bg-gray-200 md:w-[760px] xl:w-[900px]  md:bottom-[-77px] right-0 h-[487px] flex items-center justify-center">
                    <div className="flex flex-col items-center space-y-10">
                        <h4 className='fontcolor font-bold text-[28px]'>Prácticas anticorrupción</h4>
                        <p className="md:mx-36 font-regular fontcolor  leading-[35px] md:w-[600px] text-justify">
                        La firma y sus integrantes nos hemos ceñido a diversos ordenamientos e iniciativas de prácticas de ética profesional y anticorrupción, como lo son (i) el Código de Ética Profesional de la Barra Mexicana, Colegio de Abogados y (ii) la Iniciativa de Integridad Judicial de la International Bar Association: Compromiso de Anticorrupción Judicial.
                        </p>
                    </div>
                </div>
            </div>
   
            <div className="flex justify-center md:my-[187px]">
                <Image src='/Balanza.png'
                width={80}
                height={80}
                />
            </div>


            
            
            
            <Footer/>
        </div>
    )
}

export default Nosotros
