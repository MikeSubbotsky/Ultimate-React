import React, { useState } from 'react';

function SearchInput({ setFunc }) {
    const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const newInput = event.target.value
    setInputValue(newInput);
    setFunc(newInput);
  }
  return (
    <>
        <input type="text" className='form-control-lg m-2' placeholder='Search for a movie...' onChange={handleChange} id='input'/>
    </>
  )
}

export default SearchInput