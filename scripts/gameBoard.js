export { gameBoard };
const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const drawGrid = () => {
    let gridContainer = document.querySelector(".grid");
    for (let i = 0; i < board.length; i++) {
      let div = document.createElement("div");
      div.classList.add("grid-item");
      div.dataset.cell = i;
      gridContainer.appendChild(div);
    }
  };
  const setMarker = (position, marker) => {
    board[position] = marker;
  };
  const checkWinner = () => {
    if (
      board[0] != "" &&
      board[0] == board[1] &&
      board[1] != "" &&
      board[1] == board[2]
    ) {
      return true;
    } else if (
      board[0] != "" &&
      board[0] == board[3] &&
      board[3] != "" &&
      board[3] == board[6]
    ) {
      return true;
    } else if (
      board[3] != "" &&
      board[3] == board[4] &&
      board[4] != "" &&
      board[4] == board[5]
    ) {
      return true;
    } else if (
      board[6] != "" &&
      board[6] == board[7] &&
      board[7] != "" &&
      board[7] == board[8]
    ) {
      return true;
    } else if (
      board[0] != "" &&
      board[0] == board[4] &&
      board[4] != "" &&
      board[4] == board[8]
    ) {
      return true;
    } else if (
      board[6] != "" &&
      board[6] == board[4] &&
      board[4] != "" &&
      board[4] == board[2]
    ) {
      return true;
    } else if (
      board[0] != "" &&
      board[0] == board[3] &&
      board[3] != "" &&
      board[3] == board[6]
    ) {
      return true;
    } else if (
      board[1] != "" &&
      board[1] == board[4] &&
      board[4] != "" &&
      board[4] == board[7]
    ) {
      return true;
    } else if (
      board[2] != "" &&
      board[2] == board[5] &&
      board[5] != "" &&
      board[5] == board[8]
    ) {
      return true;
    } else {
      return false;
    }
  };
  return { drawGrid, setMarker, checkWinner };
})();
