import React from 'react'
import {Link} from 'react-router-dom'
import './Main.css'
import { Carousel, Container, Navbar } from 'react-bootstrap'
// import Imgone from '../Assets/carousel-1.jpg'
// import Imgtwo from '../Assets/carousel-1.jpg'
import Mapsmethod from '../Component01/Mapsmethod'


const Home = () => {
  return (
<>
<Navbar expand='lg' style={nav}>
    <Container >
      <Navbar.Brand>
        <h1> <b>Winner</b> </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
<ul className='text-white' style={{display:'flex', listStyle:'none', textDecoration:'none',gap:'30px' , color: "white"}}>
  <li><Link to='/' className='link'>Home</Link></li>
  <li><Link to='/About' className='link'>About</Link></li>
  <li><Link to='/Products' className='link'>Products</Link></li>
  <li><Link to='/Card' className='link'>Card</Link></li>
  <li><Link to='/Fav' className='link'>Favorite</Link></li>
</ul>
      </Navbar.Collapse>

    </Container>
</Navbar>
{/* <Carousel>
  <Carousel.Item>
    <img src={Imgone} alt='this is not supported' width='100%'/>
    <Carousel.Caption>
      <h1>Image one</h1>
    </Carousel.Caption>
  </Carousel.Item> <Carousel.Item>
    <img src={Imgtwo} alt='this is not supported' width='100%'/>
    <Carousel.Caption>
      <h1>Image Two</h1>
    </Carousel.Caption>
  </Carousel.Item>

 <Carousel.Item>
    <img src={Imgtwo} alt='this is not supported' width='100%'/>
    <Carousel.Caption>
      <h1>Image Two</h1>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item>
    <img src={Imgtwo} alt='this is not supported' width='100%'/>
    <Carousel.Caption>
      <h1>Image Two</h1>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item>
    <img src={Imgtwo} alt='this is not supported' width='100%'/>
    <Carousel.Caption>
      <h1>Image Two</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
{/* <Mapsmethod/> */}
</>
  )
}
const nav ={
  backgroundColor:"yellow",
  color:'black'
}
export default Home; 