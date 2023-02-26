import './App.css';
import React from 'react';
import Video from '../components/video';
import Menu from '../components/menu';
import nature from "../videos/nature.mp4";
import sky from "../videos/sky.mp4";
import city from "../videos/city.mp4";

let videos = {
  Nature: nature,
  Sky: sky,
  City: city
};
//console.log(nature)

class App extends React.Component{
  constructor(props){
    super(props)
    this.chooseVideo = this.chooseVideo.bind(this);
    this.state = {src: videos.Nature};
  }

  chooseVideo(newVideo){
    this.setState({src: videos[newVideo]});
  }
  render() {

    return(
      <div className='App'>
        <h1>Choose a video!</h1>
        <Menu chooseVideo={this.chooseVideo} className="menu"/>
        <Video src={this.state.src}/>
      </div>
    )
  }
}

export default App;
