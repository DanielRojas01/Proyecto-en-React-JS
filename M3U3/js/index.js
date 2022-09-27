function distancia(){
    let dist=parseFloat(prompt("Ingresa La Distancia A Recorrer:" , ""))
    if(0<dist<=1000){
        alert("Medio de transporte ideal es a Pie")
    }
    else if(1000<dist<=10000){
        alert("Medio de transporte ideal es en Bicicleta")
    }
    else if(10000<dist<=30000){
        alert("Medio de transporte ideal es en Colectivo")
    }
    else if(3000<dist<=100000){
        alert("Medio de transporte ideal es en Auto")
    }
    else if(100000<dist){
        alert("Medio de transporte ideal es en Avion")
    }
}

function mayor(){
    let x=1;
    const cantidad=5;
    var mayor=0;
    
    while(x<=cantidad){
        const num=parseFloat(prompt(`escriba un numero ${x} de ${cantidad}:` , ""));
        if(num>mayor){
           var mayor=num;
        }
        x++;
    }
    alert(`El numero mas grande es ${mayor}`);
}