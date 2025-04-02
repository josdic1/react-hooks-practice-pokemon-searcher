import { useState, useEffect } from 'react';
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({items, addPokemon}) {

const [filteredList, setFilteredList ] = useState(items)
const [isSearching, setIsSearching] = useState(false);

const onFilter = (val) => {
  if (val.trim() === "") {
    setIsSearching(false);
  } else {
    setIsSearching(true);
    const filteredListData = items.filter(pok =>
      pok.name.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredList(filteredListData);
  }
};

  return (
   
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
      addPokemon={addPokemon}
      />
      <br />
      <Search onFilter={onFilter}/>
      <br />
      <PokemonCollection 
      items={isSearching ? filteredList : items}
      />
    </Container>
    
  );
}

export default PokemonPage;
