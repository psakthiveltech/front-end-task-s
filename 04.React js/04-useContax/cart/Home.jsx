import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div>
      <Navbar expand='lg' bg='warning'>
        <Container>
          <Navbar.Brand>
            <h1>The <b>ONE</b></h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  >
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/product'>Product</Nav.Link>
              <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='d-flex justify-content-center align-item-center h-5'>
        <h1 >Go to add to card</h1>
      </div>
    </div>
  )
}

export default Home