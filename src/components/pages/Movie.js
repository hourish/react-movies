import React from 'react';

function Movie({match}){
  return <h1>Movie {match.params.id}</h1>
}

export default Movie;