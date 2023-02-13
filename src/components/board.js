import React, { useState } from "react";
import Square from "./square";
import determineSquareFromFenString from "../helper/positionHelper";

function Board(props) {
  const BoardArray = [];
  const rankArray = ["h", "g", "f", "e", "d", "c", "b", "a"];
  const fileArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

  let classNameParameter = "isNotShaded";
  // Used to load starting position
  let positionArray = determineSquareFromFenString(props.startingPosition);
  console.log(positionArray);

  for (let rank = 7; rank > -1; rank--) {
    for (let file = 7; file > -1; file--) {
      // Determines if the square should be shaded or not
      if (isShaded(file, rank)) {
        classNameParameter = "isShaded";
      } else {
        classNameParameter = "isNotShaded";
      }

      let square = positionArray;

      BoardArray.push(
        <Square
          class={classNameParameter}
          key={rankArray[file] + fileArray[rank]}
        />
      );
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
