import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../styles/layout/Nav.css";
const Nav = (props) => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="img1/logochip.svg" width="60" alt="logo" />
        </Link>
      </div>
      <div className="navegacion">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : undefined} >Home</NavLink>
        <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : undefined} >Servicios</NavLink>
        <NavLink to="/clientes" className={({isActive}) => isActive ? "active" : undefined} >Clientes</NavLink>
        <NavLink to="/conoceme" className={({isActive}) => isActive ? "active" : undefined} >Conoceme</NavLink>
        <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : undefined} >Contacto</NavLink>
      </div>
    </nav>
  );
};
export default Nav;
