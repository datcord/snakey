import { useState } from "react";
import React from "react";
import "./SnakeGame.css";
import bodyImg from "./assets/body.png";
import headImg from "./assets/head.png";
import foodImg from "./assets/icon-192.png";

function SnakeGame() {
  var randomX, randomY;
  const food = document.querySelector(".food");
  const [pauseAnim, setPauseAnim] = useState(false);
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
    if (pauseAnim) {
      return;
    }
    if (
      document.querySelector(".snake").clientHeight <=
        window.innerHeight - 90 &&
      direction
    ) {
      setbodysize(bodysize + 1);
      document.querySelector(
        ".game"
      ).style.backgroundPosition = `bottom 0.5rem left 0.5rem`;
    } else if (!direction && bodysize > 3) {
      randomX = Math.floor(Math.random() * 100) - 1;
      randomY = Math.floor(Math.random() * 100) - 1;
      document.querySelector(
        ".game"
      ).style.backgroundPosition = `${randomY}% ${randomX}%`;
      setbodysize(bodysize - 1);
    } else {
      food.classList.toggle("scaleDown");
      randomX = Math.floor(Math.random() * 100) - 1;
      randomY = Math.floor(Math.random() * 100) - 1;
      document.querySelector(
        ".game"
      ).style.backgroundPosition = `${randomY}% ${randomX}%`;
      setDirection(!direction);
    }
  }
  return (
    <div
      onAnimationEnd={() => {
        handleAnimationEnd();
      }}
      className="game"
    >
      <Snake />
      <img
        className="food"
        src={foodImg}
        alt="f"
        onClick={() => setPauseAnim(!pauseAnim)}
      />
    </div>
  );
}

export default SnakeGame;
