function toggleInfoSection() {
    var infoSection = document.getElementById("info-section");
    infoSection.classList.toggle("show");
}

if (!localStorage.miniGamesStatus) {
    localStorage.miniGamesStatus = JSON.stringify([false, false, false, false, false, false]);
  }



const miniGamesStatus = JSON.parse(localStorage.miniGamesStatus);

// Funkcja, która zlicza ilość wartości true w tablicy
const countTrueValues = (array) => array.reduce((count, value) => count + (value === true ? 1 : 0), 0);


// Aktualizacja wyświetlanego licznika na stronie
var gameCounterElement = document.getElementById("game-counter");

// Wywołaj funkcję, aby uzyskać ilość wartości true w tablicy
const gameCounter = countTrueValues(miniGamesStatus);
localStorage.setItem("gameCounter", gameCounter);
gameCounterElement.textContent = gameCounter;