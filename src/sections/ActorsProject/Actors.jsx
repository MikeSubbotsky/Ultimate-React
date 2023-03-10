import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';

function Actors( { actors } ) {
  const [displayedActors, setDisplayedActors] = useState([]);
  
  useEffect(() => {
    setDisplayedActors(actors);
}, [actors]);

  return (
    <div className="row d-flex mx-4">
      {displayedActors && displayedActors.map((actor) => (
        <div className="col-sm-3 mb-2" key={actor.id}>
          <Card>
            <h5>{actor.name}</h5>
            <p>{actor.known_for_department}</p>
            <Link to={`/actors/${actor.id}`}><img className="col-sm-12 mb-2" src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} ></img></Link>
          </Card>
        </div>
    ))}
    </div>
  )
}

export default Actors;