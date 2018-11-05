import React from 'react';
import { directors } from '../data';

// This component should render the text Directors Page, and make a new <div> for each director. The <div> should contain the director's name and an <ul> for each of their movies.

const Directors = () => {
  const renderDirectors = () => {
    return directors.map(director => {
      return (
        <div>
          <h3>{director.name}</h3>
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
