import { Link } from "react-router-dom";
import '../../styles/layout/Header.css';
const Nav = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    <div  class="logo"><Link to="/">
                            <img src="img1/logo2.png" width="100" alt="logo" />
                            <p>Dayyunior</p>
                    </Link></div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/conoceme">Conoceme</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default Nav;
