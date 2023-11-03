function toggleInfoSection() {
    var infoSection = document.getElementById("info-section");
    infoSection.classList.toggle("show");
}

// Pobranie aktualnej wartości licznika z Local Storage
var gameCounter = parseInt(localStorage.getItem("gameCounter")) || 0;

// Aktualizacja wyświetlanego licznika na stronie
var gameCounterElement = document.getElementById("game-counter");
gameCounterElement.textContent = gameCounter;

// Zwiększenie licznika i zapisanie go w Local Storage po kliknięciu w dowolną grę
var gameTiles = document.querySelectorAll(".game-tile");
gameTiles.forEach(function(tile) {
    tile.addEventListener("click", function() {
        if(gameCounter < 6)
            gameCounter++;
        localStorage.setItem("gameCounter", gameCounter);
        gameCounterElement.textContent = gameCounter;
    });
});
