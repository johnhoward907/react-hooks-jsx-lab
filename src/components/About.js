import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    About
    <h2>About Me</h2>
    <p>I’m passionate about building creative and user-friendly web apps!</p>
    <img src={image} alt="I made this"/>
    </div>;
}

export default About;
