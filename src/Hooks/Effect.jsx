import React,{useEffect, useState} from 'react'

export const Effect = () => {
const [count, setCount] = useState(3)
 
useEffect(() =>{
    console.log('count not mounted');

    return function(){
        console.log('unmount counter')
    };
}, [])

useEffect(() =>{
console.log('count mounted')
},[count])



  return (
    <>
    <h1>useEffect</h1>
<h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}
