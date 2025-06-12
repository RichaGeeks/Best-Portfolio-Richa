import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./cyl";
import Nav from './verticlenav';
import NotFound from './404pagenotfound';
import Home from './home';
import Model from './Astraiamodel';
//import Dummy from './dummyhome';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
       
        
      </Routes>
      
    </Router>
  );
};

export default App;


