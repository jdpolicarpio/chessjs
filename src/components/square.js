import React from "react";

import blackBishop from "../images/bb.png";
import blackKing from "../images/bk.png";
import blackKnight from "../images/bn.png";
import blackPawn from "../images/bp.png";
import blackQueen from "../images/bq.png";
import blackRook from "../images/br.png";
import whiteBishop from "../images/wb.png";
import whiteKing from "../images/wk.png";
import whiteKnight from "../images/wn.png";
import whitePawn from "../images/wp.png";
import whiteQueen from "../images/wq.png";
import whiteRook from "../images/wr.png";

function Square(props) {
  let squareContent = mapStringToImage(props.piece);

  return (
    <div class={props.class} key={props.i}>
      <img src={squareContent} width="100%" height="100%" />
    </div>
  );
}

function isSquareEmpty(imageString) {
  return imageString == " " ? true : false;
}

function isLowerCase(imageString) {
  return imageString == imageString.toLowerCase() ? true : false;
}

function mapStringToImage(pieceString) {
  switch (pieceString) {
    case " ":
      return undefined;
    case "b":
      return blackBishop;
    case "k":
      return blackKing;
    case "n":
      return blackKnight;
    case "p":
      return blackPawn;
    case "q":
      return blackQueen;
    case "r":
      return blackRook;
    case "B":
      return whiteBishop;
    case "K":
      return whiteKing;
    case "N":
      return whiteKnight;
    case "P":
      return whitePawn;
    case "Q":
      return whiteQueen;
    case "R":
      return whiteRook;
  }
}

export default Square;
