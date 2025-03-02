import React,{useState} from 'react'

const CounterApp = () => {

  const [count, setCount] = useState(0)

  const handleAdd =()=>{
    setCount(count + 1)
  }

  const handleSub =() =>{
    setCount(Math.max(count - 1, 0) )
  }

  const handleReset = () =>{
    setCount('')
  }
 return (
    <>
    <h1>Counter App</h1>
     <h1>{count}</h1>
     <button onClick={handleAdd}>Increment</button>
     <button onClick={handleSub}>Decrement</button>
     <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default CounterApp