import React, { useState } from "react";

import RoulettePro from "react-roulette-pro";

import "react-roulette-pro/dist/index.css";

import prizes from "./csvjson.json";
import titulo from "./assets/img/gigos.png";
import "./wheel.css"

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill("_")
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

const newPrizes = prizes.map((element) => ({
  text: titleCase(element.text),
  image: titulo,
}))


function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

const prizeList = [
  ...newPrizes,
  ...reproductionArray(prizes, prizes.length * 2),
  ...newPrizes,
  ...reproductionArray(prizes, prizes.length),
];

const Wheel = (props) => {
  const { setWinner } = props;
  const [start, setStart] = useState(false);
  const [listUpdated, setListUpdated] = useState([]);
  const [prizeIndex, setPrizeIndex] = useState();
  const [title, setTitle] = useState("Girar");
  const listFiltered = prizeList ? prizeList.filter(element => !listUpdated.includes(element)) : prizeList

  const handleStart = () => {
    setStart((prevState) => !prevState);
    setTitle("Girar");
    setWinner(null);
    setPrizeIndex(generateRandomInteger(prizes.length));
  };

  const handlePrizeDefined = () => {

    setWinner(listFiltered[prizeIndex].text);
    console.log(newPrizes[prizeIndex], listFiltered.length, listUpdated)
    setListUpdated(oldArr => [...oldArr, listFiltered[prizeIndex]]);
    setTitle("Empezar de nuevo");
  };

  return (
    <div style={{ fontSize: 16 }}>
      <RoulettePro
        prizes={listFiltered}
        prizeIndex={prizeIndex}
        designOptions={{
          prizeItemWidth: 150,
          prizeItemHeight: 150,
        }}
        style={{
          fontSize: 14,
        }}
        start={start}
        onPrizeDefined={handlePrizeDefined}
        spinningTime={3}
        design={"GracefulLines"}
      />
      <div style={{ width: "120", alignSelf: "center", margin: "auto" }}>
        <button
          style={{
            marginTop: -10,
            width: "100%",
            height: "42px",
            background: "transparent",
            color: "#730058",
            fontSize: "36px",
            border: "transparent",
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
