import React, {useState } from 'react'

export const TextConverter = () => {
    const [converter, setConverter] = useState('')
  return (
   <>
   <h3>Text Converter</h3>
   <label htmlFor="">Enter text : </label>
   <input type="text" placeholder ='enter text' 
   value={converter}
   onChange = {(e) => setConverter(e.target.value)}
   />
   <button onClick = {() => setConverter(converter.toLowerCase())}>Lower Case</button>
   <button onClick = {() => setConverter(converter.toUpperCase())}>Upper Case</button>
  
<p>converted text : {converter}</p>
   </>
  )
}
