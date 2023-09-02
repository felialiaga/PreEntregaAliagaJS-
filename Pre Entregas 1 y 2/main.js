// /*
// IF
// FOR
// WHILE
// FUNCIONES
// */
// /*
// OBJETOS
// ARRAYS
// FUNCIONES ORDEN SUPERIOR
// */


// function agregarOrganizador(nombre){
//     let edadUsuario = parseInt(prompt("Ingrese su edad:"));
//     let entrada = false;

//     if (edadUsuario >= 18 && edadUsuario < 40){
//         alert("Puedes pasar.");
//         entrada = true;
//     }else{
//         alert("No puedes pasar.");
//     }

//     while(entrada === true){
//         let tipoEntrada = parseInt(prompt("Indique el tipo (número): 1- Normal, 2- Conocido, 3- VIP"));

//         switch(tipoEntrada){
//             case 1:
//                 alert("Puedes pasar a la pista normal.");
//                 break;
//             case 2:
//                 let comprobacion = prompt("Indique el nombre del Organizador").toUpperCase();
//                 if(comprobacion === (nombre).toUpperCase()){
//                     alert("Puedes pasar a la pista de conocidos y amigos del organizador.");
//                     break;
//                 }else{
//                     alert("Por gracioso te vas de la fiesta.");
//                     break;
//                 }
//             case 3:
//                 alert("Puedes pasar a la sala VIP subiendo las escaleras.");
//                 break;
//             default:
//                 alert("No seas chistoso, no puedes entrar a la fiesta.");
//                 break;
//         }

//         break;
//     }
// }



// let operacion = prompt("Indique: 1) Entrar a la fiesta, 2) Agendar evento");




// while (operacion != "esc") {
//     switch (operacion) {
//         case "1":
//             agregarOrganizador("Felipe Aliaga");
//             break;

//         case "2":
//             let tipo = prompt("Ingrese el tipo de evento:");
//             let fecha = prompt("Ingrese la fecha del evento:");
//             let cantidad = parseInt(prompt("Ingrese la cantidad de personas que asisten al evento:"));

//             let busqueda = evento.some((item) => item.dia === fecha);

//             if(busqueda){
//                 alert("Lo siento! Esa fecha ya se encuentra ocupada.");
//             }else{
//                 evento.push(new Eventos(tipo, fecha, cantidad));
//                 alert(`Su ${tipo} fue agendada para el día ${fecha}, con un total de ${cantidad} de personas`);
//             }
//             break;

//         default:
//             alert("Ingrese una opción válida.");
//             break;
//     }

//     operacion = prompt("Indique: 1) Entrar a la fiesta, 2) Programar fiesta");
    
// }


let entrarBoton = document.getElementById("botonEntrar");
let agendarBoton = document.getElementById("botonAgendar");
let entrar = document.getElementById("entrar");
let agendar = document.getElementById("agendar");
let eventos = document.getElementById("eventos");


class Eventos{
    constructor(tipo,dia,cantidad){
        this.tipo = tipo;
        this.dia = dia;
        this.cantidad = cantidad;
    }
}

const evento = [];

evento.push(new Eventos("fiesta","17/08", 250));
evento.push(new Eventos("fiesta 18","19/09", 520));
evento.push(new Eventos("bautismo","9/10", 150));
evento.push(new Eventos("casamiento","31/9", 300));





agendarBoton.addEventListener("click", () => {

    let cuestionario = document.createElement("form");

    cuestionario.className = "cuestionario";
    cuestionario.innerHTML = `
        <input type="text" class="inputs" id="tipo" placeholder="Ingrese el tipo">
        <input type="text" class="inputs" id="fecha" placeholder="xx/xx">
        <input type="text" class="inputs" id="cantidad" placeholder="Cantidad de personas">
        <button id="agendarEvento">agendar</button>
    `;

    agendar.append(cuestionario); 

    let agendarEvento = document.getElementById("agendarEvento");
    

    agendarEvento.addEventListener("click", e => {

        let fecha = document.getElementById("fecha");
        let tipo = document.getElementById("tipo");
        let cantidad = document.getElementById("cantidad");

        if (evento.some(item => item.dia === fecha.value)){
            cuestionario.innerHTML = `
                <h4 class="rojo">Fecha ocupada!!</h4>
            `;

            agendar.append(cuestionario); 
        }else {
            evento.push(new Eventos(tipo.value, fecha.value, cantidad.value))

            cuestionario.innerHTML = `
                <h4 class="verde">Evento agendado!!</h4>
            `;
            agendar.append(cuestionario); 

            localStorage.setItem("Eventos", JSON.stringify(evento));
        }
    }); 
});






// agendarEvento.addEventListener("click", (e) => {
//     e.preventDefault();

    
//     let fecha = document.getElementById("fecha");
//     console.log(fecha.value);


// });



// evento.forEach(item => {
//     let resultado = document.createElement("div");

//     resultado.className = "listado";
//     resultado.innerHTML = `
//         <h3>${item.tipo}</h3>
//         <h4>Fecha: ${item.dia}</h4>
//         <h4>Cantidad de personas: ${item.cantidad}</h4>
//     `;

//     eventos.append(resultado);
// });

