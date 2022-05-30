import React, { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Wheel from "./wheel";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import PageWheel from "./PageWheel";

const App = () => {
  return (
    <BrowserRouter basename="/wheel">
    <Routes>
      <Route path="/" element={<PageWheel />} />
    </Routes>
  </BrowserRouter>
  )
};

export default App;
