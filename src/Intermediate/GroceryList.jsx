import React , {useState} from 'react'

export const GroceryList = () => {
const [addToCart, setAddToCart] = useState([])

const handleAddToCart = (item) =>{
  setAddToCart([...addToCart, item])
}

const handleDelete =(index) =>{
    setAddToCart(addToCart.filter((_, id) => id!== index))
}


  return (
    <>
    <h3>Grocery List</h3>
   
   <div>
    <p>Apple</p>
   <button onClick={() => handleAddToCart('Apple')}>Add to cart</button>


   <p>Banana</p>
   <button onClick={() => handleAddToCart('banana')}>Add to cart</button>
    <p>Added List : {addToCart}</p>
    {addToCart.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <button onClick={() => handleDelete(index)}>Remove</button>
        </div>
      ))}
   </div>

 
    
    </>
  )
}
