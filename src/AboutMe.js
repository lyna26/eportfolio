import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';


function AboutMe() {
 const carouselStyle = {
     maxWidth: '300px', // Largeur maximale du Carousel
      margin: 'auto', // Centrer le Carousel
      overflow: 'hidden', // Empêche le débordement de contenu
  };

  return (
  <Carousel style={carouselStyle}>
    <Carousel.Item>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img  className="d-block w-100"
                        src="images/scientist.png"
                        alt="Java Developer">
                    </img>
                </div>
                <div class="col-md-6">
                    <p>Scientist Spirit</p>
                </div>
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
      <div class="container">
         <div class="row">
           <div class="col-md-6">
             <img  className="d-block w-100"
                                       src="images/drawing.png"
                                       alt="Java Developer">
             </img>
           </div>
           <div class="col-md-6">
             <p>Artist heart</p>
           </div>
         </div>
       </div>
    </Carousel.Item>
    <Carousel.Item>
     <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img  className="d-block w-100"
                                      src="images/scientist.png"
                                      alt="Java Developer">
            </img>
          </div>
          <div class="col-md-6">
            <p>Baby soul</p>
          </div>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
 );
}
export default AboutMe;