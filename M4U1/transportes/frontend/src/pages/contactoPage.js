
import React from "react";
const contactoPage = (props) => {
    return(
      <main class="holder contacto">
        <div>
          <h2>Contacto Rapido</h2>
          <form action="" class="formulario">
            <p>
              <label for="nombre">Nombre</label>
              <input type="text" name=""/>
            </p>
            <p>
              <label for="nombre">Email</label>
              <input type="email" name=""/>
            </p>
            <p>
              <label for="nombre">Telefono</label>
              <input type="number" name=""/>
            </p>
            <p>
              <label for="nombre">Mensaje</label>
              <textarea name=""></textarea>
            </p>
            <p>
              <input type="submit" value="Enviar"/>
            </p>
          </form>
        </div>
  
        <div class="datos">
          <h2>Otras Vias de comunicacion</h2>
          <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
          <ul>
            <li>Telefono 22222222</li>
            <li>Email pepe@pepe.pepe</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Skype</li>
          </ul>
        </div>
  
      </main>
        );
}
export default contactoPage;