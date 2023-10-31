import React, { useState } from "react";
import "./App.css";
import Wheel from "./wheel";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import logo from "./assets/img/logoME.png";

const PageWheel = () => {
  const [winner, setWinner] = useState();
  const { width, height } = useWindowSize();
  
  const title = () => (
    <div>
      <div className="winner-title"> {"El número ganador es"} </div>
      <div className="winner">{winner}</div>
      <button
        style={{
          width: "100%",
          height: "4hv",
          background: "transparent",
          color: "white",
          fontSize: "6hv",
          border: "transparent",
        }}
        onClick={() => setWinner(null)}
      >
        {"Volver a tirar"}
      </button>
    </div>
  );
  return (
    <div className="app-container">
      <div className={winner ? "winner-container" : null}>
        {winner ? title() : null}
      </div>
      <div>
        <div className="app-info">
          <div className="title-container">
            <img src={logo} width={700} alt="logo" />
            <p className="title-style">{"Ruleta"}</p>
          </div>
          {winner ? <Confetti width={width} height={height} /> : null}
          <Wheel setWinner={setWinner} />
        </div>
        <div className="side" />
      </div>
    </div>
  );
};

export default PageWheel;
