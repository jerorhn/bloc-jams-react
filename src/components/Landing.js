import React from 'react';
import './Landing.css'

const Landing = () => (
  <section className='landing'>
    <h1 className='hero-title'>Turn the music up!</h1>

    <section className='selling-points'>
      <div className='point'>
        <h2 className='point-title'>Choose your music</h2>
        <div className='landing-icon ion-music-note'></div>
        <p className='point-description'>The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className='point'>
        <h2 className='point-title'>Unlimited, streaming, ad-free</h2>
        <div className='landing-icon ion-radio-waves'></div>
        <p className='point-description'>No arbitrary limits.  No distractions.</p>
      </div>
      <div className='point'>
        <h2 className='point-title'>Mobile enabled</h2>
        <div className='landing-icon ion-iphone'></div>
        <p className='point-description'>Listen to your music on the go.  This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
