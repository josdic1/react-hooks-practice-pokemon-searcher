import { useState, useEffect } from 'react';
import PokemonPage from "./PokemonPage";

function App() {

  const [ list, setList ] = useState([])

  useEffect(() => {
    renderList()
  },[])

async function renderList() {
try {
  const r = await fetch(`http://localhost:3001/pokemon`)
  if(!r.ok) {
    throw new Error("💥 Error");
  }
  const data = await r.json()
  setList(data)
}catch (error) {console.error("❌ Caught error:", error);}
  }

  async function handleAddPokemon(newPok) {
    try {
      const r = await fetch(`http://localhost:3001/pokemon`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        }, body: JSON.stringify(newPok)
      })
      if(!r.ok) {
        throw new Error("💥 Error");
      }
      const data = await r.json()
      const updatedList = [...list, data]
      setList(updatedList)
    }catch (error) {console.error("❌ Caught error:", error);}
  }



  return (
    <div className="App">
      <PokemonPage 
        items={list}
        addPokemon={handleAddPokemon}
      />
    </div>
  );
}

export default App;
