import React from 'react'

function Arrayinprops({arrayt}) {
  return (
    <div>
      {/* <h1>{value.array}</h1>
      <p>{value.arrayt}</p>
      <h5>{value.object.class}</h5>
      <h5>{value.object.name}</h5>
      <h5>{value.object.status}</h5>
      <h5>{value.object.health}</h5> */}
      {/* <h1>{object.name}</h1> */}
      <ul>{
        arrayt.map((g)=><li><h1>{g}</h1></li>)
      }</ul>
    </div>
  )
}

export default Arrayinprops