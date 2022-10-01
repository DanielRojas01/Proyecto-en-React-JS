
import React from "react";
const HomePage = (props) => {
    return(
        <main class="holder">
      <div>
        <img src="img/home/img01.jpg" alt="avion" />
      </div>
      <div class="columnas">
        <div class="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
            ipsam. Tenetur perspiciatis qui maxime! Consequuntur eos veniam quas
            optio. Esse obcaecati temporibus quasi! Culpa at itaque reiciendis
            eum dolorum optio.
          </p>
        </div>
        <div class="Testimonios">
            <h2>Testimonios</h2>
            <div class="testimonio">
                <span class="cita">Simple Excelente</span>
                <span class="autor">Juan Gomez</span>
            </div>
        </div>
      </div>
    </main>
    );
}
export default HomePage;