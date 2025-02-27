import React , {useState} from 'react'

const App = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
    <label htmlFor="">Enter Password : </label>
    <input
    type = {showPassword ? 'text' : 'password'}
    />
    <button onClick={() =>setShowPassword(!showPassword) }>{showPassword ? 'Hide' : 'Show' }</button>
    </>
  )
}

export default App