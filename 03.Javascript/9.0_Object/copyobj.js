let ironman ={
  typeodhero:'shuit',
  canfly:true,
  heigth:'6ft'
}
let hulkbuster={
  ...ironman,
  heigth:'24ft'
}
console.log(hulkbuster.heigth)