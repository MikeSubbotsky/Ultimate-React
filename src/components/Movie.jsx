import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { data } from './data';

function Movie({ movie }) {

    function convertHrToMin(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours} hr ${remainingMinutes} min`;
      }
      const { id } = useParams();
    if (!movie) {
    
    movie = data.filter(movie => movie.id == id)[0];
    }

  return (
    <div>
        {movie ? <Card className="d-flex">
            <CardBody className="w-50 d-flex">
                <CardImg className="w-50 movieImg mr-1" src={movie.poster} alt={movie.name} />
                <div className="m-2">
                    <CardTitle><h1>{movie.name}</h1></CardTitle>
                    <strong>Runtime:</strong> {convertHrToMin(movie.runtime)}
                    <br />
                    <strong>Year:</strong> {movie.year}
                    <br />
                    <strong>Plot:</strong> {movie.plot}
                    <br />
                    <a href={movie.imdb}>More Info...</a>
                    <div className="d-flex">
                        {movie.genres && movie.genres.map((genre, index) => (
                          <Button key={index} className="m-1 rounded-pill border border-dark" color="white" >{genre}</Button>
                      ))} 
                    </div>
                </div>
            </CardBody>
        </Card> : <div>Page not Found</div> }
    </div>                  
  )
}

export default Movie