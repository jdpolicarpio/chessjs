import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css";
import "./css/square.css";
import Game from "./game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
