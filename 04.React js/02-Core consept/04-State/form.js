import React, { useState } from 'react'

function Form() {
  const [formvalue,setformvalue]=useState(
   { name:'',
    email:'',
    password:''}
  )
  return (
    <div>
      <div className='container'>
        
    <form>

    <label>Name:
      <input 
      type="text"
      value={formvalue.name}
      onChange={(e)=>setformvalue(e.target.value)}
      placeholder='Enter your name'
      />
    </label>
    <label>Email:
      <input 
      type="email"
      value={formvalue.email}
      onChange={(e)=>setformvalue(e.target.value)}
      placeholder='Enter your email'
      />
    </label>
    <label>Password:
      <input 
      type="password"
      value={formvalue.password}
      onChange={(e)=>setformvalue(e.target.value)}
      placeholder='Enter your Password'
      />
    </label>
    <button type='submit'>Submit</button>
    </form>
      </div>
      
    </div>
  )
}

export default Form