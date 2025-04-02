import { useState } from 'react';
import { Card } from "semantic-ui-react";

function PokemonCard({pok}) {

const [ onFront, setOnFront ] = useState(true)

const onFlip = () => {
  setOnFront(!onFront)
}

  return (
    <Card>
      <div onClick={onFlip}> 
        <div className="image">
          {  
          onFront ?
            <img src={pok.sprites.front} alt='front' /> :
            <img src={pok.sprites.back} alt='back' />
          }
         
        </div>
        <div className="content">
          <div className="header">{pok.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pok.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
