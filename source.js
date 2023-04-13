//generate img elements, their srcs, and their ids

let darkPawn1 = document.createElement("img");
darkPawn1.id = "dark-pawn-1";
darkPawn1.src = "images/dark_pawn.svg";

let darkPawn2 = document.createElement("img");
darkPawn2.id = "dark-pawn-2";
darkPawn2.src = "images/dark_pawn.svg";

let darkPawn3 = document.createElement("img");
darkPawn3.id = "dark-pawn-3";
darkPawn3.src = "images/dark_pawn.svg";

let darkPawn4 = document.createElement("img");
darkPawn4.id = "dark-pawn-4";
darkPawn4.src = "images/dark_pawn.svg";

let darkPawn5 = document.createElement("img");
darkPawn5.id = "dark-pawn-5";
darkPawn5.src = "images/dark_pawn.svg";

let darkPawn6 = document.createElement("img");
darkPawn6.id = "dark-pawn-6";
darkPawn6.src = "images/dark_pawn.svg";

let darkPawn7 = document.createElement("img");
darkPawn7.id = "dark-pawn-7";
darkPawn7.src = "images/dark_pawn.svg";

let darkPawn8 = document.createElement("img");
darkPawn8.id = "dark-pawn-8";
darkPawn8.src = "images/dark_pawn.svg";

let darkRook1 = document.createElement("img");
darkRook1.id = "dark-rook-1";
darkRook1.src = "images/dark_rook.svg";

let darkRook2 = document.createElement("img");
darkRook2.id = "dark-rook-2";
darkRook2.src = "images/dark_rook.svg";

let darkKnight1 = document.createElement("img");
darkKnight1.id = "dark-knight-1";
darkKnight1.src = "images/dark_knight.svg";

let darkKnight2 = document.createElement("img");
darkKnight2.id = "dark-knight-2";
darkKnight2.src = "images/dark_knight.svg";

let darkBishop1 = document.createElement("img");
darkBishop1.id = "dark-bishop-1";
darkBishop1.src = "images/dark_bishop.svg";

let darkBishop2 = document.createElement("img");
darkBishop2.id = "dark-bishop-2";
darkBishop2.src = "images/dark_bishop.svg";

let darkQueen = document.createElement("img");
darkQueen.id = "dark-queen";
darkQueen.src = "images/dark_queen.svg";

let darkKing = document.createElement("img");
darkKing.id = "dark-king";
darkKing.src = "images/dark_king.svg";

let lightPawn1 = document.createElement("img");
lightPawn1.id = "light-pawn-1";
lightPawn1.src = "images/light_pawn.svg";

let lightPawn2 = document.createElement("img");
lightPawn2.id = "light-pawn-2";
lightPawn2.src = "images/light_pawn.svg";

let lightPawn3 = document.createElement("img");
lightPawn3.id = "light-pawn-3";
lightPawn3.src = "images/light_pawn.svg";

let lightPawn4 = document.createElement("img");
lightPawn4.id = "light-pawn-4";
lightPawn4.src = "images/light_pawn.svg";

let lightPawn5 = document.createElement("img");
lightPawn5.id = "light-pawn-5";
lightPawn5.src = "images/light_pawn.svg";

let lightPawn6 = document.createElement("img");
lightPawn6.id = "light-pawn-6";
lightPawn6.src = "images/light_pawn.svg";

let lightPawn7 = document.createElement("img");
lightPawn7.id = "light-pawn-7";
lightPawn7.src = "images/light_pawn.svg";

let lightPawn8 = document.createElement("img");
lightPawn8.id = "light-pawn-8";
lightPawn8.src = "images/light_pawn.svg";

let lightRook1 = document.createElement("img");
lightRook1.id = "light-rook-1";
lightRook1.src = "images/light_rook.svg";

let lightRook2 = document.createElement("img");
lightRook2.id = "light-rook-2";
lightRook2.src = "images/light_rook.svg";

let lightKnight1 = document.createElement("img");
lightKnight1.id = "light-knight-1";
lightKnight1.src = "images/light_knight.svg";

let lightKnight2 = document.createElement("img");
lightKnight2.id = "light-knight-2";
lightKnight2.src = "images/light_knight.svg";

let lightBishop1 = document.createElement("img");
lightBishop1.id = "light-bishop-1";
lightBishop1.src = "images/light_bishop.svg";

let lightBishop2 = document.createElement("img");
lightBishop2.id = "light-bishop-2";
lightBishop2.src = "images/light_bishop.svg";

let lightQueen = document.createElement("img");
lightQueen.id = "light-queen";
lightQueen.src = "images/light_queen.svg";

let lightKing = document.createElement("img");
lightKing.id = "light-king";
lightKing.src = "images/light_king.svg";

//adding img to appropriate divs at init
function setPiece(square, piece) {
  document.getElementById(square).appendChild(piece);
}

// tester Piece class, might not be used
class Piece {
  constructor() {
    this.square;
    this.piece;
    this.pieceType;
  }

  classSetPiece(square, piece, pieceType) {
    document.getElementById(square).appendChild(piece);
    this.square = square;
    this.piece = piece;
    this.pieceType = pieceType;
  }
}

//board array for use in converting div ID to coords
let boardArray = [
  ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"],
  ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
  ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"],
  ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5"],
  ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"],
  ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
  ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
  ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"],
];

//piece array for use in path checking
let pieceArray = [
  ["T", "T", "T", "T", "T", "T", "T", "T"],
  ["T", "T", "T", "T", "T", "T", "T", "T"],
  ["0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0"],
  ["T", "T", "T", "T", "T", "T", "T", "T"],
  ["T", "T", "T", "T", "T", "T", "T", "T"],
];

let playerTurn;

//BOARD INIT HERE!
let dPawn1 = new Piece();
function initBoard() {
  //set pieces to appropriate div square at init
  dPawn1.classSetPiece("A7", darkPawn1, "pawn");
  // setPiece("A7", darkPawn1);
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

  //set draggable and appropriate className on each img
  let images = document.querySelectorAll("img");
  images.forEach((e) => {
    e.setAttribute("draggable", true);
    switch (true) {
      case e.id.includes("pawn"):
        e.className = "pawn";
        break;
      case e.id.includes("rook"):
        e.className = "rook";
        break;
      case e.id.includes("knight"):
        e.className = "knight";
        break;
      case e.id.includes("bishop"):
        e.className = "bishop";
        break;
      case e.id.includes("queen"):
        e.className = "queen";
        break;
      case e.id.includes("king"):
        e.className = "king";
        break;
    }
  });
  playerTurn = "light";
}
initBoard();

function handleMove(type, id, origin, destPieceId, destination) {
  if (
    isLegalMove(type, id, origin, destPieceId, destination) &&
    avoidFriendlyCheck(id, origin, destination)
  ) {
    return 1;
  } else {
    return 0;
  }
}

let yCoordO, xCoordO, yCoordD, xCoordD;
let lightKingParentId = lightKing.parentNode.id;
let darkKingParentId = darkKing.parentNode.id;

function coordinateConversion(origin, destination) {
  boardArray.forEach((elem, i) => {
    elem.forEach((sq, j) => {
      if (sq === origin) {
        yCoordO = i;
        xCoordO = j;
      }
    });
  });

  boardArray.forEach((elem, i) => {
    elem.forEach((sq, j) => {
      if (sq === destination) {
        yCoordD = i;
        xCoordD = j;
      }
    });
  });
}

function isCheckOrMate() {
  let lightMate, darkMate;
  let lightCheck, darkCheck;
  currentImages = document.querySelectorAll("img");

  //check for light move leading to dark king in check
  if (playerTurn === "light") {
    currentImages.forEach((e) => {
      if (e.id.includes("light")) {
        if (
          isLegalMove(
            e.className,
            e.id,
            e.parentNode.id,
            "dark-king",
            darkKingParentId
          )
        ) {
          darkCheck = true;
          console.log("DARK IN CHECK");
        }
      }
    });
  }

  //check for dark move leading to light king in check
  if (playerTurn === "dark") {
    currentImages.forEach((e) => {
      if (e.id.includes("dark")) {
        if (
          isLegalMove(
            e.className,
            e.id,
            e.parentNode.id,
            "light-king",
            lightKingParentId
          )
        ) {
          lightCheck = true;
          console.log("LIGHT IN CHECK");
        }
      }
    });
  }

  //check for mate on dark king
  if (darkCheck === true) {
    darkMate = true;
    currentImages.forEach((e) => {
      if (e.id.includes("dark")) {
        boardArray.forEach((row) => {
          row.forEach((coord) => {
            if (avoidFriendlyCheck(e.id, e.parentNode.id, coord)) {
              darkMate = false;
            }
          });
        });
      }
    });
  }

  //check for mate on light king
  if (lightCheck === true) {
    lightMate = true;
    currentImages.forEach((e) => {
      if (e.id.includes("light")) {
        boardArray.forEach((row) => {
          row.forEach((coord) => {
            if (avoidFriendlyCheck(e.id, e.parentNode.id, coord)) {
              console.log(
                "Line 360: lightMate false at: e.id, e.parentNode.id, coord: ",
                e.id,
                e.parentNode.id,
                coord
              );
              lightMate = false;
            }
          });
        });
      }
    });
  }

  if (playerTurn === "dark" && lightMate === true) {
    console.log("WHITE IN CHECKMATE!");
  }
  if (playerTurn === "light" && darkMate === true) {
    console.log("DARK IN CHECKMATE");
  }
}

// function avoidFriendlyCheck(type, id, origin, destPieceId, destination) {
function avoidFriendlyCheck(id, origin, destination) {
  let legalMove = true;
  let yCoordOTemp = yCoordO;
  let xCoordOTemp = xCoordO;
  let yCoordDTemp = yCoordD;
  let xCoordDTemp = xCoordD;
  coordinateConversion(origin, destination);
  currentImages = document.querySelectorAll("img");

  //if dest coords lead to 0 run first syntax
  //if dest coords lead to T, run second syntax

  //TEST start testing code here
  let type = document.getElementById(id).className;
  if (pieceArray[yCoordD][xCoordD] === "0") {
    console.log(
      "387: type, id, origin, destination",
      type,
      id,
      origin,
      destination
    );
    if (!isLegalMove(type, id, origin, "anything", destination)) {
      yCoordO = yCoordOTemp;
      xCoordO = xCoordOTemp;
      yCoordD = yCoordDTemp;
      xCoordD = xCoordDTemp;
      console.log("line 399: movement to 0 square illegal: ", destination);
      return 0;
    }
  }
  if (pieceArray[yCoordD][xCoordD] === "T") {
    console.log("line 403: if hit");
    let tempCoords = boardArray[yCoordD][xCoordD];
    let targetId = document.getElementById(destination).firstChild.id;
    if (!isLegalMove(type, id, origin, targetId, destination)) {
      yCoordO = yCoordOTemp;
      xCoordO = xCoordOTemp;
      yCoordD = yCoordDTemp;
      xCoordD = xCoordDTemp;
      console.log(
        "line 411: movement to T square illegal: ",
        targetId,
        destination
      );
      return 0;
    }
  }
  //end testing code here

  //store original pieceArray to simulate attempted move
  let tempArray = JSON.parse(JSON.stringify(pieceArray));
  pieceArray[yCoordO][xCoordO] = "0";
  pieceArray[yCoordD][xCoordD] = "T";

  //stop king from throwing himself in check
  if (id.includes("dark-king") || id.includes("light-king")) {
    currentImages.forEach((e) => {
      if (!e.parentNode.id.includes(destination)) {
        if (isLegalMove(e.className, e.id, e.parentNode.id, id, destination)) {
          pieceArray = JSON.parse(JSON.stringify(tempArray));
          console.log(
            "428: illegal move, king throws themselves in check: ",
            e.className,
            e.id,
            e.parentNode.id,
            id,
            destination
          );
          legalMove = false;
        }
      }

      //TEST use below if above (430 - 444) doesn't work

      // if (isLegalMove(e.className, e.id, e.parentNode.id, id, destination)) {
      //   pieceArray = JSON.parse(JSON.stringify(tempArray));
      //   console.log(
      //     "428: illegal move, king throws themselves in check: ",
      //     e.className,
      //     e.id,
      //     e.parentNode.id,
      //     id,
      //     destination
      //   );
      //   legalMove = false;
      // }
    });
  }
  //stop light piece move from throwing their king in check
  else if (id.includes("light")) {
    currentImages.forEach((e) => {
      if (e.id.includes("dark") && !e.parentNode.id.includes(destination)) {
        //TEST use line below if line above is breaking stuff
        // if (e.id.includes("dark")) {
        if (
          isLegalMove(
            e.className,
            e.id,
            e.parentNode.id,
            "light-king",
            lightKingParentId
          )
        ) {
          pieceArray = JSON.parse(JSON.stringify(tempArray));
          console.log(
            "line 447: illegal move on white piece: ",
            e.className,
            e.id,
            e.parentNode.id,
            id,
            destination
          );
          legalMove = false;
        }
      }
    });
  }
  //stop dark piece move from throwing their king in check
  else if (id.includes("dark")) {
    currentImages.forEach((e) => {
      //TEST LINE BELOW
      if (e.id.includes("light") && !e.parentNode.id.includes(destination)) {
        // if (e.id.includes("light")) {
        if (
          isLegalMove(
            e.className,
            e.id,
            e.parentNode.id,
            "dark-king",
            darkKingParentId
          )
        ) {
          pieceArray = JSON.parse(JSON.stringify(tempArray));
          legalMove = false;
        }
      }
    });
  }

  if (legalMove) {
    yCoordO = yCoordOTemp;
    xCoordO = xCoordOTemp;
    yCoordD = yCoordDTemp;
    xCoordD = xCoordDTemp;
    pieceArray = JSON.parse(JSON.stringify(tempArray));
    return 1;
  }
  if (!legalMove) {
    legalMove = true;
    yCoordO = yCoordOTemp;
    xCoordO = xCoordOTemp;
    yCoordD = yCoordDTemp;
    xCoordD = xCoordDTemp;
    pieceArray = JSON.parse(JSON.stringify(tempArray));
    return 0;
  }
}

//check if piece is making a legal move
function isLegalMove(type, id, origin, destPieceId, destination) {
  coordinateConversion(origin, destination);

  // console.log("Origin info: ", type, id, yCoordO, xCoordO, origin);
  // console.log("Destination info: ", destPieceId, yCoordD, xCoordD, destination);

  //handle move based on img class ('type')
  switch (type) {
    case "pawn":
      //if any pawn moving diagonal 2 or more
      if (Math.abs(xCoordD - xCoordO) >= 2) {
        return 0;
      }
      //if dark moving towards light
      if (id.includes("dark")) {
        //if moving back or sideways
        if (yCoordO > yCoordD || yCoordO === yCoordD) {
          return 0;
        }
        //if eating an opposing piece one diagonal forward
        if (
          (xCoordD - xCoordO === 1 || xCoordD - xCoordO === -1) &&
          yCoordD - yCoordO === 1 &&
          (destPieceId.includes("light") || destination.includes("light"))
        ) {
          return 1;
        }
        // if moving to empty diagonal forward
        if (
          (xCoordD - xCoordO === 1 || xCoordD - xCoordO === -1) &&
          yCoordD - yCoordO === 1
        ) {
          console.log("line 537: false");
          return 0;
        }
        //if moving two squares not on init, or moving 3+ squares
        if (
          (yCoordO != 1 && yCoordD - yCoordO >= 2) ||
          (yCoordO === 1 && yCoordD - yCoordO >= 3)
        ) {
          return 0;
        }
        //if path is not empty
        if (yCoordD > yCoordO) {
          for (i = 1; i <= yCoordD - yCoordO; i++) {
            if (pieceArray[yCoordO + i][xCoordO] !== "0") {
              return 0;
            }
          }
        }
      }
      //if light moving towards dark
      if (id.includes("light")) {
        //if moving back or sideways
        if (yCoordO < yCoordD || yCoordD === yCoordO) {
          return 0;
        }
        //if eating an opposing piece one diagonal forward
        if (
          (xCoordD - xCoordO === 1 || xCoordD - xCoordO === -1) &&
          yCoordO - yCoordD === 1 &&
          (destPieceId.includes("dark") || destination.includes("dark"))
        ) {
          return 1;
        }
        // if moving to empty diagonal forward
        if (
          (xCoordD - xCoordO === 1 || xCoordD - xCoordO === -1) &&
          yCoordO - yCoordD === 1
        ) {
          return 0;
        }
        //if moving two squares not on init, or moving 3+ squares
        if (
          (yCoordO != 6 && yCoordO - yCoordD >= 2) ||
          (yCoordO === 6 && yCoordO - yCoordD >= 3)
        ) {
          return 0;
        }
        //if path is not empty
        if (yCoordD < yCoordO) {
          for (i = 1; i <= yCoordO - yCoordD; i++) {
            if (pieceArray[yCoordO - i][xCoordO] !== "0") {
              return 0;
            }
          }
        }
      }
      break;
    case "rook":
      //if moving diagonal
      if (yCoordD != yCoordO && xCoordD != xCoordO) {
        return 0;
      }
      // check for empty path on vertical axis
      if (yCoordD != yCoordO) {
        //moving downwards
        if (yCoordD > yCoordO) {
          for (i = 1; i < yCoordD - yCoordO; i++) {
            if (pieceArray[yCoordO + i][xCoordO] !== "0") {
              return 0;
            }
          }
        }
        //moving upwards
        if (yCoordD < yCoordO) {
          for (i = 1; i < yCoordO - yCoordD; i++) {
            if (pieceArray[yCoordO - i][xCoordO] !== "0") {
              return 0;
            }
          }
        }
      }
      // check for empty path on horizontal axis
      if (xCoordD != xCoordO) {
        // moving right
        if (xCoordD > xCoordO) {
          for (i = 1; i < xCoordD - xCoordO; i++) {
            if (pieceArray[yCoordO][xCoordO + i] !== "0") {
              return 0;
            }
          }
        }
        // moving left
        if (xCoordD < xCoordO) {
          for (i = 1; i < xCoordO - xCoordD; i++) {
            if (pieceArray[yCoordO][xCoordO - i] !== "0") {
              return 0;
            }
          }
        }
      }
      break;
    case "knight":
      if (Math.abs((yCoordD - yCoordO) * (xCoordD - xCoordO)) !== 2) {
        return 0;
      }
      break;
    case "bishop":
      //if not moving diagonally
      if (Math.abs(yCoordD - yCoordO) / Math.abs(xCoordD - xCoordO) != 1) {
        return 0;
      }
      //check empty path moving diagonal down
      if (yCoordD > yCoordO) {
        //diagonal down-left
        if (xCoordD < xCoordO) {
          for (i = 1; i < yCoordD - yCoordO; i++) {
            if (pieceArray[yCoordO + i][xCoordO - i] !== "0") {
              return 0;
            }
          }
        }
        //diagonal down-right
        if (xCoordD > xCoordO) {
          for (i = 1; i < yCoordD - yCoordO; i++) {
            if (pieceArray[yCoordO + i][xCoordO + i] !== "0") {
              return 0;
            }
          }
        }
      }
      //check empty path moving diagonal up
      if (yCoordD < yCoordO) {
        //diagonal up-left
        if (xCoordD < xCoordO) {
          for (i = 1; i < yCoordO - yCoordD; i++) {
            if (pieceArray[yCoordO - i][xCoordO - i] !== "0") {
              return 0;
            }
          }
        }
        //diagonal up-right
        if (xCoordD > xCoordO) {
          for (i = 1; i < yCoordO - yCoordD; i++) {
            if (pieceArray[yCoordO - i][xCoordO + i] !== "0") {
              return 0;
            }
          }
        }
      }
      break;
    case "queen":
      //if not moving vertical, horizontal, or diagonal
      if (
        yCoordD != yCoordO &&
        xCoordD != xCoordO &&
        Math.abs(yCoordD - yCoordO) / Math.abs(xCoordD - xCoordO) != 1
      ) {
        return 0;
      }
      //if moving vertically
      if (yCoordD != yCoordO && xCoordD === xCoordO) {
        //check empty vertical path down
        if (yCoordD > yCoordO) {
          for (i = 1; i < yCoordD - yCoordO; i++) {
            if (pieceArray[yCoordO + i][xCoordO] !== "0") {
              return 0;
            }
          }
        }
        //check empty vertical path up
        if (yCoordD < yCoordO) {
          for (i = 1; i < yCoordO - yCoordD; i++) {
            if (pieceArray[yCoordO - i][xCoordO] !== "0") {
              return 0;
            }
          }
        }
      }
      //if moving horizontally
      if (yCoordD === yCoordO && xCoordD != xCoordO) {
        //check empty path moving right
        if (xCoordD > xCoordO) {
          for (i = 1; i < xCoordD - xCoordO; i++) {
            if (pieceArray[yCoordO][xCoordO + i] !== "0") {
              return 0;
            }
          }
        }
        //check empty path moving left
        if (xCoordD < xCoordO) {
          for (i = 1; i < xCoordO - xCoordD; i++) {
            if (pieceArray[yCoordO][xCoordO - i] !== "0") {
              return 0;
            }
          }
        }
      }
      //if moving diagonally
      if (Math.abs(yCoordD - yCoordO) / Math.abs(xCoordD - xCoordO) === 1) {
        //check empty path moving diagonal down
        if (yCoordD > yCoordO) {
          //diagonal down-left
          if (xCoordD < xCoordO) {
            for (i = 1; i < yCoordD - yCoordO; i++) {
              if (pieceArray[yCoordO + i][xCoordO - i] !== "0") {
                return 0;
              }
            }
          }
          //diagonal down-right
          if (xCoordD > xCoordO) {
            for (i = 1; i < yCoordD - yCoordO; i++) {
              if (pieceArray[yCoordO + i][xCoordO + i] !== "0") {
                return 0;
              }
            }
          }
        }
        //check empty path moving diagonal up
        if (yCoordD < yCoordO) {
          //diagonal up-left
          if (xCoordD < xCoordO) {
            for (i = 1; i < yCoordO - yCoordD; i++) {
              if (pieceArray[yCoordO - i][xCoordO - i] !== "0") {
                return 0;
              }
            }
          }
          //diagonal up-right
          if (xCoordD > xCoordO) {
            for (i = 1; i < yCoordO - yCoordD; i++) {
              if (pieceArray[yCoordO - i][xCoordO + i] !== "0") {
                return 0;
              }
            }
          }
        }
      }
      break;
    case "king":
      //if moving 2 in any direction
      if (Math.abs(yCoordD - yCoordO) > 1 || Math.abs(xCoordD - xCoordO) > 1) {
        return 0;
      }
      break;
  }

  //friendly fire
  console.log("line 818: ", destPieceId);
  if (destPieceId) {
    if (
      (id.includes("light") && destPieceId.includes("light")) ||
      (id.includes("dark") && destPieceId.includes("dark"))
    ) {
      return 0;
    }
  }

  return 1;
}

let board = document.querySelectorAll(".row > div");
let selectedPiece;

board.forEach((elem) => {
  elem.addEventListener("mousedown", (e) => {
    // board.addEventListener("click", (e) => {
    // document.addEventListener('click', (e) => {
    if (
      (playerTurn === "light" && e.target.id.includes("light")) ||
      (playerTurn === "dark" && e.target.id.includes("dark"))
    ) {
      if (e.target.tagName === "IMG") {
        selectedPiece = e.target;
      } else {
        selectedPiece = null;
      }
    } else {
      selectedPiece = null;
    }
  });
  elem.addEventListener("dragover", (f) => {
    f.preventDefault();
  });

  elem.addEventListener("drop", (g) => {
    yCoordO = null;
    xCoordO = null;
    yCoordD = null;
    xCoordD = null;
    targetParentNode = g.target.parentNode;

    //dragging to empty square
    if (g.target.tagName !== "IMG") {
      if (
        handleMove(
          selectedPiece.className,
          selectedPiece.id,
          selectedPiece.parentNode.id,
          targetParentNode.id,
          g.target.id
        )
      ) {
        // console.log("line 812:", pieceArray);
        pieceArray[yCoordO][xCoordO] = "0";
        pieceArray[yCoordD][xCoordD] = "T";
        // console.log("Line 815: ", pieceArray);
        selectedPiece.parentNode.removeChild(selectedPiece);
        g.target.appendChild(selectedPiece);
        lightKingParentId = lightKing.parentNode.id;
        darkKingParentId = darkKing.parentNode.id;
        isCheckOrMate();
        // console.log(
        //   "final LK: ",
        //   lightKingParentId,
        //   " final DK: ",
        //   darkKingParentId
        // );
        if (playerTurn === "light") {
          playerTurn = "dark";
          // console.log("line 829: ", pieceArray);
          // console.log("playerTurn ended1 : light");
        } else if (playerTurn === "dark") {
          playerTurn = "light";
          // console.log("line 813: ", pieceArray);
          // console.log("playerTurn ended1 : dark");
        }
      }
    }

    // dragging to capture
    else {
      if (
        handleMove(
          selectedPiece.className,
          selectedPiece.id,
          selectedPiece.parentNode.id,
          g.target.id,
          targetParentNode.id
        )
      ) {
        pieceArray[yCoordO][xCoordO] = "0";
        pieceArray[yCoordD][xCoordD] = "T";
        // console.log("line 852: ", pieceArray);
        targetParentNode.removeChild(g.target);
        selectedPiece.parentNode.removeChild(selectedPiece);
        targetParentNode.appendChild(selectedPiece);
        lightKingParentId = lightKing.parentNode.id;
        darkKingParentId = darkKing.parentNode.id;
        isCheckOrMate();
        if (playerTurn === "light") {
          playerTurn = "dark";
          // console.log("line 861: ", pieceArray);
          // console.log("playerTurn ended2 : light");
        } else if (playerTurn === "dark") {
          playerTurn = "light";
          // console.log("line 865: ", pieceArray);
          // console.log("playerTurn ended2 : dark");
        }
        // console.log(
        //   "final LK: ",
        //   lightKingParentId,
        //   " final DK: ",
        //   darkKingParentId
        // );
      }
    }
  });
});
