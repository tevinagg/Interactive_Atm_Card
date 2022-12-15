import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Submitted from "./components/Submitted";


function App() {

    return (
      <>
          <Routes>
              <Route path="/" element={<MainComponent />}/>
              <Route path="/submit" element={<Submitted />} />
          </Routes>

      </>
  );
}

export default App;
