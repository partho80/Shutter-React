import React from 'react';
import Slider from 'react-slick';

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div>
      <section id="hero">
      <Slider {...settings}>
        <div className="hero-box" >
          <div className="overlay"style={{ backgroundImage: `url('assets/img/hero-img.jpg')` }}></div>
          <div className="hero-content-wrapper">
            <p className="hero-cont-top">Women's Fashion</p>
            <h1>Women's Summer Collections</h1>
            <p className="hero-cont-bottom">Compellingly fashion cutting-edge portals before exceptional
              meta-services.
              Completely maintain stand-alone.</p>
            <div className="hero-btn">
              <a className="btn btn-custom btn-fill btn-arrow" href="shop.html">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="hero-box" >
          <div className="overlay"style={{ backgroundImage: `url('assets/img/hero-img2.jpg')` }}></div>
          <div className="hero-content-wrapper">
            <p className="hero-cont-top">Women's Fashion</p>
            <h1>Women's Summer Collections</h1>
            <p className="hero-cont-bottom">Compellingly fashion cutting-edge portals before exceptional
              meta-services.
              Completely maintain stand-alone.</p>
            <div className="hero-btn">
              <a className="btn btn-custom btn-fill btn-arrow" href="shop.html">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="hero-box" >
          <div className="overlay"style={{ backgroundImage: `url('assets/img/hero-img3.jpg')` }}></div>
          <div className="hero-content-wrapper">
            <p className="hero-cont-top">Women's Fashion</p>
            <h1>Women's Summer Collections</h1>
            <p className="hero-cont-bottom">Compellingly fashion cutting-edge portals before exceptional
              meta-services.
              Completely maintain stand-alone.</p>
            <div className="hero-btn">
              <a className="btn btn-custom btn-fill btn-arrow" href="shop.html">Shop Now</a>
            </div>
          </div>
        </div>
      </Slider>
       </section>
     </div>
   )
 }

 export default Hero




