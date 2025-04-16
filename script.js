// JavaScript Document
window.onload = function() {
  let titolo = document.querySelector("h1");
  titolo.style.opacity = 0; // Impostiamo la partenza come invisibile
  titolo.style.transition = "opacity 2s ease-in-out"; // Impostiamo il tempo di transizione

  // Dopo che la pagina è caricata, facciamo apparire il titolo
  setTimeout(function() {
    titolo.style.opacity = 1; // Fade-in effetto
  }, 100); // Leggero ritardo per garantire che l'animazione venga eseguita
};

//animazione bottone
let bottone = document.querySelector(".btn");

bottone.addEventListener("mouseover", function() {
  bottone.style.transform = "scale(1.1)"; // Ingrandimento del bottone
  bottone.style.backgroundColor = "#2ecc71"; // Cambia il colore
});

bottone.addEventListener("mouseout", function() {
  bottone.style.transform = "scale(1)"; // Ritorna alla dimensione originale
  bottone.style.backgroundColor = "#27ae60"; // Colore originale
});

// Data di scadenza dell'offerta (2 settimane da oggi)
  const countDownDate = new Date("April 29, 2025 23:59:59").getTime();

  const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      days + "g " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "L'offerta è scaduta!";
    }
  }, 1000);


// Scorrimento fluido verso l'alto
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }