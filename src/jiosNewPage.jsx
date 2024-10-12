import React from "react";
import { useState,useEffect,useRef } from "react";
import logo from './assets/COMCI.png'
function Home(){
    return (
        <>
         <button id = "Home"className = "MenuButtons">Home</button>
         <p>Is this how you make a new page?! This could be super duper scuffed, I hope nothing screws up!</p>
         <img alt = "COMSCI CLUB IMAGE"  src = {logo}/>

        </>
    );
}
export default Home;
