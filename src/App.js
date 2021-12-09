import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Countern, { Counter } from "./Services/Counter";
import Navigation  from "./components/Navigation";
import {Home} from "./components/Home";
import{Footer} from "./components/Footer";
import { Cards } from "./components/Cards";
import Classcomp from"./components/classcomp/Classcomp"

import { Product$list } from "./components/classcomp/Product$list";


// import "App.css";


const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/"element={<Cards/>}/>
      <Route path="/Prodact"element ={<Product$list/>}/>
      <Route path="/Calculater"element={<Counter/>}/>
        
    </Routes>
   
    </BrowserRouter>


  );
}

export default App;
