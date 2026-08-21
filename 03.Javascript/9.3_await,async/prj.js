async function getFromPokeApi(){
  const  searchvalue =document.getElementById("searchPoki");
  const nameOfPoki = searchvalue.value.toLowerCase();
  try{
    const   result =await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOfPoki}`);

    // const   namesApi = await fetch(`https://pokeapi.co`);

    // const jsonValue = namesApi.json();

    // console.log(jsonValue);
    
     const warning =  document.getElementById("topResult");

    if(!result.ok){
     warning.innerHTML="Result : Not Found."
     warning.style.color = "red";
     return;
    }
    else{


      const waiting = document.getElementById("waitMsg");

      const convert = await result.json(); // Main js arrayofobject


    const imgVersion = convert.sprites.front_default;// normal image


    const officialArt = convert.sprites.other['official-artwork'].front_default;//the ART image


    console.log(convert); // use for how to get item in that api
    
      const nameOfPokimon = convert.species.name;// name of the poki 

      const abilityOfPoki = convert.abilities[1].ability.name; // name of Ability


      

      const loadingGif = document.getElementById("loading-gif");

      loadingGif.style.display="block";

      setTimeout(()=>{

      loadingGif.style.display = "none";
      
      warning.innerHTML="Result : Result Found.";
      warning.style.color="green";
      
      const imageOfPoki = document.getElementById("imgPoki"); // get the image access

       imageOfPoki.src=officialArt; // setting the source for img tag

       imageOfPoki.style.display='block'; //take a correct space for the image

       const names = document.getElementById("nameOfThePoki").innerHTML="Name : "+nameOfPoki.toUpperCase();// the that display on the screen to Capital
    
      const abilits = document.getElementById("ability");


      abilits.innerHTML= "Ability : " + abilityOfPoki.toLowerCase();

      // Height 
      document.getElementById("height").innerHTML="Height : "+convert.height/10 + " Meters";

      // Weight
      document.getElementById("weight").innerHTML="Weight : "+convert.weight/10 + " Kg";

},2000);
      }
    
  }
  catch(error){
   console.error(error+"This is not valid name..");
  //  document.getElementById("topResult").innerHTML="Result : Result not found please Another Valid search .";
  }  
}
