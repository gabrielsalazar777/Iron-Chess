let darkPawn1 = document.createElement("img");
darkPawn1.src = "/images/dark_pawn.svg";

let darkPawn2 = document.createElement("img");
darkPawn2.src = "/images/dark_pawn.svg";

let darkPawn3 = document.createElement("img");
darkPawn3.src = "/images/dark_pawn.svg";

let darkPawn4 = document.createElement("img");
darkPawn4.src = "/images/dark_pawn.svg";

let darkPawn5 = document.createElement("img");
darkPawn5.src = "/images/dark_pawn.svg";

let darkPawn6 = document.createElement("img");
darkPawn6.src = "/images/dark_pawn.svg";

let darkPawn7 = document.createElement("img");
darkPawn7.src = "/images/dark_pawn.svg";

let darkPawn8 = document.createElement("img");
darkPawn8.src = "/images/dark_pawn.svg";

let darkRook1 = document.createElement("img");
darkRook1.src = "/images/dark_rook.svg";

let darkRook2 = document.createElement("img");
darkRook2.src = "/images/dark_rook.svg";

let darkKnight1 = document.createElement("img");
darkKnight1.src = "/images/dark_knight.svg";

let darkKnight2 = document.createElement("img");
darkKnight2.src = "/images/dark_knight.svg";

let darkBishop1 = document.createElement("img");
darkBishop1.src = "/images/dark_bishop.svg";

let darkBishop2 = document.createElement("img");
darkBishop2.src = "/images/dark_bishop.svg";

let darkQueen = document.createElement("img");
darkQueen.src = "/images/dark_queen.svg";

let darkKing = document.createElement("img");
darkKing.src = "images/dark_king.svg";

let lightPawn1 = document.createElement("img");
lightPawn1.src = "/images/light_pawn.svg";

let lightPawn2 = document.createElement("img");
lightPawn2.src = "/images/light_pawn.svg";

let lightPawn3 = document.createElement("img");
lightPawn3.src = "/images/light_pawn.svg";

let lightPawn4 = document.createElement("img");
lightPawn4.src = "/images/light_pawn.svg";

let lightPawn5 = document.createElement("img");
lightPawn5.src = "/images/light_pawn.svg";

let lightPawn6 = document.createElement("img");
lightPawn6.src = "/images/light_pawn.svg";

let lightPawn7 = document.createElement("img");
lightPawn7.src = "/images/light_pawn.svg";

let lightPawn8 = document.createElement("img");
lightPawn8.src = "/images/light_pawn.svg";

let lightRook1 = document.createElement("img");
lightRook1.src = "/images/light_rook.svg";

let lightRook2 = document.createElement("img");
lightRook2.src = "/images/light_rook.svg";

let lightKnight1 = document.createElement("img");
lightKnight1.src = "/images/light_knight.svg";

let lightKnight2 = document.createElement("img");
lightKnight2.src = "/images/light_knight.svg";

let lightBishop1 = document.createElement("img");
lightBishop1.src = "/images/light_bishop.svg";

let lightBishop2 = document.createElement("img");
lightBishop2.src = "/images/light_bishop.svg";

let lightQueen = document.createElement("img");
lightQueen.src = "/images/light_queen.svg";

let lightKing = document.createElement("img");
lightKing.src = "/images/light_king.svg";

function setPiece(square, piece) {
  document.getElementById(square).appendChild(piece);
}

function initBoard() {
  //   let darkKing = document.createElement("img");
  //   darkKing.src = "/images/dark_king.svg";
  //   document.getElementById("D8").appendChild(darkKing);

  setPiece("A7", darkPawn1);
  setPiece("B7", darkPawn2);
  setPiece("C7", darkPawn3);
  setPiece("D7", darkPawn4);
  setPiece("E7", darkPawn5);
  setPiece("F7", darkPawn6);
  setPiece("G7", darkPawn7);
  setPiece("H7", darkPawn8);
  setPiece("A8", darkRook1);
  setPiece("H8", darkRook2);
  setPiece("B8", darkKnight1);
  setPiece("G8", darkKnight2);
  setPiece("C8", darkBishop1);
  setPiece("F8", darkBishop2);
  setPiece("D8", darkQueen);
  setPiece("E8", darkKing);
  setPiece("A2", lightPawn1);
  setPiece("B2", lightPawn2);
  setPiece("C2", lightPawn3);
  setPiece("D2", lightPawn4);
  setPiece("E2", lightPawn5);
  setPiece("F2", lightPawn6);
  setPiece("G2", lightPawn7);
  setPiece("H2", lightPawn8);
  setPiece("A1", lightRook1);
  setPiece("H1", lightRook2);
  setPiece("B1", lightKnight1);
  setPiece("G1", lightKnight2);
  setPiece("C1", lightBishop1);
  setPiece("F1", lightBishop2);
  setPiece("D1", lightQueen);
  setPiece("E1", lightKing);
}

initBoard();
