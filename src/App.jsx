import React,{useState} from 'react'

const App = () => {
  const [displayColor, setDisplayColor] = useState('#ffffff')
  const handleClicked =()=>{
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setDisplayColor(randomColor);
  }
  return (
    <>
    
    <h3>Create a React component where clicking a button changes the background color randomly using useState.</h3>
        <button onClick = {handleClicked}>Click me</button>
        <div style={{backgroundColor : displayColor,
      height : '50vh',
      width : '50vh',
      transition: "background-color 0.5s ease",

    }}></div>
    </>
  )
}

export default App