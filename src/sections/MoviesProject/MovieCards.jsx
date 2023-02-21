import React, { useState, useEffect} from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import './Movie.css';
import { data } from './data';


  function convertHrToMin(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hr ${remainingMinutes} min`;
  }

  


function MovieCards({ genre, search }) {
  const [filteredMovies, setFilteredMovies] = useState(data);
  const [filteredMoviesByGenre, setFilteredMoviesByGenre] = useState(data);
  const [filteredMoviesBySearch, setFilteredMoviesBySearch] = useState(data);

  function doubleFiltering(array1, array2) {
    const mutualElements = array1.filter(element => array2.includes(element));
    return mutualElements;
}

  function filterMoviesByName(searchInput) {
    return data.filter(movie => movie.name.toLowerCase().includes(searchInput.toLowerCase()));
  }

  useEffect(() => {
    const newFilter = genre === 'show-all' ? data : data.filter(movie => movie.genres.includes(genre));
    setFilteredMoviesByGenre(newFilter);
    const doubleFilter = genre === 'show-all' && search === '' ? data : doubleFiltering(newFilter, filteredMoviesBySearch);
    setFilteredMovies(doubleFilter);
  }, [genre]);

  useEffect(() => {
    const newFilter = filterMoviesByName(search);
    setFilteredMoviesBySearch(newFilter);
    const doubleFilter = genre === 'show-all' && search === '' ? data : doubleFiltering(newFilter, filteredMoviesByGenre);
    setFilteredMovies(doubleFilter);
  }, [search]);


    
  return (
    <>
      {filteredMovies.map((movie) => (
        <Card className="d-flex">
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
        </Card>
      ))}
    </>
  )
};

export default MovieCards;


