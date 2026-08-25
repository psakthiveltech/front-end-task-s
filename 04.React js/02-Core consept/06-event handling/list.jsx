import React from 'react'
const arrays = ['hello','hi','greetings','welcome']
function List() {
  return (
    <div>
      <ul>
        {arrays.map((valu,indexval)=><li key={indexval}>{valu}</li> )}

      </ul>
    </div>
  )
}

export default List