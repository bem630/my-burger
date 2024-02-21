import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("")

  //comportements
  const handleSubmit = (event) => { 
    alert(`Bonjour ${inputValue}`)
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
  );
}

export default App;
