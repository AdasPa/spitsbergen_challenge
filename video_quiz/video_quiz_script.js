// Table containing info about every stage.
var stages = [
    {
        question: "Podaj nazwę archipelagu o którym jest film.",
        youtubeLink: "https://www.youtube.com/embed/MKeIx4wVjIg",
        password: "svalbard"
    },
    {
        question: "Podaj nazwę miasta w którym ląduje samolot.",
        youtubeLink: "https://www.youtube.com/embed/CvBKs8ts7i0",
        password: "longyearbyen"
    },
    {
        question: "Jak nazywa się polska stacja badawcza na południowym Spitsbergenie?",
        youtubeLink: "https://www.youtube.com/embed/6Wjo_vOG0GI",
        password: "hornsund"
    },
    {
        question: "Co jest przechowywane w banku o którym jest film?",
        youtubeLink: "https://www.youtube.com/embed/2_OEsf-1qgY",
        password: "nasiona"
    },
    {
        question: "Jak nazywa się roślina, która kwitnie na fioletowo wczesną wiosną na Spitsbergenie?",
        youtubeLink: "https://www.youtube.com/embed/AQSSzam7kvs",
        password: "saxifraga"
    },
    {
        question: "Jak nazywa się żona Shreka?",
        youtubeLink: "https://www.youtube.com/embed/1F_MIsbhCXg",
        password: "fiona"
    }
];

var currentStage = 0;

// Load first stage at the beginning.
window.onload = function() {
    loadStageContent(0);
};

function loadStageContent(stageIndex) {
    document.getElementById("stage_number").textContent = stageIndex + 1;
    document.getElementById("youtube_link").value = stages[currentStage].youtubeLink;
    document.getElementById("youtube_frame").src = stages[stageIndex].youtubeLink;
    document.getElementById("question").textContent = stages[stageIndex].question;
}



function submitAnswer() {

    passwordGuess = document.getElementById("password_guess").value;
    passwordGuess = passwordGuess.toLowerCase();

    // Check if the password guess is correct
    if (passwordGuess === stages[currentStage].password) {
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
        document.getElementById("youtube_frame").src = stages[currentStage].youtubeLink;
        document.getElementById("youtube_link").value = stages[currentStage].youtubeLink;
        document.getElementById("question").textContent = stages[currentStage].question;
        document.getElementById("password_guess").value = "";
        document.getElementById("wrong_answer").style.display = "none";
        document.getElementById("next_stage").style.display = "none";
        document.getElementById("correct_answer").style.display = "none";
    } else {
        alert("Gratulacje! Skończyłeś wszystkie etapy.");
        markMiniGameAsComplete(4);
        window.location.href = "../index.html";
    }
}