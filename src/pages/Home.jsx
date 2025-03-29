import React from "react";
import '../Home.css';

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();  // Impede o menu de contexto para imagens
    }
});

const Home = () => {
    return (
      <div className="tudo p-10">

        <h5 className="intro animated no-select fixed-text">Programador full-stack que gosta de  transformar<br /> ideias em 
            soluções digitais de verdade. Gosto de <br />resolver problemas complexos com código limpo e <br />eficiente, 
            sempre dando prioridade na performance.<br /> Tecnologia é meu jeito de fazer a diferença.</h5>
        <h2 className="nomealex animated no-select">Alex <br />Santos</h2>
        <h4 className="webdesigner animated font-bold no-select fixed-text">Programador Full Stack e Web Designer</h4>


        <img src="/images/1.png" alt="Memoji Alex" className="memojialex animated" />
        <img src="/images/linhaamarela.png" alt="Linha Amarela" className="linhaamarela animated" />
        <img src="/images/linhaamarela.png" alt="Linha Amarela" className="linhaamarela2 animated" />
        <img src="/images/linhaamarela.png" alt="Linha Amarela" className="linhaamarela3 animated" />

        <a href="https://www.seusite.com" target="_blank">
        <img src="/images/curriculum.png" alt="Botão Curriculum" className="curriculum animated aumentar" />
        </a>


        <img src="/images/linkedin.png" alt="Linkedin Icon" className="linkedin aumentar animated" />
        <img src="/images/wpp.png" alt="Whatsapp Icon" className="wpp aumentar animated" />
        <img src="/images/email.png" alt="Email Icon" className="email aumentar animated" />
        <img src="/images/deco1.png" alt="" className="marca-dagua" />

      </div>
      
    );
  };
  
  export default Home;
  