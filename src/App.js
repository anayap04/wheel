import React, { useState } from "react";
import "./App.css";
import Wheel from "./wheel";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Col, Grid, Row } from "react-flexbox-grid";

const App = () => {
  const [winner, setWinner] = useState();
  let subtitle;
  const { width, height } = useWindowSize();
  const backgroundColor = "rgba(2, 36, 153, 0.7)";
  const gradient =
    "linear-gradient(0deg, rgba(30, 22, 129, 1) 25%, rgba(125, 117, 219, 1) 65%)";
  const title = () => (
    <div >
      <div className="winner-title"> {"Felicidades"} </div>
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
      <div className={winner ? "winner-container" : null}>{winner ? title() : null}</div>
      <Grid style={{ width: "100%", paddingTop: "15%" }}>
        <Row>
          <Col xs={12} />
        </Row>
        <Row style={{ height: height / 2 }}>
          <Col
            xs={3}
            style={{
              background: backgroundColor,
              paddingRight: 0,
            }}
          />
          <Col xs={6} style={{ padding: 0 }}>
            <div>
              <div className="app-info">
                {winner ? <Confetti width={width} height={height} /> : null}
                <Wheel setWinner={setWinner} />
              </div>
              <div className="side" />
            </div>
          </Col>
          <Col
            xs={3}
            style={{
              background: backgroundColor,
            }}
          />
        </Row>
        <Row>
          <Col xs={12} style={{ height: "50%" }} />
        </Row>
      </Grid>
    </div>
  );
};

export default App;
