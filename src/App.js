import { React, useEffect, useState } from 'react'
import logo from './assets/logo.png';
import left from './assets/Left.png'
import middle from './assets/Middle.png'
import right from './assets/Right.png'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Create from './components/Create';




function App() {
  const [show, setShow] = useState(false)


  return (


    < div className="App" >
      <div className="header">
        <img src={logo} height="100px" width="100pxx"></img>
        <button class="login">Login</button>
      </div>
      <div className="body">
        <h3>Facebook Events without Facebook</h3>
        <p>Easily host and share events with your friends accross social media</p>
        <Link to="/create">
          <button id="linkbutton">Create my  next event</button>
        </Link>

      </div>
      <div className="product">
        <img src={left} class="first"></img>
        <img src={middle} id="second"></img>
        <img src={right} id="third"></img>
      </div>
      {/* <Create show={show} /> */}
    </div >



  );
}

export default App;
