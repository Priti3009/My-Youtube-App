import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className='m-4 shadow-2xl p-2 w-44'>
        <ul>
            <Link to="/"><li>Home</li> </Link> 
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
        <h1 className="font-bold mt-5 ">You</h1>
        <ul>
            <li>History</li>
            <li>Playlist</li>
            <li>Your videos</li>
            <li>Liked videos</li>
            <li>Downloads</li>
        </ul>
        <h1 className="font-bold mt-5">Subscription</h1>
        <ul>
            <li>Sports</li>
            <li>Music</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar