const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log (input.value)
console.log (
    {
        h1,
        p,
        parrafo,
        pid,
        input,
    }
);

h1.innerHTML = 'Business <br> manager';
h1.innerText = 'Business <br> manager'; // Solo texto
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg');
console.log(img);

pid.innerHTML = "";
pid.append(img);