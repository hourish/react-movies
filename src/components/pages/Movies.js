import React, {useState, useEffect} from 'react';
import {apiRequest} from "../../services/api";
import styled from '@emotion/styled';

function Movies(){
  const [movies, setMovies] = useState(null)

    function request(query){
    useEffect( () => {
    apiRequest(query).then( data => setMovies(data.Search));
    },[]);
  }  

  function renderMovies(){
    return (movies && movies.map((item) => (
      <div>
        <h2>{item.Title}</h2>
        <img src={item.Poster}/>
      </div>
      )))
  }

  const searchMovie = ({which , target}) => {
    if(which == 13){
      request(target.value);
    }
  }

  return (
    <div>
    <h1>Movies</h1>
    <input type="text" onKeyDown={searchMovie}/>
    {renderMovies()}
    </div>
  ) 
}

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Movies;