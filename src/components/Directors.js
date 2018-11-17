import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorArray = directors.map(director=>(
    <div key={director.name}>
      <h3>{director.name}</h3>
      {director.movies.map(movie =>(
        <ul key={movie}>{movie}</ul>
      ))}
    </div>
  ))

  return (
    <div>
      <h1>Directors Page</h1>
      {directorArray}
    </div>
  );
}

export default Directors
