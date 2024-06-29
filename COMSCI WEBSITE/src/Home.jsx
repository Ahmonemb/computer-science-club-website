import React from "react";
import { useState,useEffect,useRef } from "react";
import logo from './assets/COMCI.png'
function Home(){
    return (
        <>
         <button id = "Home"className = "MenuButtons">Home</button>
         <p>This is a computer science club to help yo get a job, increase your skills and network oppurtunities</p>
         <img alt = "COMSCI CLUB IMAGE"  src = {logo}/>

        </>
    );
}
export default Home;
