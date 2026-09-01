import React from 'react'
import Buttons from './Buttons'

function UserProfile(getValue) {
  return (
    <div>
      <img src={getValue.avathar} alt="no img" width='20%'/>
      <h1>{getValue.name}</h1>
      <h3>{getValue.age}</h3>
      <h4>{getValue.location}</h4>
      <Buttons text={getValue.buttontext}/>
    </div>
  )
}

export default UserProfile