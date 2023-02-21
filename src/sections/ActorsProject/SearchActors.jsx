import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function SearchActors( { setActors }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isShowResults, setIsShowResults] = useState(true)

  const handleChange = async (event) => {
    setIsShowResults(true);
    setSearchValue(event.target.value);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=${event.target.value}`);
      const data = await response.json();
      console.log(data);
      setSearchResults(data.results.splice(10));
    } catch (e) {
      console.error(e);
    }
  };

  async function handleSearchClick(actor) {
    setSearchValue(actor);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=${actor}`);
      const data = await response.json();
      console.log(data);
      setSearchResults(data.results.splice(10));
      setActors(data.results);
    } catch (e) {
      console.error(e);
    }
    setIsShowResults(false);

  }

  return (
    <>
      <h1>Actors Search</h1>
      <form className='mb-4' onSubmit={handleChange}>
        <input type="text" className='form-control-lg' placeholder='Search for an actor...' value={searchValue} onChange={handleChange} />
        <ListGroup>
          {searchResults && isShowResults && searchResults.map((actor) => (
            <ListGroupItem key={actor.id} className='btn btn-light' onClick={() => handleSearchClick(actor.name)}>{actor.name}</ListGroupItem>
          ))}
        </ListGroup>
      </form>
    </>
  );
};

export default SearchActors;