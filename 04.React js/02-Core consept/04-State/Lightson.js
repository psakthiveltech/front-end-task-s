import React, { useState } from 'react'
import img1 from './OIP1.png'
import img2 from './image1.png'
function Lightson() {
let [light,setonoff] = useState(false);
function Handleonoffbtn(){
  light ? setonoff(false) : setonoff(true)
  
}
  return (
    <div style={{backgroundColor: light ? '#ffde57' : 'black',height:"1000px"}} className='d-flex justify-content-center align-items-center'>
      {
        light? <img src={img1} alt='no img'/> : <img src={img2} alt='no img'/> 
      }
      <button onClick={Handleonoffbtn}>{light? "ON" : 'OFF'}</button>
    </div>
  )
}

export default Lightson