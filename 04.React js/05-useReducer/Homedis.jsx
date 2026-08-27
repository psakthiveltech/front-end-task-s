import { Link } from "react-router-dom"

function Homedis() {
  return (
    <div>
      <ul>
        <li> <Link to="/">HOME </Link> </li>
        <li> <Link to="/cart">Cart </Link> </li>
        <li> <Link to="/product">Products </Link> </li>
      </ul>
    </div>
  )
}

export default Homedis