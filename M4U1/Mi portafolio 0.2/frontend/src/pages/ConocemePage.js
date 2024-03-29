import React from "react";
import "../styles/pages/ConocemePage.css";
const ConocemePage = (props) => {
  return (
    <div className="conoceme">
        <div className="datos-personales">
          <div className="foto">
            <img
              className="imag-container"
              src="imgconoceme/perfil.png"
              alt="Daniel"
            />
          </div>
          <div className="texto">
            <h2>Dato Personales</h2>
            <ul>
              <li>Apellido y Nombre: Rojas Daniel Gastón</li>
              <li>Nacionalidad: Argentino</li>
              <li>Fecha de Nacimiento: 20 / 09 / 1991</li>
              <li>Nº CUIL: 20-37047583-1</li>
              <li>Provincia: Buenos aires</li>
              <li>Localidad: Florencio Varela</li>
              <li>Tel celular: 1538578757</li>
              <li>Correo Electrónico: rojas.daniel.gaston@gmail.com</li>
            </ul>

            <h2>Objetivos</h2>
            <ul>
              <li>
                Ser parte de un Equipo técnico de una institución de Salud
                Medica.
              </li>
              <li>
                Brindar lo mejor en mi labor, capacitándome constantemente.
              </li>
              <li>Ser parte de un equipo donde pueda crecer laboralmente.</li>
            </ul>
          </div>
        </div>



        <div className="educacion-y-formacion">
          <h2>Educación y Formación</h2>
          <ul>
            <li>
              <h3>Facha (de-a): Año 2006 - 2010</h3>
              <ul>
                <li>
                  <h4>E.E.T Nº 7 IMPA T.R.Q</h4>
                </li>
                <li>Título: Técnico en mantenimiento de aviónica</li>
                <li>
                  Titulo: Bachillerato, Modalidad Producción de Bienes y
                  Servicios
                </li>
              </ul>
            </li>
            <li>
              <h3>Facha (de-a): Año 2012 - 2018</h3>
              <ul>
                <li>
                  <h4>I.S.F.D Nº 50</h4>
                </li>
                <li>
                  Título: Profesorado de Educación Secundaria en Matemática
                </li>
              </ul>
            </li>
            <li>
              <h3>Facha (de-a): Año 2019 (al presente)</h3>
              <ul>
                <li>
                  <h4>Universidad nacional Arturo Jauretche</h4>
                </li>
                <li>
                  Título de Grado: Ingeniería en informática (Resolución ME N°
                  2157/15)
                </li>
                <li>
                  Título Intermedio: analista informático (Resolución ME N°
                  399/16)
                </li>
              </ul>
            </li>
          </ul>
        </div>



        <div className="conocimientos">
          <h2>Conocimiento</h2>
          <ul>
            <li>
              <h4>Conocimiento de Idiomas</h4>
              <ul>
                <li>Inglés (Básico)</li>
                <li>Aleman (Básico)</li>
              </ul>
            </li>
            <li>
              <h4>Conocimientos de Computación</h4>
              <ul>
                <li>Armado y reparación de pc.</li>
                <li>
                  Instalación, configuración y manipulación Windows
                  2000/xp/7/8/10 y Linux Ubuntu/debian.
                </li>
              </ul>
            </li>
            <li>
              <h4>Conocimientos informáticos</h4>
              <ul>
                <li>Programación Python, C#, Visual Basic, Asembler</li>
                <li>Scripting Shell / Powershell</li>
                <li>Redes WAN/LAN y WIFI Switches y Routers Cisco</li>
                <li>ABM/ AWS Site-to-Site VPN</li>
                <li>Windows server 2012/2016</li>
                <li>
                  Windows Administración AD DS, FileServer, GPO, PrintServer,
                  Firewall, DNS, DHCP
                </li>
                <li>Manejo Hyper V y VMware</li>
                <li>Conocimiento de SQL y NoSQL</li>
              </ul>
            </li>
            <li>
              <h4>Conocimientos Electrónicos</h4>
              <ul>
                <li>Análisis de circuitos, diseño de placas</li>
                <li>Armado y soldaduras</li>
                <li>Herramientas de precisión</li>
                <li>Análisis de señales con osciloscopio</li>
              </ul>
            </li>
            <li>
              <h4>Conocimientos Eléctricos</h4>
              <ul>
                <li>Circuitos potencia redes de alta, media y baja Tensión</li>
                <li>Lógica de Reles</li>
                <li>Lógica de circuitos hidráulicos y neumático</li>
              </ul>
            </li>
            <li>
              <h4>Conocimiento mecánico</h4>
              <ul>
                <li>Partes y tipos de motores</li>
                <li>
                  Manejo de herramientas de banco, de medición de precisión
                </li>
              </ul>
            </li>
          </ul>
        </div>



        <div className="experiencia-laboral">
          <h2>Experiencia Laboral</h2>
          <ul>
            <li>Tesam Argentina S.A, desde 2010 - 2011</li>
            <p>
              Técnico y cadete del servicio de posventa en telecomunicaciones.
              Depósito, compras y laboratorio de prueba de teléfonos
              satelitales.
            </p>
            <li>Telecentro, desde 2016 - 2020</li>
            <p>Operador de soporte técnico (Telecentro) en Call Center, N1.</p>
            <li>Frigorífico Morres, en año 2019</li>

            <p>
              Encargado de sector control de entrada y salida, Sanidad, y Data
              enter.
            </p>

            <li>
              Hospital de Alta Complejidad El Cruce “Néstor Kirchner”, desde
              2020 - 2022
              <ul>
                <li>
                  <h4>Técnico de Soporte IT N1 y N2:</h4>
                  <p>
                    Desarrollando tareas de soporte de mesa de ayuda, tareas de
                    mantenimiento de hardware y software, remoto y en campo.
                    Implementando nuevas ideas de seguridad en Windows Server;
                    Manejos del AD DS, creación de GPOs, Scripting y creación de
                    máquinas virtuales para pruebas. Manipulación del servidor
                    DHCP para otorgar direcciones ipv4 a equipos especiales y
                    ABM.
                  </p>
                </li>
                <li>
                  <h4>Soporte de Aplicaciones N1 y N2:</h4>
                  <p>
                    Creación y Aplicación de Querys sobre lenguaje SQL; en
                    Oracle y postgresSQL en la plataforma de Navikap, ABM.
                    Documentación para el soporte de aplicaciones, recuperación
                    de información, prevención y solucionar errores de
                    integración de 8 aplicaciones. Verificar de servicios
                    mediante de las aplicaciones. Identificar casos y mejorar
                    para pasar soporte N3 externo.
                  </p>
                </li>
                <li>
                  <h4>Técnico de ingeniería hospitalaria:</h4>
                  <p>
                    Detección de problemas, reparación y soldaduras de equipos
                    básicos como Holters y ecógrafos. Manejo de osciloscopios
                    para medición de ruidos. Soldaduras con estaño de no
                    precisión. Instalación de equipos médicos en RED.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>

    </div>
  );
};
export default ConocemePage;
