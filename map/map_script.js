//Creating a map using Leaflet.js
var map = L.map('map').setView([78.8232, 19.7267], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

L.marker([78.22269982973553, 15.62998021952702]).addTo(map)
    .bindPopup('Longyearbyen - tu mieszka najwięcej ludzi')

L.marker([78.06481695602366, 14.230721810440256]).addTo(map)
    .bindPopup('Barentsburg tu mieszkają rosjanie');

L.marker([78.65597533623, 16.34636025146904]).addTo(map)
    .bindPopup('Pyramiden - tu mieszkali rosjanie');

L.marker([77.00616610287548, 15.537219518728637]).addTo(map)
    .bindPopup('Hornsund - polska stacja naukowa');

L.marker([78.2361280629151, 15.491609172408335]).addTo(map)
    .bindPopup('Globalny Bank Nasion - to bezpieczne miejsce na wyspie Spitsbergen, gdzie przechowuje się miliony nasion roślin z całego świata w celu ochrony bioróżnorodności i zapewnienia zabezpieczenia światowego zaplecza genetycznego roślin.')

L.marker([78.36488383348865, 12.82991714304677]).addTo(map)
    .bindPopup('Eidembukta - to tutaj będziemy prowadzić badania');

L.marker([78.92512999072362, 11.924791710116207]).addTo(map)
    .bindPopup('Ny-Ålesund- najdalej na świecie wysunięta na północ funkcjonująca jednostka osadnicza');


// Table containing info about every stage.
var stages = [
    {
        question: "Jak nazywa się największa rosyjska osada na Svalbardzie?",
        passwords: ["barentsburg"]
    },
    {
        question: "Jak nazywa się opustoszałe miasto górnicze na Spitsbergenie, które było kiedyś zamieszkane przez Rosjan?",
        passwords: ["pyramiden"]
    },
    {
        question: "Jak nazywa się polska stacja badawcza na południowym Spitsbergenie?",
        passwords: ["hornsund"]
    },
    {
        question: "Co jest przechowywane w globalnym banku na Spitsbergenie?",
        passwords: ["nasiona"]
    },
    {
        question: "Obok jakiej zatoki będziemy prowadzić badania?",
        passwords: ["eidembukta"]
    },
    {
        question: "Jak nazywa się najdalej wysunięta na północ osada na świecie?",
        passwords: ["ny alesund", "ny-alesund", "ny ålesund", "ny-ålesund"]
    }
];

var currentStage = 0;

// Load first stage at the beginning.
window.onload = function() {
    loadStageContent(0);
};

function loadStageContent(stageIndex) {
    document.getElementById("stage_number").textContent = stageIndex + 1;
    document.getElementById("question").textContent = stages[stageIndex].question;
}

function isCorrectAnswer(guess, passwords) {
    // Check if the guess is included in the list of passwords
    for (var i = 0; i < passwords.length; i++) {
        if (guess === passwords[i]) {
            return true;
        }
    }
    return false;
}

function submitAnswer() {

    passwordGuess = document.getElementById("password_guess").value;
    passwordGuess = passwordGuess.toLowerCase();

    // Check if the password guess is correct
    if (isCorrectAnswer(passwordGuess, stages[currentStage].passwords)) {
        // Show the next stage button and correct answer message
        document.getElementById("wrong_answer").style.display = "none";
        document.getElementById("next_stage").style.display = "block";
        document.getElementById("correct_answer").style.display = "block";
        
    } else {
        // Show a wrong answer message
        document.getElementById("wrong_answer").style.display = "block";
    }

};

function goToNextStage() {
    currentStage++;
    if (currentStage < stages.length) {
        document.getElementById("stage_number").textContent = currentStage + 1;
        document.getElementById("question").textContent = stages[currentStage].question;
        document.getElementById("password_guess").value = "";
        document.getElementById("wrong_answer").style.display = "none";
        document.getElementById("next_stage").style.display = "none";
        document.getElementById("correct_answer").style.display = "none";
    } else {
        alert("Gratulacje! Skończyłeś wszystkie etapy.");
        markMiniGameAsComplete(2);
        window.location.href = "../index.html";
    }
}