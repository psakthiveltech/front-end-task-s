class pen {
  constructor(name, color, rate, ink) {
    this.name = name,
    this.color =color,
    this.rate = rate,
    this.ink = 100
  }
  write() {

    if (this.ink === 0) {
      console.log(`the ${this.name} pen's ink is empty ${this.ink = 0}`)
    }
    else {
      console.log(`1 page written ${this.name} so the remaining ink is ${this.ink}`)
      this.ink -= 10
    }
    document.getElementById("write"). innerHTML="you are writing"

  }
  buyNewPen() {
    console.log(`i bought new pen so the ink is full ${this.ink=100}`);
    document.getElementById("write"). innerHTML="you are buy a new pen"
  }
}
class fancy extends pen {
  constructor(name, color, rate, ink, fesilities) {
    super(name, color, rate, ink)
    this.fesilities = this.fesilities
  }
  writeFancy() {
if (this.ink === 0) {
      console.log(`the${this.name} pens ink is empty ${this.ink = 0}`)
      
    }
    else {
      this.ink -= 15
      console.log(`1 page written by ${this.name} so the remaining ink is ${this.ink}`)
    }
    
  }
}
const heropen = new pen("Hero","blue","40")
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.write()
heropen.buyNewPen()
heropen.write()
heropen.write()
