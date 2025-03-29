import React from "react";
import '../Projects.css';

const Projects = () => {
    return (
      <div className="p-10 text-center">
        <h2 className="projetos animated no-select">Projetos</h2>
        <br/>
        <br/> 
        <h3 className=" animated no-select">Projeto Portfolio Javascript (Em criação) ✅</h3>
        <h3 className="description animated no-select">Portfolio Alternativo criado manualmente usando Javascript.<br />
Feito com React.js, Node.js e Tailwind.</h3>
<a href="https://www.seusite.com" target="_blank"></a>
<h3 className="description2 animated no-select">Link: https://meusite.com.br</h3>

<h3 className="description3 animated no-select">Criador por Alex Santos</h3>
<img src="/images/deco1.png" alt="" className="marca-dagua" />

        <br/>
        <br/> 
        <h3 className=" animated no-select">Projeto Portfolio Typescript (Em criação)✅</h3>
        <h3 className="description animated no-select">Portfolio para terceiro criado usando Typescript.
Feito com Typescript, Tailwind e PostCSS.</h3>
<a href="https://www.seusite.com" target="_blank"></a>
<h3 className="description2 animated no-select">Link: https://meusite.com.br</h3>

<h3 className="description3 animated no-select">Criador por Alex Santos</h3>
<img src="/images/deco1.png" alt="" className="marca-dagua" />


      </div>
    );
  };
  
  export default Projects;
  