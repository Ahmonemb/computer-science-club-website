import React from "react";
import { useState,useEffect,useRef } from "react";
import logo from './assets/COMCI.png'
import Discord from './assets/Discord.jpg'
import './index.css'

// import {BrowserRouter, Router, Route} from 'react-router-dom'
function Home(){
    const ButtonHover = useRef(null)
    function ContactPage(){
    console.log("Contact was pressed")
    }
    function EventPage(){
     console.log("Event was pressed")
    }
    function OfficerPage(){
        console.log("Officer Page was pressed")
    }
    function HomePage(){
    console.log("Home page was pressed")
    }
    function ProjectPage(){

    }
    function ResourcePage(){

    }
    // function HoverOverLay(){
    //     ButtonHover.i.backgroundColor = "green"
    // }
    // function onHoverLeave(){
    //     ButtonHover.i.backgroundColor = "Yellow"
    // }
    return (
        <>
          <div id = "MenuButtonHolder">
          <button id = "Home"className = "MenuButtons" onClick= {HomePage} >Home<i></i></button>
         <button id = "Contact" className = "MenuButtons" onClick = {ContactPage}>Contact<i></i></button>
         <button id = "Events" className="MenuButtons" onClick={EventPage}>Events<i></i></button>
         <button id = "Officers" className = "MenuButtons" onClick={OfficerPage}>Officers<i></i></button>
         <button id = "Projects" className = "MenuButtons" onClick = {ProjectPage}>Projects<i></i></button>
         <button id = "Resources" className = "MenuButtons" onClick = {ResourcePage}>ResourcePage<i></i></button>
          </div>
      
        <div className = "WelcomePage">
       <h1 id ="WelcomeName"> Welcome To Los Medanoss Computer Scinece Club</h1>
        <p id="WelcomeMessege">Club Meetings happend every friday on <a>Discord!</a></p>
        </div>
        <div id = "MoreInfoClub">
        <img id="COMSCIIMAGEE" alt = "COMSCI CLUB IMAGE"  src = {logo}/>
         <p id = "AboutClub">We are a computer science club that helps each student foster their love through coding; anyone with an interest in computer science is welcome. We have collabarative projects we do, guest speakerss, 
            computer programming conferences/events(you can check any upcoming event here)Feel free to join or drop by share your projects/ideas to this club! Or really Anything! Club meetings happend every friday on our discord at 8pm. Please Join!</p>
            </div>
           <div id="DiscordDiv">
            <h1>JOIN</h1>
            <img id="DiscordImage" alt="Join our Discord" src={Discord} />
            </div>

            
        </>
    );
}
export default Home;
