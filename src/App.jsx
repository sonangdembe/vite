import React from 'react'
import CounterApp from './Beginnner/CounterApp'
import { TodoApp } from './Beginnner/TodoApp'
import { DigitalClock } from './Beginnner/DigitalClock'
import { FormValidation } from './Beginnner/FormValidation'
import { RandomQuoteGenerator } from './Beginnner/RandomQuoteGenerator'
import { TextConverter } from './Beginnner/TextConverter'
import { Calculator } from './Beginnner/Calculator'
import { GroceryList } from './Intermediate/GroceryList'
import { NotesApp } from './Intermediate/NotesApp'
import { Counter } from './Intermediate/Counter'
import { Propss } from './Intermediate/Propss'

const App = () => {
  return (
   <>
   {/* 
    <TodoApp/> 
   <DigitalClock/> 
   <FormValidation/>
   <RandomQuoteGenerator />
   <TextConverter/>
   <Calculator/>
   <GroceryList/>
  <NotesApp/> 
 
   <Propss 
   name = 'sona'
   agr = '33'
   />*/}
    
    <Counter/>   
     


   </>
  )
}

export default App