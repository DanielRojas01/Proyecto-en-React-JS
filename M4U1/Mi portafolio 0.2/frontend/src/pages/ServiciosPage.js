import React from 'react';
const ServiciosPage = (props) => {
    return (
        <div>
            <h2>Servicios</h2>
            <div class="servicio">
                <img src="img2/fotoReact.jpg" alt="react" />
                <div class="info">
                    <h4>Desarrollo Web</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                        omnis sed tenetur officia autem laudantium numquam voluptas.
                        officia autem laudantium numquam voluptas.
                    </p>
                </div>
            </div>

            <div class="servicio">
                <img src="img2/SoporteTecnico.jpg" alt="soporte" />
                <div class="info">
                    <h4>Soporte IT</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                        omnis sed tenetur officia autem laudantium numquam voluptas.
                        officia autem laudantium numquam voluptas.
                    </p>
                </div>
            </div>

            <div class="servicio">
                <img src="img2/solucionesinfra.jpg" alt="infra" />
                <div class="info">
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