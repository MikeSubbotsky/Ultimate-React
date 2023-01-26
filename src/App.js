import React, { useState } from 'react';
import { Route, Routes, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import MovieCards from './components/MovieCards';
import FilterButtons from './components/FilterButtons';
import SearchInput from './components/SearchInput';
import DogCard from './components/DogCard';
import NavBar from './components/NavBar';
import Movie from './components/Movie';
import NotesWrapper from './components/NotesWrapper';
import FormHandler from './components/FormHandler';
import MenuFormHandler from './components/MenuFormHandler';
import AppWrapper24 from './components/AppWrapper24';
import ActorsPage from './components/ActorsPage';






function App() {
  const [genre, setGenre] = useState('show-all');
  const [search, setSearch] = useState('');
  return (
    <div className='App'>
      <NavBar />
      <Routes>
          <Route path="/" element={<DogCard />} />
          <Route path="/dogs" element={<DogCard />} />
          <Route path="/movies" element={
            <div>
              <SearchInput setFunc={setSearch}/>
              <FilterButtons setFunc={setGenre} setFunc2={setSearch}/>
              <MovieCards genre={genre} search={search}/>
            </div> } /> 
          <Route path='/movies/:id' element={<Movie />} />
          <Route path="/form_handler" element={<MenuFormHandler />} />
          <Route path="/notes_project" element={<NotesWrapper />} />
          <Route path="/new_project_24/*" element={<AppWrapper24 />} />
          <Route path="/actors" element={<ActorsPage />} />
      </Routes>
    </div>
  )
}

export default App;
