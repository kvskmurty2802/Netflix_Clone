import React from 'react';
import backgroundimage from '../assets/login.jpg';
// import styled from 'styled-components';

export default function Background() {
  const backgroundstyle = {
    width: '100vw',
    height: '100vh',
    // position: 'fixed',
    backgroundPosition: 'center'
  }
  return (
    <div className='backgroundstyle'>
      <img src={backgroundimage} alt="background" style={backgroundstyle}></img>
    </div>
  )
}




