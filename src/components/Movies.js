import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovie =(movie) =>{
    return (
      <React.Fragment>
      <h2>Name: {movie.title}</h2>
      <p>Time:{movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre=><li>{genre}</li>)}
      </ul>
      </React.Fragment>
    )
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie=><div>{renderMovie(movie)}</div>)}
    </div>
  );
};

export default Movies;
