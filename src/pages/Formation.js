import React from 'react';
import BlogSlider from './BlogSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';
 import 'swiper/css/effect-fade';
 import 'swiper/css/pagination';
import '../Styles/BlogSlider.css'; // Ensure you have copied and adjusted your CSS here

const blogSlides = [
  {
    id: 1,
    imageUrl: "/images/ofni.jpg", // Replace with your image URL
    title: 'I.U.T Paris descartes',
    date: '2017-2019',
    text: "I discovered the computer science world : I manipulated data bases, explored Linux and learned a lot of programming languages for different use ( Web, object-oriented, events , imperative...). I got the opportunity to participate twice to  Nuit de l'info events. Two sleepless nights where I worked with my team on different challenges" ,
    link: '#'
  },
  {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp', // Replace with your image URL
      title: 'Lorem Ipsum Dolor',
      date: '26 December 2019',
      text: 'Lorem ipsum dolor sit amet...',
      link: '#'
    },{
          id: 3,
          imageUrl: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp', // Replace with your image URL
          title: 'Lorem Ipsum Dolor',
          date: '26 December 2019',
          text: 'Lorem ipsum dolor sit amet...',
          link: '#'
        }
  // ... add more slides
];

function Formation() {
 return (
     <div>
       {/* Other content */}
       <BlogSlider slides={blogSlides} />
     </div>
   );
 };

export default Formation;