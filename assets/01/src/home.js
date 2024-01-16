import React, { useState,useEffect } from 'react';

const tt4 = [
  <><img src='2024-01m.svg' alt='2024' className='d-lg-none w-100' /><img src='2024-01.svg' alt='2024' className='d-none d-lg-block w-100' /></>,
  <><img src='2024-02m.svg' alt='2024' className='d-lg-none w-100' /><img src='2024-02.svg' alt='2024' className='d-none d-lg-block w-100' /></>,
  <><img src='2024-03m.svg' alt='2024' className='d-lg-none w-100' /><img src='2024-03.svg' alt='2024' className='d-none d-lg-block w-100' /></>,
  <><img src='2024-04m.svg' alt='2024' className='d-lg-none w-100' /><img src='2024-04.svg' alt='2024' className='d-none d-lg-block w-100' /></>,
  <><img src='2024-05m.svg' alt='2024' className='d-lg-none w-100' /><img src='2024-05.svg' alt='2024' className='d-none d-lg-block w-100' /></>,
  <><img src='2024-06m.svg' alt='2024' className='d-lg-none w-100' /><img src='2024-06.svg' alt='2024' className='d-none d-lg-block w-100' /></>
]

const arrow = <img src='arrow.svg' alt='arrow' />

const Home = () =>  {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextImageIndex = (currentImageIndex + 1) % tt4.length;
      setCurrentImageIndex(nextImageIndex);
    }, 750);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>    
        <section className='container-fluid px-0 bg-charcoal justify-content-center align-items-center home'>
        <div className='row px-0 gx-0'>
        {tt4[currentImageIndex]}</div>
        <div className='row px-0 gx-0 align-items-end py-3 py-lg-0 arrow'>
          {arrow}
        </div>
        </section>
    </>
  );
}

export default Home;