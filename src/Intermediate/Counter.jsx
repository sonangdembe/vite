import React, {useState} from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () =>{
      setCount(count < 20 ?  count + 1 : count) 
    }

    const handleDecrement = () =>{
//         if(count <= 0){
//  setCount(0)
//         }
//         else{
//           setCount(count - 1)
//         }
setCount(count <= 0 ? count : count - 1)
    }
  return (
    <>
 <h3 className="bg-green-400">Counter</h3>

    <p>{count}</p>
    <button onClick={handleIncrement} >Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}
