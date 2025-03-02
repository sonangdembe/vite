import React, {useState} from 'react'

export const RandomQuoteGenerator = () => {
    const [quote, setQuote] = useState("The best way to predict the future is to invent it. – Alan Kay")
    
    const quotes =[
     "The best way to predict the future is to invent it. – Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "The only way to do great work is to love what you do. – Steve Jobs"  
    ]
  
    const randomGenerator = () =>{
       const randomIndex = Math.floor(Math.random() * quotes.length)
       setQuote(quotes[randomIndex])
    }
  return (
    <>
    <h3>Random Quote Generator</h3>
   <button onClick={randomGenerator}>Next</button>
   <p>{quote}</p>
    </>
  )
}
