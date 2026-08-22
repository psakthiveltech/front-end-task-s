import React, { useState } from 'react'

function Subscribe() {
  const [isSubscribed,setSubscribed] = useState(false)
  const clicked = ()=>{
    setSubscribed(isSubscribed ? false : true)
    console.log(`clicked`);
    console.log(isSubscribed);
    
  }
  return (
    <div>
      <button 
      onClick={clicked}
      style={
        {
          backgroundColor:isSubscribed ? "grey":"black",
          color:"white",
          border:'none',
          borderRadius:'10px'
        }
      }
      >
        {isSubscribed ? '🔔 Subscribed' : 'Subscribe'}
      </button>
    </div>
  )
}

export default Subscribe