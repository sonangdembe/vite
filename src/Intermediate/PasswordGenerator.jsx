import React,{useState, useCallback, useEffect, useRef} from 'react'

export const PasswordGenerator = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed ] = useState(false)
    const [password, setPassword] = useState('')

const passwordRef = useRef(null)
    const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabdefghijklmnopqrstuvwxyz'
    if (numberAllowed) {
        str += '0123456789'
    }
    if( charAllowed) {
        str += '@#$%^&*(){}[],.~!`'
    }
    for (let i = 1; i<= length; i++){
        let char = Math.floor(Math.random() * str.length )
     pass += str.charAt(char)
    }
    setPassword(pass)
    },[length, numberAllowed, charAllowed])


    const copyPasswordToClipboard = useCallback (() =>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,3)
        window.navigator.clipboard.writeText(password)
    },
    [password])
    useEffect(() => {
        passwordGenerator()
    }
    , [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <h3>password maker</h3>
    <input type="text"
    value ={password}
    placholder = 'password'
    readOnly
    ref={passwordRef}
    />
    <button onClick={copyPasswordToClipboard}>Copy</button>


    <br/>
    <input type="range"
    min={6}
    max={100}
    value = {length}
    onChange ={(e) => setLength(e.target.value)}
    
    />
   <label htmlFor="">Length : {length}</label>


   <label htmlFor="">Character {charAllowed}</label>
   <input type="checkbox"
   checked = {charAllowed}
   id = 'charInput'
   onChange = {() => setCharAllowed((prev) => !prev)}
   />
    
   

    <label htmlFor="">Number {numberAllowed}</label>
   <input type="checkbox"
   value = {numberAllowed}
   id = 'numberInput'
   onChange = {() => setNumberAllowed((prev) => !prev)}
   />

    </>
  )
}
