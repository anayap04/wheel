import React, { useEffect, useState } from "react";

import RoulettePro from "react-roulette-pro";

import "react-roulette-pro/dist/index.css";
import name from '../src/csvjson.json'

import "./wheel.css";

import { mapValues } from "./utils/functions";

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill("_")
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

const Wheel = (props) => {
  const { setWinner } = props;
  const [start, setStart] = useState(false);
  const [listUpdated, setListUpdated] = useState([]);
  const [prizeIndex, setPrizeIndex] = useState();
  const [title, setTitle] = useState("Girar");
  const [list, setList] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (listUpdated.length === 0) {
        const value = name
        console.log(value)
        const arrayValues = mapValues(value);
        const newFiltered = arrayValues
          ? arrayValues.filter((element) => !listUpdated.includes(element))
          : arrayValues;
        const finalArr = [
          ...newFiltered,
          ...reproductionArray(newFiltered, newFiltered.length * 2),
          ...newFiltered,
          ...reproductionArray(newFiltered, newFiltered.length * 2),
        ];
        setList(finalArr);
      
    } else {
      setListUpdated([]);
    }
  }, [updated, listUpdated]);

  setInterval(() => {
    setUpdated(!updated);
  }, 1.2e6);

  const listFiltered = list
    ? list.filter((element) => !listUpdated.includes(element))
    : list;

  const handleStart = () => {
    setStart((prevState) => !prevState);
    setTitle("Girar");
    setWinner(null);
    setPrizeIndex(generateRandomInteger(list.length));
  };

  const handlePrizeDefined = () => {
    setWinner(listFiltered[prizeIndex].text);
    listUpdated.push(listFiltered[prizeIndex]);
    console.log(listUpdated);
    setTitle("Empezar de nuevo");
  };

  return (
    <div style={{ fontSize: 16 }}>
      <RoulettePro
        prizes={list && listFiltered}
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
            color: "#CFCCC5",
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
