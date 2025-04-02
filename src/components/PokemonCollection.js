import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({items}) {

const listData = items.map(item => (
  <PokemonCard 
  key={item.id} 
  pok={item}
  />
))

  return (
    <>
    <h1>Hello From Pokemon Collection</h1>
    <Card.Group itemsPerRow={6}>
      {listData}
    </Card.Group>
  </>
  );
}

export default PokemonCollection;
