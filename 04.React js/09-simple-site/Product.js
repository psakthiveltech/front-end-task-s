import React from "react";
import { Outlet } from "react-router-dom";
function Product(){
  return(
    <>
    
    <h1> this is list of product </h1>
    <Outlet/>
    </>
  )
}
export default Product;