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
  //Drawwing Grid
  gameBoard.drawGrid();

  //Variables
  const gridItem = document.querySelectorAll(".grid-item");
  const playerOne = Player("Jhon", "X");
  const playerComputer = Player("Computer", "O");
  let playerTurn = true;

  gridItem.forEach((squareInGrid) => {
    squareInGrid.onclick = () => {
      if (gameBoard.checkWinner() == false) {
        if (squareInGrid.textContent == "") {
          let positionInGrid = squareInGrid.dataset.cell;
          if (playerTurn) {
            squareInGrid.textContent = playerOne.getPlayerMarker();
            gameBoard.setMarker(positionInGrid, playerOne.getPlayerMarker());
          } else {
            squareInGrid.textContent = playerComputer.getPlayerMarker();
            gameBoard.setMarker(
              positionInGrid,
              playerComputer.getPlayerMarker()
            );
          }
          playerTurn = !playerTurn;
        }
      }
    };
  });
};

gameFlow();
