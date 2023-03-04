import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import DogCard from './sections/DogsProject/DogCard';
import NavBar from './components/NavBar';
import Movie from './sections/MoviesProject/Movie';
import NotesWrapper from './sections/Notes Project/NotesWrapper';
import MenuFormHandler from './sections/FormHandlerProject/MenuFormHandler';
import AppWrapper24 from './sections/SimpleLoginProject/AppWrapper24';
import ActorsPage from './sections/ActorsProject/ActorsPage';
import RefCounterWrapper from './sections/RefCounterProject/RefCounterWrapper';
import LoginPage from './sections/GoogleSignUpProject/LoginPage';
import { UserLoggedIn } from './sections/GoogleSignUpProject/Context';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ProfileData } from './sections/GoogleSignUpProject/Context';
import ActorProfile from './sections/ActorsProject/ActorProfile';
import MoviePageWrapper from './sections/MoviesProject/MoviePageWrapper';


function App() {
  const [isLoggedIn, setIsLoggedIn]  = useState(false);
  const [profileData, setProfileData] = useState({})
  return (
    <div className='App'>
      <GoogleOAuthProvider clientId="116034257278-nfko7hcsr5rd8qaea8v97t9rr0jfg042.apps.googleusercontent.com">
        <UserLoggedIn.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <ProfileData.Provider value={{profileData, setProfileData}}>
          <NavBar />
          <Routes>
              <Route path="/" element={<DogCard />} />
              <Route path="/dogs" element={<DogCard />} />
              <Route path="/movies" element={<MoviePageWrapper />} /> 
              <Route path='/movies/:id' element={<Movie />} />
              <Route path="/form_handler" element={<MenuFormHandler />} />
              <Route path="/notes_project" element={<NotesWrapper />} />
              <Route path="/new_project_24/*" element={<AppWrapper24 />} />
              <Route path="/actors/:id" element={<ActorProfile />} />
              <Route path="/actors" element={<ActorsPage />} />
              <Route path="/ref-counter" element={<RefCounterWrapper />} />
              <Route path="/sign-in" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
          </Routes>
          </ProfileData.Provider>
        </UserLoggedIn.Provider>
      </GoogleOAuthProvider>
    </div>
  )
}

export default App;
