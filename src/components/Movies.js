import React from 'react';
import { movies } from '../data';

// This component should render the text Movies Page, and make a new <div> for each movie. The <div> should contain the movie's title, time and an <ul> for each genre.

const Movies = () => {
  const renderMovies = () => {
    return movies.map(movie => {
      return (
        <div>
          <h3>{movie.title}</h3>
          {movie.time}
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
