import React from "react";
import { Link, Outlet} from "react-router-dom";
function List(){
  return(
    <>
  <li><Link to='/Product/List/Shirt'>Shirts</Link></li>
  <li><Link to='List/Thits'>Thits</Link></li>
  <li><Link to='List/Lungee'>Lungee</Link></li>
  <li><Link to='List/K'>Kaile</Link></li>
  
  <Outlet/>
       </>
  )
}
export default List;