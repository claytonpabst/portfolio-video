import React, { Component } from 'react';
import MainHeader from './../Headers/MainHeader.js';
import WelcomePicture from './WelcomePicture.js';

import './Home.css';


class Home extends Component {

  render() {

    let videoStyle = {
      "width":"100%",
      "height":"56vw",
      "top": "0px",
    }
    return (
      <div className="home">

          <MainHeader/>
          <div className='GpageNameHeader'>
            <h1>VIDEOGRAPHY</h1>
          </div>
          <WelcomePicture/>
          {/*<iframe hspace="0" vspace="0" marginheight="0" marginwidth="0" id="player" frameBorder="0" allowfullscreen="1" gesture="media" title="YouTube video player" src="https://www.youtube.com/embed/B1rmCjzkFJ8?autohide=1&amp;autoplay=1&amp;controls=0&amp;mute=1&amp;enablejsapi=1&amp;iv_load_policy=3&amp;loop=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;wmode=opaque&amp;origin=https%3A%2F%2Fjustinography.com&amp;widgetid=1" class="backgroundVideo" style={videoStyle}></iframe>*/}
          {/*<iframe src="https://drive.google.com/file/d/1f3sFeixBMjcJagsCv2E39K6VqeulhyhX/preview" style={videoStyle}></iframe>*/}
      </div>
    );
  }
}


export default Home;