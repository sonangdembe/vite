import React,{useState} from 'react'

const App = () => {
  const [DisplayName, setDisplayName] = useState('')
  
  return (
    <>
    <h3>Build a React form with an input field where users can type their name. Display the typed name below the input field in real time.</h3>
    <label htmlFor="">Enter your name : </label>
    <input type="text"
    placeholder = 'enter your name'
    onChange = {(e) => setDisplayName(e.target.value)}
    />
    <p>name your entererd : {DisplayName}</p>
    </>
  )
}

export default App