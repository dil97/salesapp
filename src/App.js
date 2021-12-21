import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configStore } from "./components/State/Store/configStore";
import { CheckRedux } from "./components/classcomp/CheckRedux";

import { Counter } from "./Services/Counter";

// import Countern, { Counter } from "./Services/Counter";
import Navigation  from "./components/Navigation";
// // import {Home} from "./components/Home";
// // import{Footer} from "./components/Footer";
import { Cards } from "./components/Cards";
// // import Classcomp from"./components/classcomp/Classcomp"

import { Product$list } from "./components/classcomp/Product$list";
import Toggleclickchangecolor from "./components/classcomp/Toggleclickchangecolor";
// import Timeout from "./Services/Timeout"
// import Watch from "./Services/Watch";


// import "App.css";


const App = () => {
  const localStore = configStore();
  return (   
     <div>
    {/* // <Provider store ={localStore}>
    //   <CheckRedux/>
  */}
{/* 
    <BrowserRouter>
     <Navigation/>
     <Routes>
      <Route path="/"element={<Cards/>}/>
      <Route path="/Prodact"element ={<Product$list/>}/>
      <Route path="/Calculater"element={<Counter/>}/>
      <Route path="/redux"element={<CheckRedux/>}/>
     </Routes>
     </BrowserRouter> */}
      <Toggleclickchangecolor/>

      </div>
    
  );
}

export default App;
