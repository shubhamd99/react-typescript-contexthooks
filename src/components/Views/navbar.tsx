import React from 'react'
import { Store } from '../../store/Store';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const { state } = React.useContext(Store)

  return (
    <div className="navbar fixed-top navbar-light bg-light">
        <Link to="/" className="navbar-brand" >Home</Link>

        
        <Link to="/favourites" className="btn btn-outline-secondary ">
            Your Favourites: {state.favourites.length}
        </Link>
    </div>
  )
}
