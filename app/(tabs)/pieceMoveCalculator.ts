function pawn(board, pawnPostion, desriedPostion, color) {
  if (color === "black") {
    const currentRank = Number(pawnPostion.slice(1));
    const desiredRank = Number(desriedPostion.slice(1));
    const distance = currentRank - desiredRank;

    // 0 < pawn < 2
    if (distance < 0 || distance > 2) {
      return { isLegal: false };
    }

    if (distance === 2 && Number(pawnPostion.slice(1)) !== 7) {
      return { isLegal: false };
    }

    if(distance === 2 && Number(pawnPostion.slice(1)) === 7 && ){

    }

    // is diagonal
    const currentLetter = pawnPostion(0, 1);
    const finalLetter = pawnPostion(0, 1);
    const isDiagonal = currentLetter != finalLetter;

    // if diagonal
    if(isDiagonal){
     const desiredDiagonalRank = 
    }
  }
}

// 8 7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8

// 1. move forward 1 block
// 2. move forward 2 block
// 3. eat digonally forward both sider if not on the corner
// 4. checkmates a king
[
  [
    { piece: "br", position: "a8" },
    { piece: "bn", position: "b8" },
    { piece: "bb", position: "c8" },
    { piece: "bq", position: "d8" },
    { piece: "bk", position: "e8" },
    { piece: "bb", position: "f8" },
    { piece: "bn", position: "g8" },
    { piece: "br", position: "h8" },
  ],
  [
    { piece: "bp", position: "a7" },
    { piece: "bp", position: "b7" },
    { piece: "bp", position: "c7" },
    { piece: "bp", position: "d7" },
    { piece: "bp", position: "e7" },
    { piece: "bp", position: "f7" },
    { piece: "bp", position: "g7" },
    { piece: "bp", position: "h7" },
  ],
  [
    { piece: null, position: "a6" },
    { piece: null, position: "b6" },
    { piece: null, position: "c6" },
    { piece: null, position: "d6" },
    { piece: null, position: "e6" },
    { piece: null, position: "f6" },
    { piece: null, position: "g6" },
    { piece: null, position: "h6" },
  ],
  [
    { piece: null, position: "a5" },
    { piece: null, position: "b5" },
    { piece: null, position: "c5" },
    { piece: null, position: "d5" },
    { piece: null, position: "e5" },
    { piece: null, position: "f5" },
    { piece: null, position: "g5" },
    { piece: null, position: "h5" },
  ],
  [
    { piece: null, position: "a4" },
    { piece: null, position: "b4" },
    { piece: null, position: "c4" },
    { piece: null, position: "d4" },
    { piece: null, position: "e4" },
    { piece: null, position: "f4" },
    { piece: null, position: "g4" },
    { piece: null, position: "h4" },
  ],
  [
    { piece: null, position: "a3" },
    { piece: null, position: "b3" },
    { piece: null, position: "c3" },
    { piece: null, position: "d3" },
    { piece: null, position: "e3" },
    { piece: null, position: "f3" },
    { piece: null, position: "g3" },
    { piece: null, position: "h3" },
  ],
  [
    { piece: "wp", position: "a2" },
    { piece: "wp", position: "b2" },
    { piece: "wp", position: "c2" },
    { piece: "wp", position: "d2" },
    { piece: "wp", position: "e2" },
    { piece: "wp", position: "f2" },
    { piece: "wp", position: "g2" },
    { piece: "wp", position: "h2" },
  ],

  [
    { piece: "wr", position: "a1" },
    { piece: "wn", position: "b1" },
    { piece: "wb", position: "c1" },
    { piece: "wq", position: "d1" },
    { piece: "wk", position: "e1" },
    { piece: "wb", position: "f1" },
    { piece: "wn", position: "g1" },
    { piece: "wr", position: "h1" },
  ],
];
