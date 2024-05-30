import { useState } from "react"
import "./About.css";
const About = ({heading, name, learning}) => {
    const[show,setshow]=useState(false);
  return (
    <div>
    <h1>{heading}</h1>
    <h2>{name}</h2>
    <button onClick={() => setshow(!show)}className="p" >Know more</button>
    {show && <p>{learning}</p>}
    </div>
  )
}

export default About