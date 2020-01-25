import React from 'react'

import './random.scss';


const Video = (props) => {
  
  const {randomvideo, getVideo} = props
  return (
    <div>
       <div>
        {randomvideo.map(video =>
        <div className='video-item' onClick={ () => getVideo(video)}> 
          <img src={video.snippet.thumbnails.default.url} alt='ithumbnail' />
          <p className='title'>{video.snippet.title} </p>
        </div>
      )}
      </div>
    </div>
  )
}


export default Video