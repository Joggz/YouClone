import React from 'react'

import VideoItem from './videoitem';

import './videoList.scss';

const VideoList = ({videos, videoSelect}) => {
  if(!videos) return <div>search video</div>
  console.log(videos)
  return (
    
    <div className='video-list grid'>
      {videos.map(vid => <VideoItem onVideoSelect={videoSelect} video={vid} />)}
     </div>
  )
}


export default VideoList;