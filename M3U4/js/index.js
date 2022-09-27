/*EJERCICIO 1*/
function alter(color){
    document.querySelector('body').style.background=color;
}

/*EJERCICIO 2*/ 
const texto = document.getElementById('texto');
const contar = document.getElementById('contar');
texto.addEventListener('keyup', function()
{contar.innerText = texto.value.length;})

/* EJERCICIO 3*/
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

    const aprobados = alumnos.filter(function(alumno){
      return alumno.nota>=7;
    });
    for(let i=0; i<aprobados.length; i++){
    document.write(`<li>Alumno ${aprobados[i].nombre}, Nota ${aprobados[i].nota}`)}
    document.write("<p>Cantidad de aprobados ", aprobados.length);
  }
