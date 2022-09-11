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
    const grid = document.querySelector(".grid");
    const btnReset = document.querySelector("#reset");
    const markerItem = document.querySelectorAll(".marker-item");
    const cardsContainer = document.querySelector(".cards-container");
    const p1Name = document.querySelector("#p1-name");
    const p2Name = document.querySelector("#p2-name");
    let p1Marker = false;
    let p2Marker = false;
    let playerOne = "";
    let playerTwo = "";

    for (let i = 0; i < markerItem.length - 4; i++) {
      const selectedMarker = markerItem[i];
      selectedMarker.onclick = () => {
        if (!p1Marker) {
          if (p1Name.value == "") {
            p1Name.classList.add("error");
          } else {
            const pOneSelectedMarker = selectedMarker.textContent;
            p1Name.classList.remove("error");
            p1Name.setAttribute("disabled", true);
            selectedMarker.classList.add("selected-marker");
            selectedMarker.dataset.who = p1Name.value;
            playerOne = Player(p1Name.value, pOneSelectedMarker);
            p1Marker = !p1Marker;
            if (
              playerOne != "" &&
              playerTwo != "" &&
              p1Name.value != "" &&
              p2Name.value != ""
            ) {
              grid.classList.toggle("hidden");
              cardsContainer.classList.add("hidden");
            }
          }
        }
      };
    }

    for (let i = 4; i < markerItem.length; i++) {
      const selectedMarker = markerItem[i];
      selectedMarker.onclick = () => {
        if (
          !p2Marker &&
          playerOne.getPlayerMarker() != selectedMarker.textContent
        ) {
          if (p2Name.value == "") {
            p2Name.classList.add("error");
          } else {
            const pTwoSelectedMarker = selectedMarker.textContent;
            p2Name.classList.remove("error");
            p2Name.setAttribute("disabled", true);
            selectedMarker.classList.add("selected-marker");
            selectedMarker.dataset.who = p2Name.value;
            playerTwo = Player(p2Name.value, pTwoSelectedMarker);
            p2Marker = !p2Marker;
            if (
              playerOne != "" &&
              playerTwo != "" &&
              p1Name.value != "" &&
              p2Name.value != ""
            ) {
              grid.classList.toggle("hidden");
              cardsContainer.classList.add("hidden");
            }
          }
        } else {
          selectedMarker.classList.add("already-selected");
        }
      };
    }
    let playerTurn = true;
    let lastMove = "";

    const checkPlayerName = (marker) => {
      if (playerOne.getPlayerMarker() == marker) {
        return playerOne;
      } else {
        return playerTwo;
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
              alert(
                "The winner is: " +
                  checkPlayerName(lastMove).getPlayerName() +
                  " : " +
                  checkPlayerName(lastMove).getPlayerMarker()
              );
              btnReset.classList.remove("hidden");
              btnReset.onclick = () => {
                gameBoard.resetBoard();
                removeStyles();
                gameFlow();
              };
            } else {
              let gridItemArray = Array.from(gridItem);
              if (gridItemArray.every((element) => element.textContent != "")) {
                btnReset.classList.remove("hidden");
                btnReset.onclick = () => {
                  gameBoard.resetBoard();
                  removeStyles();
                  gameFlow();
                };
              }
            }
          }
        }
      };
    });
    const removeStyles = () => {
      grid.classList.toggle("hidden");
      p1Name.value = p2Name.value = "";
      p1Name.removeAttribute("disabled");
      p2Name.removeAttribute("disabled");
      cardsContainer.classList.remove("hidden");
      btnReset.classList.add("hidden");
      markerItem.forEach((element) => {
        element.classList.remove("selected-marker");
        element.classList.remove("already-selected");
      });
    };
  };
  gameFlow();
};
