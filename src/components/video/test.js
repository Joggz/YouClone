import React from 'react'
import { Player } from 'video-react';


 const Test = ({video}) => {
   if(!video) return <div>Enter searchTerm</div>
   console.log(video)
   const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`
  console.log(video.id.videoId)
  console.log(videosrc)
  return (
    <div>
      <iframe frameBorder='0' height='100%' width='95%' title='bigFrame' src={videosrc} />
    </div>
  )
}

export default Test;