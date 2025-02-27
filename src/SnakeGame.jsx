import { useState } from "react";
import React from "react";
import "./App.css";

function SnakeGame() {
  const [bodysize, setbodysize] = useState(5);
  const body = Array(bodysize).fill("C");
  const bodyParts = body.map((part) => <span>{part}</span>);
  const snake = () => {};
  return (
    <div className="game">
      {bodyParts}
      <span>H</span>
    </div>
  );
}

export default SnakeGame;
