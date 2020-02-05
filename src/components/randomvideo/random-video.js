import React from 'react'

import './random.scss';


const Video = (props) => {
  
  const {randomvideo, getVideo, save} = props
  return (
    <div className='random'>
       <div className='grid'>
        {randomvideo.map(video =>
        <div className='video-item' onClick={ () => getVideo(video)}> 
          <img src={video.snippet.thumbnails.medium.url} alt='ithumbnail' onClick={() => save(video)}/>
          <p className='title'>{video.snippet.title} </p>
        </div>
      )}
      </div>
    </div>
  )
}


export default Video