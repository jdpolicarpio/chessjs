import React, { useState, useEffect } from "react";

function Piece(props) {
  return (
    <img
      src={props.content}
      width="100%"
      height="100%"
      onClick={() => console.log("")}
    />
  );
}

export default Piece;
