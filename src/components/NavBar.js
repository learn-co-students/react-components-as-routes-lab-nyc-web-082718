import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="navbar">
      <NavLink to ="/home"><span>Home</span></NavLink>
      <br />
      <NavLink to="/movies"><span>Movies</span></NavLink>
      <br />
      <NavLink to="/actors"><span>Actors</span></NavLink>
      <br />
      <NavLink to="/directors"><span>Directors</span></NavLink>
    </div>
  );
};

export default NavBar;
