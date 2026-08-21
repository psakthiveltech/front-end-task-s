async function ApiProject() {
  const pokiName = document.getElementById("poki-name")
  const pokivalue = pokiName.value.toLowerCase()
  try {
    const getTheApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokivalue}/`)
    if (getTheApi.ok) {
      const Data = await getTheApi.json()
      const IMG = Data.sprites.other.dream_world.front_default

      console.log(IMG)
      document.getElementById("imgdisplay").innerHTML = `<img src="${IMG}" width="100px">`
      document.getElementById("displayName").innerHTML = Data.name

      console.log(Data)
      const backIMg = document.getElementById("showBac")
      backIMg.style.display = "block"
      backIMg.addEventListener("click", function () {
        const imgback = Data.sprites.back_default
        document.getElementById("imgdisplayback").innerHTML = `<img src="${imgback}" width="100px">`
      document.getElementById("displayName").innerHTML = `${Data.name}'s Back Side`

      })

    }
    else {
      throw new Error("This is not valid pokimon")
    }

  }
  catch (error) {
    console.error(error)
    document.getElementById("displayErro").innerHTML = "This is not valid name"
  }
}