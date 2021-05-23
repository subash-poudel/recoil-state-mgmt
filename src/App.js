import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainRouter from "./components/common/MainRouter";
import NavBar from "./components/common/NavBar";

function App() {
  return (
    <Router>
      <RecoilRoot>
        <NavBar />
        <MainRouter />
      </RecoilRoot>
    </Router>
  );
}

export default App;
