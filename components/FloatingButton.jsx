import React from 'react'
import Link from 'next/link'

const FloatingButton = () => {
    return (

        <Link href="/Contacto">
            <div className="flex justify-center md:justify-start">
                <div className="fixed md:left-0 md:ml-8 md:bottom-[40px] bottom-0 flex z-10">

                    <button type="button" style={{backgroundColor: "rgb(255, 127, 48)"}} className="text-white  font-medium rounded-lg md:text-lg px-40 md:px-5 py-2.5 text-center inline-flex items-center scale-100 md:hover:scale-125 hover:md:mr-8 ease-in duration-300">
                        Contáctanos
                        <svg aria-hidden="true" className="hidden md:block ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    
                </div>

            </div>
        </Link>
    )
}




export default FloatingButton
