import React, { useState } from 'react';
import SearchActors from './SearchActors';
import Actors from './Actors';

function ActorsPage() {
    const [actors, setActors] = useState([]);
  return (
    <div>
        <SearchActors setActors={setActors} />
        <Actors actors={actors}/>
    </div>
  )
}

export default ActorsPage