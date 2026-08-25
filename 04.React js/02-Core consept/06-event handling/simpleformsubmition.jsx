import React from 'react'

function Simpleformsubmition() {
  let getformvalue = (data)=>{
    data.preventDefault()
    console.log(data.target.Name.value)
    console.log(data.target.Email.value)
    console.log(data);
    
  }
    
  return (
    <div>
      <form  onSubmit={getformvalue}  action="">
        
      <input type="text" name='Name' />
      <input type="text" name='Email' />
      <button type='submit'>Click</button>
      </form>
    </div>
  )
}

export default Simpleformsubmition