function checkAnswer() {
    var answerInput = document.getElementById("answer-input");
    var resultElement = document.getElementById("result");

    var answer = answerInput.value.toLowerCase();
    var isCorrect = answer === "gwiazda";

    if (isCorrect) {
        resultElement.innerHTML = '<i class="fa fa-star animated tada"></i> Odpowiedź jest poprawna!';
        resultElement.style.color = "green";
        alert("Gratulacje, odpowiedź jest poprawna!");
        window.location.href = "../index.html";
    } else {
        resultElement.innerHTML = 'Odpowiedź jest niepoprawna.';
        resultElement.style.color = "red";
    }

    answerInput.value = "";
}
