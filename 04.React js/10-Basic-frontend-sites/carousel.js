import React from 'react'
import { Carousel } from 'react-bootstrap'
import Imageone from '../Assets/carousel-1.jpg'

function Carousels() {
  return (
    <>
   <Carousel>
     <Carousel.Item>
       <img src={Imageone} alt='this is not supported' width='100%'/>
       <Carousel.Caption>
         <h1>Image one</h1>
       </Carousel.Caption>
     </Carousel.Item> <Carousel.Item>
       <img src={Imageone} alt='this is not supported' width='100%'/>
       <Carousel.Caption>
         <h1>Image Two</h1>
       </Carousel.Caption>
     </Carousel.Item>
   
    <Carousel.Item>
       <img src={Imageone} alt='this is not supported' width='100%'/>
       <Carousel.Caption>
         <h1>Image Two</h1>
       </Carousel.Caption>
     </Carousel.Item>
      <Carousel.Item>
       <img src={Imageone} alt='this is not supported' width='100%'/>
       <Carousel.Caption>
         <h1>Image Two</h1>
       </Carousel.Caption>
     </Carousel.Item>
      <Carousel.Item>
       <img src={Imageone} alt='this is not supported' width='100%'/>
       <Carousel.Caption>
         <h1>Image Two</h1>
       </Carousel.Caption>
     </Carousel.Item>
   
   </Carousel>
    
    </>
  )
}

export default Carousels