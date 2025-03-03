import { useState } from "react";
import React from "react";
import "./SnakeGame.css";
import bodyImg from "./assets/body.png";
import headImg from "./assets/head.png";
import foodImg from "./assets/icon-192.png";

function SnakeGame() {
  const food = document.querySelector(".food");
  const background = document.querySelector(".game");
  const [direction, setDirection] = useState(true); //true ~> down, false ~> up
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

  function handleAnimationEnd() {
    if (
      document.querySelector(".snake").clientHeight <=
        window.innerHeight - 90 &&
      direction
    ) {
      setbodysize(bodysize + 1);
    } else if (!direction && bodysize > 3) {
      setbodysize(bodysize - 1);
    } else {
      food.classList.toggle("scaleUp");
      background.classList.toggle("rotation");
      setDirection(!direction);
    }
  }
  const Food = () => {
    return <img className="food" src={foodImg} alt="f" />;
  };
  return (
    <div
      onAnimationEnd={() => {
        handleAnimationEnd();
      }}
      className="game"
    >
      <Snake />
      <Food />
    </div>
  );
}

export default SnakeGame;
