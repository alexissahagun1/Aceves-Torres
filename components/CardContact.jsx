import React from 'react'

const CardContact = () => {
    return (
            <div className="xl:mx-48 lg:mx-36 mx-8 bg-white rounded-md border border-gray-300 mt-10 mb-4 shadow-xl relative xl:-top-24 lg:-top-16 lg:py-12 py-8 px-14">
                <dl className="grid max-w-screen-md md:gap-32 gap-10  mx-auto text-gray-900 sm:grid-cols-3 flex">
                    <div className="flex flex-col md:text-left justify-center text-center">
                        <dt className="mb-6 text-sm md:text-base font-bold stella-orange">Contacto</dt>
                        <dd className="text-gray-900 text-sm md:text-base">T: 33 2265 0345</dd>
                        <dd className="text-gray-900 text-sm md:text-base">contacto@stellasolar.mx</dd>
                    </div>
                    <div className="flex flex-col md:text-left justify-center text-center">
                        <dt className="mb-6 text-sm md:text-base font-bold stella-orange">Oficinas Corporativas</dt>
                        <dd className="text-gray-900 text-sm md:text-base leading-6">Av. Novelistas 5567, Jardines Vallarta, 45110 Zapopan, Jal.</dd>
                    </div>
                    <div className="flex flex-col md:text-left justify-center text-center">
                        <dt className="mb-6 text-sm md:text-base font-bold stella-orange">Horario de atención</dt>
                        <dd className="text-gray-900 text-sm md:text-base">Lunes - Viernes 9:00 a 17:00 hrs.</dd>
                    </div>
                </dl>
            </div>
    )
}

export default CardContact
