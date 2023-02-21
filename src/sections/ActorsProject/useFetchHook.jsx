import { useState, useEffect } from "react";

const useFetch = (setSearchResults) => {

    useEffect(() => {
      
    
    const getList = async (event) => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=${event.target.value}`);
          const data = await response.json();
          console.log(data);
          setSearchResults(data.results.splice(10));
        } catch (e) {
          console.error(e);
        }
      }

    });

      //return { searchResults, getList };
}

export default useFetch;