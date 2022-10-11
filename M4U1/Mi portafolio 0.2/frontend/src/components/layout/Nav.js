import { Link } from "react-router-dom";
import "../../styles/layout/Nav.css";
const Nav = (props) => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img className="color" src="img1/logochip.svg" width="60" alt="logo" />
        </Link>
      </div>
      <div className="navegacion">
        <Link to="/">Home</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/conoceme">Conoceme</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
};
export default Nav;
