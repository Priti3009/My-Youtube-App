import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[])

  
    const getVideos=async()=>{
      try{
      const data=await fetch(YOUTUBE_VIDEOS_API);
      const json=await data.json();
      if (!json.items) {
        console.error("YouTube API returned no items:", json);
        setVideos([]); // set to empty array so .map() doesn't crash
        return;
      }
      setVideos(json.items) 
    }
  catch (err) {
    console.error("Error fetching videos:", err);
    setVideos([]);
  }

  };
 

  return (
   
    <div className='flex flex-wrap'>
      {videos.map((video)=> (
        <Link to ={"/watch?v="+ video.id}><VideoCard key={video.id} info={video}/>
     </Link> ))
    }
    </div>
  
  )
}

export default VideoContainer