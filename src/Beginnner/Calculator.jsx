import React ,{useState} from 'react'

export const Calculator = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

    const handleAdd = () =>{
       setResult(Number(num1) + Number(num2)) 
       
    };

    const handleSub = () =>{
        setResult(Number(num1) - Number(num2))  
     
     };


     const handleMultiple = () =>{
        setResult(Number(num1) * Number(num2)) 
        
     };

     
const handleDivision = () =>{
if(Number(num2) === 0){
    setResult (`it cannot divide`)
}else{
    setResult(Number(num1) / Number(num2))
}
}
    
     
  return (
   <>
   <h3>Simple Calculator</h3>

   <label htmlFor="">Enter number1 : </label>
   <input type="text" 
   placeholder = 'enter number1' 
   value ={num1}
   onChange = {(e) => setNum1(e.target.value)}
   />
   <br/>

   <label htmlFor="">Enter number2 : </label>
   <input type="text" 
   placeholder = 'enter number2' 
   value = {num2}
   onChange = {(e) => setNum2(e.target.value)}
   />
   <br/>
   <button onClick={handleAdd}>Addition</button>
   <button onClick={handleSub}>Substraction</button>
   <button onClick={handleMultiple}>Multiple</button>
   <button onClick={handleDivision}>Division</button>
    <p>Result : {result}</p>
   </>
  )
}
