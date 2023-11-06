// Table containing info about every stage.
var stages = [
    {
        question: "Podaj nazwę archipelagu o którym jest film.",
        youtubeLink: "https://www.youtube.com/embed/MKeIx4wVjIg",
        passwords: ["svalbard", "essa"]
    },
    {
        question: "Podaj nazwę miasta w którym ląduje samolot.",
        youtubeLink: "https://www.youtube.com/embed/CvBKs8ts7i0",
        passwords: ["longyearbyen"]
    },
    {
        question: "Jak nazywa się polska stacja badawcza na południowym Spitsbergenie?",
        youtubeLink: "https://www.youtube.com/embed/6Wjo_vOG0GI",
        passwords: ["hornsund"]
    },
    {
        question: "Co jest przechowywane w banku o którym jest film?",
        youtubeLink: "https://www.youtube.com/embed/2_OEsf-1qgY",
        passwords: ["nasiona"]
    },
    {
        question: "Jak nazywa się roślina, która kwitnie na fioletowo wczesną wiosną na Spitsbergenie?",
        youtubeLink: "https://www.youtube.com/embed/AQSSzam7kvs",
        passwords: ["saxifraga"]
    },
    {
        question: "Jak nazywa się żona Shreka?",
        youtubeLink: "https://www.youtube.com/embed/1F_MIsbhCXg",
        passwords: ["fiona"]
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