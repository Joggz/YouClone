import React from 'react'

import VideoItem from './videoitem';


const VideoList = (props) => {
  if(!props.videos) return <div>search video</div>
  console.log(props.videos)
  return (
    
    <div>
      {props.videos.map(vid => <VideoItem onVideoSelect={props.videoSelect} video={vid} />)}
    {/* //   { videos.map( (vid) =>console.log(vid) )} */}
     </div>
  )
}


export default VideoList;