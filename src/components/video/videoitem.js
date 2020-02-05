import React from 'react'

import './videoitem.scss';

 const VideoItem =({video , onVideoSelect}) => {
   const { snippet } = video;
  console.log(snippet)
  
  return (
    <div className='grid'>
    <div className='video-item' onClick={() => onVideoSelect(video)}>
      <img  alt='thumbnails' src={snippet.thumbnails.medium.url}/>
      <p className='title'>{snippet.title} </p>
    </div>
    </div>
  )
}

export default VideoItem