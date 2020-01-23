import React from "react";
import { Player } from 'video-react';

import Test from './test';
import Search from '../search'
import VideoList from './videoList';

import "./u-clone.scss";

class Uclone extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo : ''

    }; 
    
  }

  handleSubmit = async (searchterm) => {
    console.log(searchterm);
    const videoFetch = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchterm}&key=AIzaSyBrqrHbO9fNf1CqEh8tzT9qpK_4QfLcKwg`);
    console.log(videoFetch);
    const res = await videoFetch.json();
    console.log(res.items)

    this.setState({video: res.items, selectedVideo: res.items[0]}, () => console.log(this.state.selectedVideo))
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
  


  componentDidMount(){
      console.log('Mouted')
      
     
    }

  render() {
    const {video, selectedVideo} = this.state;
    // console.log(selectedVideo)
    return (
    <div>
      <Search onFormSubmit={this.handleSubmit}/>
      <p>Uclone</p>
      <Test video={selectedVideo}/>
      <VideoList videos={video} videoSelect={this.onVideoSelect} />
      {/* {
        this.state.videos.map(video => 
          <iframe title='v' src={`https://www.youtube.com/embed/${video.id}`} />
            
            // </video >
          
          // <Player  
          //   playsinline
          //   poster=''
          //   src= {
          //     `https://www.youtube.com/embed/${video.id}`
          //   }
          // /> 
          )
      } */}
    </div>
  )}
}

export default Uclone;
