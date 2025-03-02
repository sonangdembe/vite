import React, {useState} from 'react'

export const FormValidation = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const isValidName = (name) =>{
    return /^[A-Za-z0-9]{3,}$/.test(name)
  }

  const isValidEmail = (email) =>{
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(email)
  }

  const isValidPhone = (phone) =>{
    return /^\d{10}$/.test(phone)
  }
const handleSubmit = (e) =>{
e.preventDefault();

if (!isValidName(name)) {
  alert("Invalid Name! It should contain only letters and numbers (min 3).");
  return;
}
if (!isValidEmail(email)) {
  alert("Invalid Email! Example: user@example.com");
  return;
}
if (!isValidPhone(phone)) {
  alert("Invalid Phone! It should be exactly 10 digits.");
  return;
}
alert("Form submitted successfully");
}

  return (
 <>
 <h3>Form Validation</h3>
 <form action="" onSubmit={handleSubmit}>
 <label htmlFor="">Enter your Name : </label>
 <input type="text" placeholder ='enter name' value={name}
          onChange={(e) => setName(e.target.value)}/>
  <br/>
 <label htmlFor="">Enter your email: </label>
 <input type="email" placeholder ='enter email' value={email}
          onChange={(e) => setEmail(e.target.value)}/>
 <br/>
 <label htmlFor="">Enter Phone number : </label>
 <input type="number" placeholder = 'enter phoneNumber'  value={phone}
          onChange={(e) => setPhone(e.target.value)}/>
 <button type = 'submit'>Submit</button>
 </form>
 </>
  )
}
