import React from 'react';
import { movies } from '../data';

const Movies = () => {

const movieArray = movies.map((movie, ind)=>(
  <div key={ind}>
    <h3>Title: {movie.title}</h3>
    <p>Time: {movie.time}</p>
    <p>Genres:</p>
    {movie.genres.map((genre, ind) =>(
    <ul key={ind}>{genre}</ul>
    ))}

  </div>
))


  return (
    <div>
        <h1>Movies Page</h1>
        {movieArray}
    </div>
  );
};

export default Movies;
