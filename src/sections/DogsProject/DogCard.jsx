import React, { useState, useEffect } from 'react';

function DogCard() {
  const [dogData, setDogData] = useState('');
  const [isLoading, setIsLoading] = useState('false')

    async function fetchData () {
    setIsLoading(true);
    setDogData('');
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imgPath = data.message
    setDogData(imgPath);
    setIsLoading(false);
    console.log(imgPath);
    }

  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <h1>Random dog Image</h1>
        <button className='btn btn-success' onClick={fetchData}>Fetch a new dog</button>
        <h2>{dogData.split('/')[4]}</h2>
        {isLoading ? <div className="spinner-border" role="status"></div> : null}
        <img src={dogData} alt="dog" />
    </div>
  );
}

export default DogCard;