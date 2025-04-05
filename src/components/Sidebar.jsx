import React from 'react'

const Sidebar = () => {
  return (
    <div className='m-4 shadow-2xl p-2 w-44'>
        <ul>
            <li>Home</li>
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