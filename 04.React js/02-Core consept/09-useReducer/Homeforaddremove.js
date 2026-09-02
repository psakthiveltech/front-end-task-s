import React, { Link } from 'react-router-dom'

function Homeforaddremove() {
  return (
    <div>
      <ul>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/product'>Product</Link> </li>
        <li> <Link to='/cartbag'>Cart</Link> </li>
      </ul>
    </div>
  )
}

export default Homeforaddremove