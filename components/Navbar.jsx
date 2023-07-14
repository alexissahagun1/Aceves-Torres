import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/LogoAcevesTorres.png"
import { useRouter } from 'next/router'
import {AiOutlineMenu, AiOutlineClose}  from "react-icons/ai"


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const router = useRouter()
    const currentRoute = router.pathname



    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white">
            <div className="2xl:max-w-[1750px] max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Link href='/Home'>
                    <div className="cursor-pointer">
                        <Image src={logo}
                        width={299}
                        height={27}
                        />
                    </div>

                </Link>
                <ul className="hidden sm:flex text-sm uppercase space-x-5 font-bold leading-[5] tracking-[19] ">
                    <li className="p-4">
                        <Link href="/Home">
                            <a className={currentRoute === "/Home" ? "text-black" : "text-gray-400"}>Home</a>
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link href="/Servicios">
                            <a className={currentRoute === "/Servicios" ? "text-black" : "text-gray-400"}>Servicios</a>
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link href="/Nosotros">
                            <a className={currentRoute === "/Nosotros" ? "text-black" : "text-gray-400"}>Nosotros</a>
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link href="/Contacto">
                            <a className={currentRoute === "/Contacto" ? "text-black" : "text-gray-400"}>Contactános
                            </a>
                        </Link>
                    </li>
                    
                </ul>
                {/* Mobile Button Icon */}
                <div onClick={handleNav} className="block sm:hidden z-10 text-black">
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
                {/* Mobile Menu */}
                <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur bg-white/30 w-full h-screen  text-center ease-in duration-300" :  "sm:hidden opacity-100 absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center backdrop-blur bg-white/30 w-full h-screen  text-center ease-in duration-300"}>
                    <ul className="space-y-5">
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Home">Home</Link>
                        </li>
                        {/* <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Soluciones#Industrias">Industrias</Link>
                        </li> */}
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Soluciones">Soluciones</Link>
                        </li>
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Residencial">Residencial</Link>
                        </li>
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Industria">Industria</Link>
                        </li>
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Nosotros">Nosotros</Link>
                        </li>
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar