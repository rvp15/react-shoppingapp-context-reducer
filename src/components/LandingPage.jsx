import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../assets/16.jpg'
import pic2 from '../assets/12.jpg'
import pic3 from '../assets/14.jpg'
export default function LandingPage() {
  return (
    <div>
      <Carousel className='landing-page'>
      <Carousel.Item interval={1000}>
        <img 
         className="d-block w-100 "
         src={pic1}
         alt="First slide"/>
              <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={pic3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}
