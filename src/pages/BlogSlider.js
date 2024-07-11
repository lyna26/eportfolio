import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

Swiper.use([Autoplay, Pagination, EffectFade]); // Register Swiper modules

const BlogSlider = ({ slides }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (!swiperInstance && slides.length > 0) {
      const newSwiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 5000, // Adjust autoplay delay as needed
          disableOnInteraction: true, // Allow user interaction to pause autoplay
        },
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        },
        // autoHeight: true,  // Uncomment if you need auto height adjustment
      });
      setSwiperInstance(newSwiper);
    }
  }, [slides, swiperInstance]);

  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        {slides.map((slide) => (
          <div key={slide.id} className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={slide.imageUrl} alt={slide.title} />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">{slide.date}</span>
              <div className="blog-slider__title">{slide.title}</div>
              <div className="blog-slider__text">{slide.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default BlogSlider;