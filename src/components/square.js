import React, { useState, useEffect } from "react";
import Piece from "./piece";

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

  console.log(typeof squareContent);

  if (typeof squareContent === "undefined") {
    return <div class={props.class}></div>;
  } else {
    return (
      <div class={props.class}>
        <Piece content={squareContent} key={props.key} />
      </div>
    );
  }
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
