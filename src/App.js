import React, { useState, useCallback } from "react";
import "./App.css";
import Wheel from "./wheel";
import img from "./assets/img/logo.png";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const App = () => {
  const [winner, setWinner] = useState();
  const { width, height } = useWindowSize();

  return (
    <div className="app-info">
      {winner ? <Confetti width={width} height={height} /> : null}
      <img className="img-logo" src={img} />
      <Wheel setWinner={setWinner} />
      <div className="winner-title">{winner ? "Felicidades" : null}</div>
      <div className="winner">{winner}</div>
    </div>
  );
};

export default App;
