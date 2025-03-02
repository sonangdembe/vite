import React,{useState} from 'react'

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date())
  return (
    <>
<h1>Digital Clock</h1>    
   <label htmlFor=""> right now it's : {time.toLocaleTimeString()}</label>
    </>
  )
}
