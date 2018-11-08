import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActor =(actor) =>{
    return (
      <React.Fragment>
      <h2>Name: {actor.name}</h2>
      <p>Movies:</p>
      <ul>
        {actor.movies.map(movie=><li>{movie}</li>)}
      </ul>
      </React.Fragment>
    )
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor=><div>{renderActor(actor)}</div>)}
    </div>
  );
};

export default Actors;
