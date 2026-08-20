// const theonlyone= new Promise((res,rej)=>{
//   res("this is 1st program to understand")
//   rej("this is not run")
// })
// theonlyone
// .then(r=>console.log(r))
// //asycn

// async function newname() {
//   return ("thisis whre i call");

// }
// newname()
// .then(w=>console.log(w))
// console.log(newname());
//await

// async function create() {
//   let b = await Promise.resolve("this is what i want")
//   console.log("this is what i get");
//   console.log(b);

// }
// create()

// console.log("A");

// async function test() {
//   console.log("B");
//   await null;
//   console.log("C");
// }

// test();

// Promise.resolve().then(() => console.log("D"));

// console.log("E");

// console.log("A");

// async function task1() {
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// }

// task1();

// Promise.resolve().then(() => {
//   console.log("D");
//   setTimeout(() => console.log("E"), 0);
// });

// setTimeout(() => {
//   console.log("F");
//   Promise.resolve().then(() => console.log("G"));
// }, 0);

// console.log("H");



// console.log("A");
// const abcd = new Promise(resolve=>{
//   setTimeout(() => {
//     console.log("C")
//   }, 500);
//   resolve("D")
// })
// abcd
// .then(a=>console.log(a))
// console.log("B");
//MY CODE 🤣🤣🤣🤣🤣🤣😁😁😁😁😁😁😃😃😃😃😃😃😃😃😃

// console.log("A");
// let task = new Promise(resolve => {
//   console.log("C");
//   resolve("B")
//   setTimeout(() => {
//     console.log("F")
//   }, 6000)
//   console.log("E");
// })
// task
//   .then((res1) => console.log(res1))
//   .then((res2) => console.log("D"))
// //A C E B D F

// console.log("A")
// const HELLOpromise = new Promise(resolve=>{
//   console.log("C");
//   setTimeout(()=>{
//     console.log("F");
//   },3000)
//   console.log("E");
//   resolve("G")
// })
// HELLOpromise
// .then((hi)=>console.log(hi))
// .then((gi)=>console.log("B"))
// .then((ci)=>console.log("D"))

// console.log("1");

// const p = Promise.resolve();

// p.then(() => {
//   console.log("2");
//   setTimeout(() => console.log("3"), 0);
// });

// setTimeout(() => {
//   console.log("4");
//   p.then(() => console.log("5"));
// }, 0);

// console.log("6");
// A
// C
// E
// G
// B
// H
// D
// F
// I

// console.log("A");
// let proOne = new Promise(resolve => {
//   console.log("C");
//   resolve("G")
// })
// let k = Promise.resolve()

// proOne.then(k=>{console.log(k);
// setTimeout(() => 
//     console.log("I"),0)
// })
// setTimeout(() => {
//   console.log("B");
//   proOne.then(i=>console.log("H"))
// }, 0);
// setTimeout(() => {
//   console.log("D");
//   proOne.then(r=>console.log("F"))
// }, 0);
// console.log("E");

//A C E
///I
//G B H D F 

// console.log("A");

// async function myFunc() {
//   console.log("B");
//   const result = await new Promise((resolve) => {
//     console.log("C");
//     setTimeout(() => {
//       resolve("D");
//     }, 1000);
//   });
//   console.log(result);
// }

// myFunc();

// console.log("E");
// console.log("Start");

// async function first() {
//   console.log("1");
//   await second();
//   console.log("2");
// }

// async function second() {
//   console.log("3");
// }

// first();

// console.log("End");

// A function that simulates fetching user data (takes 2 seconds)
// function fetchUserData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ name: "John", age: 25 });
//         }, 2000);
//     });
// }

// // Using async/await
// async function getUserInfo() {
//     console.log("1. Starting to fetch user data...");

//     const user = await fetchUserData(); // Wait here until data arrives

//     console.log("2. User data received:", user);
//     console.log("3. Done!");
// }

// getUserInfo();
// console.log("4. This prints immediately!");

// Simulating different API calls
// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Sunny, 25°C"), 1000);
//     });
// }

// function getNews() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Breaking: JavaScript is awesome!"), 1500);
//     });
// }

// async function getDashboardData() {
//     console.log("Loading dashboard...");

//     const weather = await getWeather();  // Waits 1 second
//     console.log("Weather:", weather);

//     const news = await getNews();  // Waits 1.5 seconds
//     console.log("News:", news);

//     console.log("Dashboard loaded!");
// }

// getDashboardData();

// function cookPizza() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("🍕 Pizza ready!");
//         }, 2000);
//     });
// }

// function makeSalad() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("🥗 Salad ready!");
//         }, 1000);
//     });
// }

// async function prepareDinner() {
//     console.log("1. Starting dinner preparation...");

//     const salad = await makeSalad();
//     console.log("2.", salad);

//     const pizza = await cookPizza();
//     console.log("3.", pizza);

//     return "4. Dinner is served!";
// }

// console.log("5. Welcome to the restaurant!");
// prepareDinner().then(message => console.log(message));
// console.log("6. Please wait at your table...");
// async function task1() {
//     console.log("A");
//     return "B";
// }

// async function task2() {
//     console.log("C");
//     await task1();
//     console.log("D");
// }

// console.log("E");
// task2();
// console.log("F");

// 

// function taskA() {
//     console.log("Task A started");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Task A finished!");
//             resolve("A done");
//         }, 2000);  // 2 seconds
//     });
// }

// function taskB() {
//     console.log("Task B started");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Task B finished!");
//             resolve("B done");
//         }, 1000);  // 1 second
//     });
// }

// async function runTasks() {
//   console.log("Starting tasks...");

//    let cons = await Promise.all([taskA(),taskB()])
//   console.log("All tasks complete!");
// }

// runTasks()
// console.log("waiting for other stuff")

