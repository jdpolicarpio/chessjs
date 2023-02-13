import React from "react";
import Board from "./components/board";

let fenStartingPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

function Game() {
  return <Board startingPosition={fenStartingPosition} />;
}

export default Game;
