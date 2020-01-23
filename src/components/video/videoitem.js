import React from 'react'

 const VideoItem =({video , onVideoSelect}) => {
   const { snippet } = video;
  console.log(snippet)
  // console.log(props.video.snippet.thumbnails)
  return (
    <div className='video-item' onClick={() => onVideoSelect(video)}>
      <img  alt='thumbnails' src={snippet.thumbnails.medium.url}/>
      <p className=''>{snippet.title} </p>
    </div>
  )
}

export default VideoItem