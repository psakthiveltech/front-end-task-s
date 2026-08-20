fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(res => res.json())     // convert response to JSON
  .then(data => console.log(data)); // here you get actual Pokémon data
