import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirector =(director) =>{
    return (
      <React.Fragment>
      <h2>Name: {director.name}</h2>
      <p>Movies:</p>
      <ul>
        {director.movies.map(movie=><li>{movie}</li>)}
      </ul>
      </React.Fragment>
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director=><div>{renderDirector(director)}</div>)}
    </div>
  );
};

export default Directors
