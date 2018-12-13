import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            <h2>{movie.title}</h2>
            <h5>{movie.time}m</h5>
            {movie.genres.map(genre => <ul>{genre}</ul>)}
          </div>
        ))}
    </div>
  );
};

export default Movies;
