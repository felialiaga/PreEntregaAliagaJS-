
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
