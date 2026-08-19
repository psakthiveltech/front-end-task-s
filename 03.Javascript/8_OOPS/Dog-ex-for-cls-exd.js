class dog {
  constructor(name, age, birthday, height, energy) {
    this.name = name
    this.age = age
    this.birthday = birthday
    this.height = height
    this.energy = 100
  }
  health() {


    if (this.energy < 1) {
      this.energy = 0
      console.log(`THe ${this.name} ran out of energy it need food`)
    }

    else {
      console.log(`the dog name is ${this.name}
      and it have remaining energy to play ${this.energy} feed him`)
      this.energy -= 10

    }
  }
  feed() {
    if (this.energy < 100) {
      this.energy += 10
      console.log(`Yummy this is very tasty i have to fill my energy so give more food i have only${this.energy}`);

    }
    else {
      this.energy = 100
      console.log(`energy is full so no food need now save it later`);
    }

  }
}
let pitbull = new dog("pitbul", 10, "1.12.2003", "10cm-4ft")
pitbull.health()
pitbull.health()
pitbull.feed()
pitbull.feed()
pitbull.feed()
pitbull.feed()
pitbull.health()
pitbull.health()
pitbull.health()
pitbull.feed()
pitbull.feed()
pitbull.feed()
pitbull.feed()
pitbull.feed()
pitbull.feed()
pitbull.feed()
pitbull.feed()
pitbull.feed()
pitbull.feed()








