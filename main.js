/*
IF
FOR
WHILE
FUNCIONES
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

agregarOrganizador("Felipe Aliaga");