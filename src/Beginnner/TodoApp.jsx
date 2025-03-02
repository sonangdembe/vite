import React,{useState} from 'react'

export const TodoApp = () => {
    const [showTask, setShowTask] = useState('')
    const [showTasks, setShowTasks] = useState([])

const  handleClicked = () => {
 setShowTasks([...showTasks, showTask])
 setShowTask('')
}


const handleDelete = (id) => {
    setShowTasks(showTasks.filter((_, index) => index !== id))

}
  return (
  <>
 <h3>To-DO App</h3>
  
  <label htmlFor="">Add task : </label>
  <input type="text" 
  placholder = 'enter task'
  value={showTask}
  onChange ={(e) => setShowTask(e.target.value)}
  />
  <button onClick ={handleClicked}>Add</button>
  <ul>
    {showTasks.map((curr, id) =>(
     <li key = {id}>{curr}
    <button onClick = {() => handleDelete(id)}>Delete</button>
    </li>
    ))}
  </ul>
  
  </>
  )
}
