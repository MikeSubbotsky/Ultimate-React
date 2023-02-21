import React, { useState } from 'react'
import MovieCards from './MovieCards'
import FilterButtons from './FilterButtons'
import SearchInput from './SearchInput'

function MoviePageWrapper() {
    const [genre, setGenre] = useState('show-all');
    const [search, setSearch] = useState('');
  return (
    <div>
        <SearchInput setFunc={setSearch}/>
        <FilterButtons setFunc={setGenre} setFunc2={setSearch}/>
        <MovieCards genre={genre} search={search}/>
    </div>
  )
}

export default MoviePageWrapper