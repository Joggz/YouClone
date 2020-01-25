import React from 'react';

import './test.scss'


 const Test = ({video, videorand}) => {
   let videosrc ;
   if(!video) {
    videosrc = `https://www.youtube.com/embed/${videorand.id}` ;
   } else{
     videosrc = `https://www.youtube.com/embed/${video.id.videoId}` 
   }
  
   console.log(videorand)
  
  return (
    
    <div className='frame'>
      <iframe className='iFrame' frameBorder='0' height='100%'  title='bigFrame' src={videosrc} />
    </div>
  )
}

export default Test;