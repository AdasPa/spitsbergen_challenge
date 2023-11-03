function markMiniGameAsComplete(index) {
    const miniGamesStatus = JSON.parse(localStorage.miniGamesStatus);
    if (index >= 0 && index < miniGamesStatus.length) {
      miniGamesStatus[index] = true;
      localStorage.miniGamesStatus = JSON.stringify(miniGamesStatus);
    }
  }