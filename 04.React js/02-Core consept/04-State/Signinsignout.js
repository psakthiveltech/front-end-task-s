import React, { useState } from 'react'

function Signinsignout() {
  let [status,setstatus] = useState(true)

  function Handlesignout(){
    setstatus(false)
  }
  function Handlesignin(){
    setstatus(true)
  }
  return (
    <div>
      {
        //true
        status ? <div>
          <button onClick={Handlesignout}>Signed in </button>
          <h4>You successfully loged in </h4>
        </div> : <div>
        <button onClick={Handlesignin}>Signed out</button>
        <h4>Request to login</h4>
        </div>
      }
    </div>
  )
}

export default Signinsignout