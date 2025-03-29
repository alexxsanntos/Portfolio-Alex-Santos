import React from "react";
import '../Contact.css';

const Contact = () => {
    return (
      <div className="p-10 text-center">
        <h2 className="contatos animated no-select">Contato</h2>
        <img src="/images/linkedin.png" alt="Linkedin Icon" className="linkedin aumentar animated" />
        <img src="/images/wpp.png" alt="Whatsapp Icon" className="wpp aumentar animated" />
        <img src="/images/email.png" alt="Email Icon" className="email aumentar animated" />
      </div>
    );
  };
  
  export default Contact;
  