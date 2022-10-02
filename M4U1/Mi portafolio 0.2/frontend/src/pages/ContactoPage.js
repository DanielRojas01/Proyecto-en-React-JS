import React from 'react';
import '../styles/pages/ContactoPage.css'
const ContactoPage = (props) =>{    
return (
    <div class="consultas">
        <div class="redes-sociales">
            <h2>Daniel Rojas</h2>
            <div>
            <a href="https://www.linkedin.com/in/danielrojas01" target="-blank">
            <img class="imag-container" src="imgcontac/linkedin.ico" alt="linkedin" id="ico"/></a>
            <a href="https://www.instagram.com/danyyunior/ " target="-blank">
            <img class="imag-container" src="imgcontac/instagram.ico" alt="instagram" id="ico"/></a>
            <a href="https://github.com/DanielRojas01" target="-blank">
            <img class="imag-container" src="imgcontac/github.ico" alt="github" id="ico"/></a>
            </div>
        </div>

        <div class="preguntas">
            <h2>Preguntas</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="mail">E-mail:</label>
                    <input type="email" name="mail" placeholder="ejejmplo@ejemplo.com" />
                </p>
                <p>
                    <label for="nom">Empresa:</label>
                    <input type="text" name="empresa" placeholder="nombre..." />
                </p>
                <p>
                    <label for="text">Pregunta:</label>
                    <select name="motivo" id="motivo">
                        <option value="duda-general">Duda General</option>
                        <option value="entrevista">Conocerte en entrevista</option>
                        <option value="propuesta">Envio de propuesta</option>
                    </select>
                    <p>
                        <textarea name="pregunta" cols="40" rows="10" placeholder="Escribir aquí..."></textarea>
                    </p>
                </p>
                <p class="acciones">
                    <input type="submit" value="Enviar" />
                </p>
            </form>
        </div>
    </div>
);
}
export default ContactoPage;