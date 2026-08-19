function SuperHeros(name,abilities,iq,howmanyweightcanlift){
  this.name = name,
  this.abilities=abilities,
  this.iq=iq,
  this.howmanyweightcanlift = howmanyweightcanlift
}
const value = new SuperHeros( 'ironman','fly fight and many','200s','based on shuit')
console.log(value.name);
console.log(value.abilities);
console.log(value.iq);
console.log(value.howmanyweightcanlift);