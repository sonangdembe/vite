import React, {useState} from 'react'

const App = () => {
 
  const [things, setThings] = useState([]) // store the list of an item
  const [thing, setThing] = useState('') // store the current value
  


  const handleAdd =() =>{
    setThings([...things, thing]) // add new item to an array
    setThing('') // clear input field
  }

  const handleDelete = (index) =>{
    const updatedThings = things.filter((_, id) => id !==index)
    setThings(updatedThings);
  }
  return (
    <>
    <label htmlFor="">Enter the things : </label>
    <input
     value={thing}    placeholder = 'enter whatever you like'
    onChange = {(e) => setThing(e.target.value)}
    />
    <button onClick ={handleAdd}>Add</button>
    <br/>
    <p>Things you entered</p>

    <ul>
     {
      things.map((curr, id) =>(
        <li key={id}>{curr}{''}
        <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))
     }
    </ul>
  
    </>
  )
}

export default App