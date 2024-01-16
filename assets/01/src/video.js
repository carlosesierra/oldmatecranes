import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const FullscreenVideo = () => {
    const [playing] = useState(true);
  
    return (
    <>
        <section className='container-fluid bg-charcoal container-fluid p-0'>
            <ReactPlayer url='videom.mp4' playing={playing} width='100%' height='100%' controls={true} loop muted autoPlay className='d-lg-none w-100'/>
            <ReactPlayer url='video.mp4' playing={playing} width='100%' height='100%' controls={true} loop muted autoPlay className='d-none d-lg-block w-100'/>
        </section>
    </>
    );
  };
  
  export default FullscreenVideo;