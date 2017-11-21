import React, { Component } from 'react';
import MainHeader from './../Headers/MainHeader.js';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">

          <MainHeader/>
          <div className='GpageNameHeader'>
            <h1>VIDEOGRAPHY</h1>
          </div> 

      </div>
    );
  }
}


export default Home;