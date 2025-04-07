import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-2 w-72'>
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li>{channelTitle}</li>
        <li>{title}</li>
        <li>{statistics.viewCount}</li>
      </ul>

    </div>
  )
}

export default VideoCard ;