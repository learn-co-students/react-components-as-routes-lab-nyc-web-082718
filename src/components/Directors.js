import React from 'react';
import { directors } from '../data';
const renderDirector = directors.map(d=> (
  <div>
  <br />
  <h4>Name:{d.name}</h4>
  <br />
  <p>Movies: </p>
  <br />
  <ul>
   {d.movies.map(m=> <li>{m}</li>)}
  </ul>
  </div>

))
const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
      {renderDirector}
    </div>
  );
}

export default Directors
