function checkAnswers() {
    var animal1 = document.getElementById("puffin").value;
    var animal2 = document.getElementById("ptarmigan").value;
    var animal3 = document.getElementById("bear").value;
    var animal4 = document.getElementById("fox").value;
    var animal5 = document.getElementById("seal").value;
    var animal6 = document.getElementById("reindeer").value;

    var correctAnswers = ["puffin", "ptarmigan", "bear", "fox", "seal", "reindeer"];
    var userAnswers = [animal1, animal2, animal3, animal4, animal5, animal6];
  
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
  