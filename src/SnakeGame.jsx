import { useState } from "react";
import React from "react";
import "./App.css";
import bodyImg from "./assets/body.png";
import headImg from "./assets/head.png";
import foodImg from "./assets/icon-192.png";

function SnakeGame() {
  const [bodysize, setbodysize] = useState(3);
  const body = Array(bodysize).fill(bodyImg);
  var i = 0;
  const bodyParts = body.map((part) => (
    <img className="bodypart" key={i++} src={part} alt="b" />
  ));
  const Snake = () => {
    return (
      <div className="snake">
        {bodyParts}
        <img className="head" src={headImg} alt="h" />
      </div>
    );
  };

  const Food = () => {
    return <img className="food" src={foodImg} alt="f" />;
  };
  return (
    <div
      onAnimationEnd={() => {
        if (bodysize <= window.innerHeight) {
          setbodysize(bodysize + 1);
        }
      }}
      className="game"
    >
      <Snake />
    </div>
  );
}

export default SnakeGame;
