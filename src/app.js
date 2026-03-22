import 'animate.css';

const hamburguesa = document.querySelector('.hamburguesa');
const myLinks = document.getElementById('myLinks');

hamburguesa.addEventListener('click', () => {
  myLinks.classList.toggle('mostra');
});