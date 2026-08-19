
  let arr = []
  let name = 1
  const arr1 = 2
  arr.push(arr1)
  console.log(arr);
  console.log('\n')
  console.log("//")
  //list

  let task = []
  function addTask(tasks){
    task.push(tasks)
    console.log(task)
  }
 addTask('tea make')
 addTask('study')
 addTask('repeate')
 addTask('sleep')
 addTask(1)

 let numList = []
 numList.push(10)
 numList.push(20)
 numList.push(30)
 numList.push(40)
 numList.push(50)
 numList.push(60)
 numList.push(70)
 numList.push(80)
 console.log(numList)

 let familyName = []
 familyName.push("sakthivel.p")
 familyName.push("paramasivam.a")
 familyName.push("rajalakshmi.p")
 familyName.push("aishwarya.p")
 console.log(familyName)

 let addObj =[]
 addObj.push({name:"ben ten",heroWepon:"watch"})
 addObj.push({name:"gwen",type:"male oposiite"})
 console.log(addObj)

 //
 let add = []
 add.push("apple","banana","orange")
 console.log(add);
 
 //
 let nameofyour = []
 nameofyour.push("vellu")
 console.log(nameofyour)

 //

 let addTasks = []
 addTasks.push("Study Javascript")
 addTasks.push("Go TO Gym")
 addTasks.push("Eat dinner")
 console.log(addTasks)

 let StudentObj = []
 StudentObj.push({name:"rahul",score:"08"})
 StudentObj.push({name:"sana",score:"80"})
 console.log(StudentObj)

 let evenNum = []
 for(i=2;i<=10;i+=2){
  evenNum.push(i)
 }
 console.log(evenNum)

 //
 let card = []

 card.push({name:"Laptop",price:60000})
 card.push({name:"Mouse",price:2000})
 card.push({name:"Keyboard",price:1000})
 console.log(card)

 //
 let message = []
 message.push("hi")
 message.push("how are u")
 message.push("iam fine")
 message.push("wht r u doing")
 message.push("iam do coding")
 console.log(message)

let namesonly = []

 let apiData = [
  { id: 1, name: "Iron Man" },
  { id: 2, name: "Hulk" },
  { id: 3, name: "Thor" }
];
namesonly.push(apiData[0].name)
namesonly.push(apiData[1].name)
namesonly.push(apiData[2].name)
console.log(namesonly)

for (let item of apiData) {
  namesonly.push(item.name)
}
console.log(namesonly)
