import React from 'react';
import { actors } from '../data';

const Actors = () => {

const actorArray = actors.map(actor => (
  <div key={actor.name}>
    <h3>{actor.name}</h3>
    {actor.movies.map(movie => (
      <ul key={movie.name}>
        <p>{movie}</p>
      </ul>
    ))}
  </div>
))

  return (
    <div>
      <h1>Actors Page</h1>
      {actorArray}
    </div>
  );
};

export default Actors;
