function checkAnswers() {
    var plant1 = document.getElementById("bistorta").value;
    var plant2 = document.getElementById("potentilla").value;
    var plant3 = document.getElementById("eriophorum").value;
    var plant4 = document.getElementById("saxifraga").value;
  
    var correctAnswers = ["bistorta", "potentilla", "eriophorum", "saxifraga"];
    var userAnswers = [plant1, plant2, plant3, plant4];
  
    var allCorrect = true;
  
    for (var i = 0; i < correctAnswers.length; i++) {
      if (userAnswers[i] !== correctAnswers[i]) {
        allCorrect = false;
        break;
      }
    }
  
    if (allCorrect) {
      alert("Gratulacje, wszystkie odpowiedzi są poprawne!");
      markMiniGameAsComplete(0);
      window.location.href = "../index.html";
    } else {
      alert("Przynajmniej jedna odpowiedź jest niepoprawna. Spróbuj ponownie.");
    }
  }
  