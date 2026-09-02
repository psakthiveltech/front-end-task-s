import React, { useEffect, useState } from 'react'

function Pokemonsearch() {
  const [name, setname] = useState('')
  let [imgs,setimg] = useState('')
  useEffect(() => {

      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(result => setimg(result.sprites.front_default))
  }, [name])
  return (
    <div>
      <input onChange={(e) => setname(e.target.value)} type="text" />
    <img src={imgs} alt=""/>
    </div>
  )
}

export default Pokemonsearch