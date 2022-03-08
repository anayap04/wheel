import React, { useState } from "react";

import RoulettePro from "react-roulette-pro";

import "react-roulette-pro/dist/index.css";

import prizes from "./csvjson.json";

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill("_")
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const prizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 2),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

const Wheel = (props) => {
  const { setWinner } = props;
  const [start, setStart] = useState(false);
  const [name, setName] = useState();
  const [prizeIndex, setPrizeIndex] = useState();
  const [title, setTitle] = useState("Girar");

  const handleStart = () => {
    setStart((prevState) => !prevState);
    setTitle("Girar");
    setWinner(null);
    setPrizeIndex(generateRandomInteger(prizes.length));
  };

  const handlePrizeDefined = () => {
    setWinner(prizeList[prizeIndex].text);
    setTitle("Empezar de nuevo");
  };

  return (
    <div>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
        design={"GracefulLines"}
      />
      <div style={{ width: "100", alignSelf: "center", margin: "auto" }}>
        <button
          style={{
            width: "100%",
            height: "42px",
            background: "transparent",
            color: "white",
            fontSize: '36px',
            border: 'transparent'
          }}
          onClick={handleStart}
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default Wheel;
