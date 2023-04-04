import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import Product from '../product/product';
import { auth, provider } from '../confg/firebase';
import {signInWithPopup} from "firebase/auth";



const App = () => {
  const [value, setValue ] = useState(undefined);
  const handleClick =()=>{
    signInWithPopup(auth, provider).then((data)=>{
      setValue (data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }
   useEffect(()=>{
    setValue(localStorage.getItem('email'))
   })

   

  return (
    <>
      
      { value ?( <Product/>):(
        <div className='btn'>
      <button onClick={handleClick}>Log in with Google</button>
      </div>
)}
      </>
  )
}


export default App;
