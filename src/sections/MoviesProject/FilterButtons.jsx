import React from 'react';

function FilterButtons({ setFunc, setFunc2 }) {
   
const handleButtons = (event) => {
    const genre = event.target.value;
    Array.from(document.getElementsByTagName('button')).map(btn => btn.disabled = false);
    genre !== 'show-all' ? event.target.disabled = true : event.target.disabled = false;
    setFunc(genre);
  }

  return (
    <div className="d-flex">
      <button className='btn btn-primary m-2' value='Drama' onClick={(event) => {
        handleButtons(event);
      }}>Drama Only</button>
      <button className='btn btn-primary m-2' value='Comedy' onClick={(event) => {
        handleButtons(event);
      }}>Comedy Only</button>
      <button className='btn btn-secondary m-2' value='show-all' onClick={(event) => {
        handleButtons(event);
        setFunc2('');
        document.getElementById('input').value = '';
      }}>Clear Filters</button>
    </div>
  ); 
}

export default FilterButtons;
