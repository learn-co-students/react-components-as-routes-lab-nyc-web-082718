import React from 'react';
import { actors } from '../data';
const renderActor = actors.map(a=> (
  <div>
  <br />
  <h4>Name:{a.name}</h4>
  <br />
  <p>Movies: </p>
  <br />
  <ul>
   {a.movies.map(m=> <li>{m}</li>)}
  </ul>
  </div>

))
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActor}
    </div>
  );
};

export default Actors;
