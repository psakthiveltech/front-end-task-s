import React from "react";
import Typeprop from './prop-types'
function Cards(props){
  return (
    <>
    <div className="containers">
    <div className="cards">
    <img src={props.img} alt="opps"/>
    <h1>{props.name}</h1>
    <p>{props.des}</p>
    <button>click</button>
    </div>
    </div>
    </>
  )
}
Cards.Typeprop= {
  name:Typeprop.nu
}
export default Cards;