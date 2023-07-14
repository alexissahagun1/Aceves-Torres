import React, { useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ isOverlapped }) => {
  const hubspotFormRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//js.hsforms.net/forms/embed/v2.js';

    document.body.appendChild(script);

    const timeout = setTimeout(() => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '40146263',
          formId: 'b76956f8-4d83-4370-91da-9fabce5f9764',
          target: '#hubspot-form',
        });
      }
    }, 1000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
      script.remove();
    };
  }, []);

  const handleFormSubmission = () => {
    toast.success('¡Gracias por contactarnos!', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleFormSubmissionError = () => {
    toast.error('¡Ocurrió un error!', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  useEffect(() => {
    const hubspotForm = hubspotFormRef.current;
    hubspotForm.addEventListener('submit', handleFormSubmission);
    hubspotForm.addEventListener('hsvalidatedsubmit', handleFormSubmissionError);

    return () => {
      hubspotForm.removeEventListener('submit', handleFormSubmission);
      hubspotForm.removeEventListener('hsvalidatedsubmit', handleFormSubmissionError);
    };
  }, []);

  return (
    <div className={`bg-gray-200 rounded-md border border-gray-300  md:-top-16 ${isOverlapped ? '-top-8 relative' : 'top'} xl:mx-56 lg:mx-24 mx-8 pb-20`}>
      <div className="flex md:flex-row flex-col md:space-x-12 mx-9 my-14">
        <div className="md:w-5/12 w-full">
          <h6 className="uppercase font-bold text-2xl text-gray-700">Solicita una asesoría sin compromiso</h6>
          <p className="mt-9 text-base font-medium leading-7 tracking-tight">
            Agenda una llamada con uno de nuestros consultores especializados para aclarar cualquier duda y obtener una cotización personalizada y completamente gratuita.
          </p>
        </div>
        <div className="grow">
          <h6 className="text-lg font-medium mb-7 mt-6 md:mt-0">¡Contáctanos!</h6>
          <div ref={hubspotFormRef} id="hubspot-form"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
