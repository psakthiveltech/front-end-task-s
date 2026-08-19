const arrays = ['hello','hi','what is your name','hello','hi','what is your name']
for(items of arrays){
  console.log(items);
}

let a  = []
let arrs = ["this is num",'hello','hi','what is your name']
for(items of arrs){
  a.push(items)
  
}
  console.log(a);


  ///
  let colors = ["red", "green", "blue"];
 for(let color of colors){
  console.log("color :"+color);
  
 }
 let marks = [50, 70, 90, 30];
 for(let mark of marks){
  if (mark>=60){
    console.log(mark)
  }
 }

 let highmarks = []

 let students = [
  {name: "Rahul", score: 85},
  {name: "Sana", score: 45},
  {name: "Kiran", score: 92}
];

 for(let scores of students){
  if(scores.score>=80){
    highmarks.push(scores)
  }
 }
 console.log(highmarks);
 

 let arraysone = ["hello"]
 arraysone.forEach((names,index)=>{
  console.log(index,names.length)
 })

 let highmarkscore = []

 let Marks = [30, 40, 50, 60, 90, 10];
 marks.forEach((highMarks)=>{
  if(highMarks>=50){
    highmarkscore.push(highMarks)
    console.log(highmarkscore.sort())
  }
 })