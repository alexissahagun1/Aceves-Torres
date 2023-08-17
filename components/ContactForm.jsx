import React, {useRef} from 'react'
// import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = ({isOverlapped}) => {
    const form = useRef();
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    const toastSuccess = () => {
        toast.success("¡Gracias por contactarnos!" ,{
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
    const toastError = () => {
        toast.error("¡Ocurrió un error!" ,{
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    // const sendEmail = (e) => {
    //     event.preventDefault();
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    //     .then((result) => {
    //     console.log(result.text);
    //     toastSuccess();
    //     }, (error) => {
    //       console.log(error.text);
    //       toastError();
    //   });
    //   e.target.reset()
    // }

    return (
        <div className="md:w-[1000px]">
            <div className="flex md:flex-row flex-col md:space-x-12  md:my-[42px] my-[22px]">
            
                <div className="grow">
                    {/* <form ref={form} onSubmit={sendEmail}  className="space-y-8"> */}
                    <form ref={form} className="space-y-8">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 ">
                            <div>
                                {/* <input type="text" name="firstName" id="email" className=" border-none font-bold text-gray-900 text-sm rounded-sm p-3 w-full" placeholder="Nombre*" required/> */}
                                <input type="text"
                                  class="w-full p-2 text-sm  border-t-0 border-r-0 border-l-0 border-black focus:outline-none focus:ring-0 focus:border-gray-900 focus:border-gray-900 opacity-50 "
                                  placeholder="Nombre" />
                            </div>
                            <div>
                                <input type="text"
                                  class="w-full p-2 text-sm  border-t-0 border-r-0 border-l-0 border-black focus:outline-none focus:ring-0 focus:border-gray-900   opacity-50 "
                                  placeholder="Compañía" />
                            </div>
                            <div className="">
                              <input type="text"
                                    class="w-full p-2 text-sm  border-t-0 border-r-0 border-l-0 border-black focus:outline-none focus:ring-0 focus:border-gray-900 opacity-50 "
                                    placeholder="Email" />
                            </div>
                            <div className="">
                                <input type="text"
                                  class="w-full p-2 text-sm  border-t-0 border-r-0 border-l-0 border-black focus:outline-none focus:ring-0 focus:border-gray-900 opacity-50 "
                                  placeholder="Número telefónico" />
                            </div>
                            <div class="fontcolor sm:col-span-2 md:mt-[40px]">
                                <p>¿Cómo podemos ayudarte?</p>
                            </div>
                            <div class="sm:col-span-2">
                                <input type="text"
                                  class="w-full p-2 text-sm  border-t-0 border-r-0 border-l-0 border-black focus:outline-none focus:ring-0 focus:border-gray-900 opacity-50 "
                                  placeholder="Tu mensaje"/>
                            </div>

                            <div className='flex justify-end sm:col-span-2'>
                              <button type="submit" className='border-none outline-none focus:ring-0 underline underline-offset-4 decoration-1 fontcolor'>
                                Enviar
                              </button>
                            </div>
                        </div>

                        

                       
                    </form>


                    
                </div>
                
        </div>


            <ToastContainer />
    </div>
    )
}

export default ContactForm