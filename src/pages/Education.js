import React from 'react';
import BlogSlider from './BlogSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';
 import 'swiper/css/effect-fade';
 import 'swiper/css/pagination';
import '../Styles/BlogSlider.css';

const blogSlides = [
  {
    id: 1,
    imageUrl: "/images/icons/iutLogo.jpg",
    title: 'I.U.T Paris descartes',
    date: '2017-2019',
    text: "I discovered the computer science world : I manipulated data bases, explored Linux and learned a lot of programming languages for different use ( Web, object-oriented, events , imperative...). I got the opportunity to participate twice to  Nuit de l'info events. Two sleepless nights where I worked with my team on different challenges" ,
    link: '#'
  },
  {
      id: 2,
      imageUrl: '/images/icons/EPITA3.jpg', // Replace with your image URL
      title: 'EPITA',
      date: '2019-2022',
      text: "I have consolidated my computer science knowledge and I was introduced to cybersecurity. I got the chance to live what we call 'La piscine' : an intense periode of 3 weeks where I coded without counting my hours. I had the opportunity to be a buddy for three weeks. I joined an international class composed of people from different nationalities: Korean (predominantly), and American. assisted and guided them to live well their arrival in Paris.",
      link: '#'
    }
];

function Education() {
 return (
     <div>
       <BlogSlider slides={blogSlides} />
     </div>
   );
 };

export default Education;