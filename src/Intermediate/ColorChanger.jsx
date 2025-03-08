import React, {useState} from 'react'

export const ColorChanger = () => {
    const [color, setColor] = useState('white')
  
    const handleColorChanger = (color) =>{
    setColor(color)
    }
  return (

 
    <div style={{ backgroundColor: color, height: "100vh", textAlign: "center", padding: "20px" }}>
   <h3>BG color changer</h3>

   <button onClick = {() => handleColorChanger('Red')}>Red</button>
   <button onClick = {() => handleColorChanger('Green')}>Green</button>
   <button onClick = {() => handleColorChanger('Blue')}>blue</button>
   <button onClick = {() => handleColorChanger('Pink')}>Pink</button>
   <button onClick = {() => handleColorChanger('Black')}>Black</button>
   </div>
   
  )
}
