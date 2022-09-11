import { gameBoard } from "./gameBoard.js";

window.onload = () => {
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

    //Variables
    const gridItem = document.querySelectorAll(".grid-item");
    const btnReset = document.querySelector("#reset");
    const playerOne = Player("Jhon", "X");
    const playerTwo = Player("Gabriel", "O");
    let playerTurn = true;
    let lastMove = "";

    const checkPlayerName = (marker) => {
      if (playerOne.getPlayerMarker() == marker) {
        return playerOne.getPlayerName();
      } else {
        return playerTwo.getPlayerName();
      }
    };

    gridItem.forEach((squareInGrid) => {
      squareInGrid.onclick = () => {
        if (gameBoard.checkWinner() == false) {
          if (squareInGrid.textContent == "") {
            let positionInGrid = squareInGrid.dataset.cell;
            if (playerTurn) {
              squareInGrid.textContent = playerOne.getPlayerMarker();
              gameBoard.setMarker(positionInGrid, playerOne.getPlayerMarker());
              lastMove = playerOne.getPlayerMarker();
            } else {
              squareInGrid.textContent = playerTwo.getPlayerMarker();
              gameBoard.setMarker(positionInGrid, playerTwo.getPlayerMarker());
              lastMove = playerTwo.getPlayerMarker();
            }
            playerTurn = !playerTurn;
            if (gameBoard.checkWinner()) {
              alert(checkPlayerName(lastMove));
              btnReset.onclick = () => {
                gameBoard.resetBoard();
                gameFlow();
              };
            }
          }
        }
      };
    });
  };

  gameFlow();
};
