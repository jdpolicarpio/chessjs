import React from "react";

function Square(props) {
  return (
    <div class={props.class} key={props.i}>
      {props.image}
    </div>
  );
}

export default Square;
