
function aprobado(){
    var alumnos = [{
        nombre: 'Juan Gomez',
        nota: 7
      }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
      }, {
        nombre: 'Roxana García',
        nota: 8
      }, {
        nombre: 'Luciano Lopez',
        nota: 5
      }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
      }, {
        nombre: 'Florencia Martinez',
        nota: 10
      }, {
        nombre: 'Raul Sanchez',
        nota: 7
      }, 
      {
        nombre: 'Sandra Figueroa',
        nota: 8
      }];
}

function alternar(){
    const alternar = document.getElementsByClassName('alternar')[0];          
         
    /**
     * classList representa la lista de clases asignadas a un elemento
     * toggle nos permite "prender" o "apagar" una clase en un objeto
     * add agrega la clase o clases que le pasemos
     * remove remueve la clase o clases que le pasemos
     */
    alternar.addEventListener('click', function(e) {
        e.currentTarget.classList.toggle('activo');
    });
}