import React, { useState } from 'react';
import MenuBar from './MenuBar.jsx';
import FormHandler from './FormHandler.jsx';
import 'react-toastify/dist/ReactToastify.css';



function MenuFormHandler() {
    const [name, setName] = useState('User Name');
    return (
      <div className='container d-flex flex-column'>
        <MenuBar name={name}/>
        <FormHandler setName={setName}/>
      </div>
    );
  }
  
  export default MenuFormHandler;