import React from 'react';
import './WelcomePicture.css';

export default function WelcomePicture(){


  return(
    <div className="welcomePictureWrapper">
      <section className='welcomePictureBackground'></section>
      <div className="welcomePictureText">
        <h1>Hi, I'm Clayton</h1>
        <h3>and I'm a videographer</h3>
        <h4>Business/Promotion | Band/Artist | Wedding/First Look | Event</h4>
        <h5 to='/' style={{"border":"3px solid black"}} className='findOutMoreButton'>FIND OUT MORE</h5>
      </div>
    </div>
  )
}