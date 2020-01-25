import React from 'react'

import './videoitem.scss';

 const VideoItem =({video , onVideoSelect}) => {
   const { snippet } = video;
  console.log(snippet)
  
  return (
    <div className='video-item' onClick={() => onVideoSelect(video)}>
      <img  alt='thumbnails' src={snippet.thumbnails.default.url}/>
      <p className='title'>{snippet.title} </p>
    </div>
  )
}

export default VideoItem