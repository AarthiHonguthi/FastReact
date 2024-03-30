import { useState } from 'react'

import './App.css'



  function App() {
    const [counter, setCounter] = useState(15)
   //let counter = 15
 
   const addValue = () => {

      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
   }
  
   const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
     }  else {
        window.alert("Counter cannot be negative!");
      }
    
  };
 
   return (
     <>
       <h1> I'm still learning React</h1>
      <h2> Counter Value: {counter} </h2>
      <button
      onClick = {addValue}
      > Add value</button> {"     "}
     <button
     onClick = {removeValue}> Remove Value</button>
     <p>footer: {counter}</p>
     </>
   )
   
  }

export default App
