import React from "react";


import Test from './test';
import Search from '../search'
import VideoList from './videoList';
import Video from '../randomvideo/random-video'

import "./u-clone.scss";

class Uclone extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      randomvideo: [],
      selectvideo: '',
      selectedVideo : '',
      watchedVideo: []

    }; 
    
  }

  handleSubmit = async (searchterm) => {
    console.log(searchterm);
    const videoFetch = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchterm}&key=AIzaSyBrqrHbO9fNf1CqEh8tzT9qpK_4QfLcKwg`);
    console.log(videoFetch);
    const res = await videoFetch.json();
    console.log(res.items)

    this.setState({videos: res.items, selectedVideo: res.items[0]}, () => console.log(this.state.selectedVideo))
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
  
  async componentDidMount(){
    const RandomVideo = await fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBrqrHbO9fNf1CqEh8tzT9qpK_4QfLcKwg');
    const res = await RandomVideo.json();
  //  res.then( data  => console.log(data)).catch(error => console.log(error))
   console.log(res.items)

   this.setState({
     randomvideo: res.items,
     selectvideo: res.items[0]
   }, () => console.log(this.state.selectvideo))
}
// handlesave = (video) => {
//   const watchedvideo = [];
//   watchedvideo.push(video)
//   console.log(watchedvideo);

// }
handleVideoSelect = (video) => {
    this.setState({selectvideo: video}) 
    // this.handlesave(video)
     }

  render() {
    const {videos, selectedVideo, randomvideo, selectvideo} = this.state;

console.log(selectvideo)
    return (
    <div>
      <Search onFormSubmit={this.handleSubmit}/>
      <p>Uclone</p>
      <Test video={selectedVideo} videorand={selectvideo}/>
      <VideoList videos={videos} videoSelect={this.onVideoSelect} />
      {/* work ongetting the video in an array on click */}
      <Video  randomvideo={randomvideo} save={this.handlesave} getVideo={this.handleVideoSelect}/>
    </div>
  )}
}

export default Uclone;
