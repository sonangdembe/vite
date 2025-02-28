import React,{useState} from 'react'

const App = () => {
  const [toggle, setToggle] = useState(true)
  
  return (
    <>
    <button onClick={() => setToggle(!toggle)}>{toggle ? 'Off' : 'On'}</button>
    </>
  )
}

export default App