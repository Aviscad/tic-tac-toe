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
    console.log(board);
  };
  return { drawGrid, setMarker };
})();
