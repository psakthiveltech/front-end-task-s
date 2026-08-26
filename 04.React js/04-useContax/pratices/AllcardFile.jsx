import React, { useContext } from 'react'
import { Button, Card, CardBody } from 'react-bootstrap'
import { Themechanger } from './Mainfile'

function AllcardFile() {
  let {theme,settheme} = useContext(Themechanger)
  return (
    <div className={theme}>
       <h4>this is testing</h4>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
       <Card style={{ width: '18rem' }} className={theme}>
        <Card.Body className={theme}>
          <Card.Title>
            Images
          </Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus possimus veniam libero dignissimos quod at aperiam laborum voluptatibus aliquam porro est optio esse excepturi repudiandae accusamus, tenetur ea facere?
          </Card.Text>
          <Button>Click Here</Button>
        </Card.Body>
       </Card>
       </div>
          <div className='col-lg-4'>
       <Card style={{ width: '18rem' }} className={theme}>
        <Card.Body className={theme}>
          <Card.Title>
            Images
          </Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus possimus veniam libero dignissimos quod at aperiam laborum voluptatibus aliquam porro est optio esse excepturi repudiandae accusamus, tenetur ea facere?
          </Card.Text>
          <Button onClick={()=>settheme(theme==='dark'? 'light':'dark')}> Click Here</Button>
        </Card.Body>
       </Card>
       </div>
<div className='col-lg-4'>
       <Card style={{ width: '18rem' }} className={theme}>
        <Card.Body className={theme}>
          <Card.Title>
            Images
          </Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus possimus veniam libero dignissimos quod at aperiam laborum voluptatibus aliquam porro est optio esse excepturi repudiandae accusamus, tenetur ea facere?
          </Card.Text>
          <Button>Click Here</Button>
        </Card.Body>
       </Card>
       </div>
       </div>
       </div>
       </div>
  )
}

export default AllcardFile