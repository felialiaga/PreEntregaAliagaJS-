/*
IF
FOR
WHILE
FUNCIONES
*/
/*
OBJETOS
ARRAYS
FUNCIONES ORDEN SUPERIOR
*/


function agregarOrganizador(nombre){
    let edadUsuario = parseInt(prompt("Ingrese su edad:"));
    let entrada = false;

    if (edadUsuario >= 18 && edadUsuario < 40){
        alert("Puedes pasar.");
        entrada = true;
    }else{
        alert("No puedes pasar.");
    }

    while(entrada === true){
        let tipoEntrada = parseInt(prompt("Indique el tipo (número): 1- Normal, 2- Conocido, 3- VIP"));

        switch(tipoEntrada){
            case 1:
                alert("Puedes pasar a la pista normal.");
                break;
            case 2:
                let comprobacion = prompt("Indique el nombre del Organizador").toUpperCase();
                if(comprobacion === (nombre).toUpperCase()){
                    alert("Puedes pasar a la pista de conocidos y amigos del organizador.");
                    break;
                }else{
                    alert("Por gracioso te vas de la fiesta.");
                    break;
                }
            case 3:
                alert("Puedes pasar a la sala VIP subiendo las escaleras.");
                break;
            default:
                alert("No seas chistoso, no puedes entrar a la fiesta.");
                break;
        }

        break;
    }
}

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


let operacion = prompt("Indique: 1) Entrar a la fiesta, 2) Programar evento");




while (operacion != "esc") {
    switch (operacion) {
        case "1":
            agregarOrganizador("Felipe Aliaga");
            break;

        case "2":
            let tipo = prompt("Ingrese el tipo de evento:");
            let fecha = prompt("Ingrese la fecha del evento:");
            let cantidad = parseInt(prompt("Ingrese la cantidad de personas que asisten al evento:"));

            let busqueda = evento.some((item) => item.dia === fecha);

            if(busqueda){
                alert("Lo siento! Esa fecha ya se encuentra ocupada.");
            }else{
                evento.push(new Eventos(tipo, fecha, cantidad));
                alert(`Su ${tipo} fue agendada para el día ${fecha}, con un total de ${cantidad} de personas`);
            }
            

            break;

        default:
            alert("Ingrese una opción válida.");
            break;
    }

    operacion = prompt("Indique: 1) Entrar a la fiesta, 2) Programar fiesta");
    
}