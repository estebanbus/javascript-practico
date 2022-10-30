const h1 = document.querySelector('h1');
const form = document.querySelector('.form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('.result')

form.addEventListener('submit', sumarInputsValue) // AddEventLisener es un escuchador de eventos cada vez que pase el evento escucha el codigo Js que yo le escriba.
// Hay que enviarle dos argumentos 1.- es el evento nombre del evento que queramos escuchar y 2.- Es el codigo js que queramos llamar cuando suceda este evento addEventListener('Evento', 'codigo a ejecutar')

function sumarInputsValue (event){
    event.preventDefault();
    const sumaInputs = parseInt(input1.value)  + parseInt(input2.value);
    result.innerHTML = 'Resultado: ' + sumaInputs
}