import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function ActorProfile() {
    const [actorProfile, setActorProfile] = useState({})
    const { id } = useParams();


    useEffect( async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=53d2ee2137cf3228aefae083c8158855`);
            const data = await response.json();
            console.log(data);
            setActorProfile(data)
          } catch (e) {
            console.error(e);
          }
        }, []);

  return (
    <Card>
      <CardBody style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <CardTitle>{actorProfile.name}</CardTitle>
          <CardSubtitle>{actorProfile.known_for_department}</CardSubtitle>
      <CardText>{actorProfile.biography}</CardText>
      <CardText>
        <small className="text-muted">Birthday: {actorProfile.birthday}</small>
      </CardText>
      <CardText>
        <small className="text-muted">Place of birth: {actorProfile.place_of_birth}</small>
      </CardText>
      <CardText>
        <small className="text-muted">IMDb ID: {actorProfile.imdb_id}</small>
      </CardText>
    </div>
    <img src={`https://image.tmdb.org/t/p/original${actorProfile.profile_path}`} style={{ flex: '0 0 300px', height: '100%' }} ></img>
  </CardBody>
</Card>
  )
}

export default ActorProfile