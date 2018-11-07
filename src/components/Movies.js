import React from 'react';
import { movies } from '../data';
let renderMovie = movies.map(m=> (
    <div>
    <h4>Name: {m.title}</h4>
    <br />
    <p>Time: {m.time}</p>
    <br />
    <p> Genres: </p>
    <br />
      <ul>
        {m.genres.map(g=> <li>{g}</li>)}
      </ul>
    </div>
))
console.log(renderMovie)
const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovie}
    </div>
  );
};

export default Movies;
