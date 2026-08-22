import React from 'react'

function Listrendering(ff) {

  let listmapper = ff.Superheros
  const values = listmapper.map((y)=><li>{y.name}</li>)
  
  return (
    <div>
      <ol>
        {values}      
      </ol>
    </div>
  )
}

export default Listrendering