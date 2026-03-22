// JavaScript per mostrar la carta 
const seccions = document.querySelectorAll('.plats-section');

seccions.forEach(seccio => {
  const titol = seccio.querySelector('h2, h3');
  if (titol) { // Verificació de seguretat
    titol.style.cursor = 'pointer';
    titol.addEventListener('click', () => {
      const plats = seccio.querySelector('.plats');
      if (plats) {
        // Millor ús de classes o comprovació de l'estat real
        const isHidden = getComputedStyle(plats).display === 'none';
        plats.style.display = isHidden ? 'block' : 'none';
      }
    });
  }
});

// JavaScript per mostrar confirmació de reserves
const form = document.getElementById("reservationForm");
const table = document.getElementById("reservationTable");
const tableBody = document.getElementById("reservationTableBody");
const confirmationText = document.getElementById("confirmationText");

// Afegim una verificació per evitar errors si el formulari no existeix en aquesta pàgina
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Agafa els valors del formulari
    const name = document.getElementById("name").value;
    const people = document.getElementById("people").value;
    const date = document.getElementById("date").value;
    const hour = document.getElementById("hour").value;

    // Mostra el text i la taula
    if (confirmationText) confirmationText.style.display = "block";
    if (table) table.style.display = "table";

    // Crea la fila
    const row = document.createElement("tr");
    
    // En lloc de posar el color amb JS, és millor fer-ho amb CSS (nth-child)
    // Però mantenim la teva lògica d'alternança si ho prefereixes:
    const rowCount = tableBody.querySelectorAll("tr").length;
    row.style.backgroundColor = rowCount % 2 === 0 ? "#f2f2f2" : "#ffffff";

    row.innerHTML = `
        <td>${name}</td>
        <td>${people}</td>
        <td>${date}</td>
        <td>${hour}</td>
    `;

    tableBody.appendChild(row);

    // Reseteja el formulari
    form.reset();
  });
}