import React from "react";
import '../About.css';

document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG') {
      e.preventDefault();  // Impede o menu de contexto para imagens
  }
});

const About = () => {
    return (
      <div className="p-10 text-center">
        <h2 className="skills animated no-select">Skills</h2>
        <img src="/images/skills.png" alt="Skills" className="skillicon animated" />
        <img src="/images/skills tree.png" alt="Skills Tree" className="skilltree animated overflow-auto" />
        <img src="/images/linhaamarela.png" alt="Linha Amarela" className="linhaamarelaskill animated" />
        <img src="/images/deco1.png" alt="" className="marca-dagua" />
        <p className="sobre animated">Minhas habilidades como programador full stack vão do front-end ao back-end, com foco em criar aplicações eficientes, responsivas e seguras.<br></br>
        Domino frameworks modernos, bancos de dados, APIs e estou sempre em busca de aprender novas tecnologias para evoluir minhas soluções.</p>
      </div>
    );
  };
  
  export default About;
  