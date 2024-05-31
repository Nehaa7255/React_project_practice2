import { useState } from "react";
import "./ColorPicker.css"
const ColorPicker = () => {
    const[selectColor, setselectColor]=useState();
    const data=[
    {color:"#EE4B2B" , name:"red"},
     {color:"#89CFF0", name:"blue"},
     {color: "#7FFFD4", name:"green"},
]
  return (
   <div>
    <h2> ColorPicker</h2>
    <div>
    {data.map((color,index)=>(
        <>
        <div className="btn">
    <button onClick={()=>setselectColor(index) }>{color.name}</button>
    </div>
    <br />
    {selectColor=== index && <p>{color.color}</p>}
    
    </>
  ))}
  </div>
  </div>
  )
}

export default ColorPicker;