import React from 'react'

function Localstorage() {
 
  function role(){
     let a = {
      role:'developer',
      name:'psv'
     }
     localStorage.setItem("nameofdata" , JSON.stringify(a))
     let cal=JSON.parse(localStorage.getItem("nameofdata"))
     console.log(cal);
     
  }
  return (
    <div>
    <button onClick={role}> value</button>
    </div>
  )
}

export default Localstorage