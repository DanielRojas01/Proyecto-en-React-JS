import React from 'react';
import "../styles/pages/ServiciosPage.css"
const ServiciosPage = (props) => {
    return (
        <div className="servicios">
            <h2>Servicios</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                        omnis sed tenetur officia autem laudantium numquam voluptas.
                        officia autem laudantium numquam voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                        omnis sed tenetur officia autem laudantium numquam voluptas.
                        officia autem laudantium numquam voluptas.</p>
            <div className="servicio">
                <img src="img2/fotoReact.jpg" alt="react" />
                <div className="info">
                    <h4>Desarrollo Web</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                        omnis sed tenetur officia autem laudantium numquam voluptas.
                        officia autem laudantium numquam voluptas.
                    </p>
                </div>
            </div>

            <div className="servicio">
                <img src="img2/SoporteTecnico.jpg" alt="soporte" />
                <div className="info">
                    <h4>Soporte IT</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                        omnis sed tenetur officia autem laudantium numquam voluptas.
                        officia autem laudantium numquam voluptas.
                    </p>
                </div>
            </div>

            <div className="servicio">
                <img src="img2/solucionesinfra.jpg" alt="infra" />
                <div className="info">
                    <h4>Soluciones de Infraestructura</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                        omnis sed tenetur officia autem laudantium numquam voluptas.
                        officia autem laudantium numquam voluptas.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default ServiciosPage;