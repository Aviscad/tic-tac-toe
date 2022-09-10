import { gameBoard } from "./gameBoard.js";

const Player = (name, marker) => {
  const getPlayerName = () => {
    return name;
  };
  const getPlayerMarker = () => {
    return marker;
  };
  return { getPlayerName, getPlayerMarker };
};

const gameFlow = () => {
  gameBoard.drawGrid();
  const gridItem = document.querySelectorAll(".grid-item");
  const playerOne = Player("Jhon", "X");
  const playerComputer = Player("Computer", "O");
  let playerTurn = true;

  gridItem.forEach((element) => {
    element.onclick = () => {
      if (element.textContent == "") {
        if (playerTurn) {
          element.textContent = playerOne.getPlayerMarker();
          gameBoard.setMarker(
            element.dataset.cell,
            playerOne.getPlayerMarker()
          );
        } else {
          element.textContent = playerComputer.getPlayerMarker();
          gameBoard.setMarker(
            element.dataset.cell,
            playerComputer.getPlayerMarker()
          );
        }
        playerTurn = !playerTurn;
      }
    };
  });
};

gameFlow();
