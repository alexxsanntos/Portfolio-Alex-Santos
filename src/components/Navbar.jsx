import { Link } from "react-router-dom";
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between navbar">
      <h3 className="text-xl font-bold no-select">Alex Santos - Portfolio</h3>
      <div>
        <Link to="/" className="mx-2 font-bold menu no-select">Início</Link>
        <Link to="/about" className="mx-2 font-bold menu no-select">Sobre Mim</Link>
        <Link to="/projects" className="mx-2 font-bold menu no-select">Projetos</Link>
        <Link to="/contact" className="mx-2 font-bold menu no-select">Contato</Link>
      </div>
    </nav>
  );
};

export default Navbar;