import React, { useState } from "react";
import Square from "./square";
import positionArrayFromFenString from "../helper/positionHelper";

function Board(props) {
  const BoardArray = [];
  const rankArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const fileArray = ["8", "7", "6", "5", "4", "3", "2", "1"];

  let classNameParameter = "isNotShaded";
  // Used to load starting position - 64 elements - 8 x 8
  let positionArray = positionArrayFromFenString(props.startingPosition);
  let i = 0;
  let squareContent = " ";

  console.log(positionArray);

  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      // Determines if the square should be shaded or not
      if (isShaded(file, rank)) {
        classNameParameter = "isShaded";
      } else {
        classNameParameter = "isNotShaded";
      }

      squareContent = positionArray[i];

      BoardArray.push(
        <Square
          class={classNameParameter}
          key={rankArray[file] + fileArray[rank]}
          piece={squareContent}
        />
      );

      i++;
    }
  }

  return <div class="chessboard">{BoardArray}</div>;
}

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

function isShaded(file, rank) {
  if (isEven(rank)) {
    if (isEven(file)) {
      return false;
    } else {
      return true;
    }
  } else {
    if (isEven(file)) {
      return true;
    } else {
      return false;
    }
  }
}

export default Board;
