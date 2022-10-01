
import React from 'react-router-dom';

const Nav =(props) =>{
    return(    
      <div>
        <div>
            <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/nosotros">Nosotros</link></li>
                <li><link to="/novedades">Servicios</link></li>
                <li><link to="/galeria">Galeria</link></li>
                <li><link to="/novedades">Novedades</link></li>
                <li><link to="/contacto">Contacto</link></li>
            </ul>
        </div>
      </div>);
}
export default Nav;