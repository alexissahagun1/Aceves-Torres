import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function App() {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="5213316982084"
        accountName="Stella Solar Atención a Clientes"
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage="Hola! ¿En qué te podemos ayudar?"
        statusMessage=""
        placeholder="Escribe un mensaje"
      />
    </div>
  );
}
