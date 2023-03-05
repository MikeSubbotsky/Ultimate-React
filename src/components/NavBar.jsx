import React, { useContext } from 'react';
import { Link } from "react-router-dom"

function NavBar () {

    return (
      <>
      <nav className="navbar navbar-light bg-dark">
      
        <ul className='d-flex list-unstyled'>
            <li><Link to="/dogs" className='btn btn-warning m-2'>Dogs</Link></li>
            <li><Link to="/movies" className='btn btn-warning m-2'>Movies</Link></li>
            <li><Link to="/form_handler" className='btn btn-warning m-2'>Form Handler</Link></li>
            <li><Link to="/notes_project" className='btn btn-warning m-2'>Notes Project</Link></li>
            <li>
              <Link to="/new_project_24" className='btn btn-warning m-2'>24.01 Project</Link>
              <br />
              <Link to="/new_project_24/home" className='btn btn-warning m-1 btn-sm'>Home</Link>
              <Link to="/new_project_24/task" className='btn btn-warning m-1 btn-sm'>Task</Link>
            </li>
            <li><Link to="/actors" className='btn btn-warning m-2'>Actors</Link></li>
            <li><Link to="/ref-counter" className='btn btn-warning m-2'>Ref-counter</Link></li>
        </ul>
      </nav>
      </>
    );
  }


export default NavBar;