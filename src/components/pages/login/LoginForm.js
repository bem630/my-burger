import React from 'react'
import { useState } from "react";
import {useNavigate } from "react-router-dom"
export default function LoginPage() {
    //state
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate("")

    //comportements
  const handleSubmit = (event) => { 
    navigate(`order/${inputValue}`)
    setInputValue("");
   }

   const handleChange = (event) => { 
    setInputValue(event.target.value)
    }

  //Affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
        <h1>bienvenue chez nous !</h1>
        <h1>Connectez vous</h1>
        <input 
          value={inputValue} 
          onChange={handleChange} 
          type="text" 
          placeholder="Entrez votre prénom..." 
          required />
        <button>Accéder à votre espace</button>
      </form>
  )
}
