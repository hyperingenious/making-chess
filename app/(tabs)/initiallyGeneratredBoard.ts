

function generateChessBoard() {
  const pieces = {
    a: ["r", "n", "b", "q", "k", "b", "n", "r"],
    b: ["p", "p", "p", "p", "p", "p", "p", "p"],
  };

  const board = [];

  for (let rank = 8; rank >= 1; rank--) {
    const row = [];
    for (let file = 0; file < 8; file++) {
      let position = String.fromCharCode(97 + file) + rank;
      let piece = null;

      if (rank === 8) {
        piece = "b" + pieces.a[file];
      } else if (rank === 7) {
        piece = "bp";
      } else if (rank === 2) {
        piece = "wp";
      } else if (rank === 1) {
        piece = "w" + pieces.a[file];
      }

      row.push({ position, piece });
    }
    board.push(row);
  }

  return board;
}

const initiallyGeneratedBoard = generateChessBoard();
export default initiallyGeneratedBoard;