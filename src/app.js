import 'animate.css';

const hamburguesa = document.querySelector('.hamburguesa');
const myLinks = document.getElementById('myLinks');

hamburguesa.addEventListener('click', () => {
  myLinks.classList.toggle('mostra');
});

// Funció per activar el vídeo real de YouTube
function carregarLazyYoutube() {
  const elementsYoutube = document.querySelectorAll('.lazy-youtube');

  elementsYoutube.forEach((contenidor) => {
    // 1. Busquem el botó provisional que hem posat a l'HTML
    const botoPlay = contenidor.querySelector('.play-preview-btn');
    const videoSrc = contenidor.getAttribute('data-src');

    if (botoPlay && videoSrc) {
      // Quan l'usuari fa clic al botó, injectem l'iframe real de cop
      botoPlay.addEventListener('click', () => {
        contenidor.innerHTML = `
          <iframe src="${videoSrc}" 
                  title="Recepta pizza napolitana"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen 
                  style="width: 100%; height: 100%; border: 0; aspect-ratio: 16 / 9;">
          </iframe>
        `;
      });
    }
  });
}

// Executem la funció quan la pàgina s'hagi carregat
document.addEventListener('DOMContentLoaded', carregarLazyYoutube);