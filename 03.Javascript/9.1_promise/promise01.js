// console.log("Start");//1

// const p = new Promise((resolve, reject) => {
//   console.log("Inside Promise");//2

//   setTimeout(() => {
//     console.log("Timeout finished");//5
//     resolve("Done from timeout");
//   }, 1000);

//   console.log("End of promise block");//3
// });

// p.then((msg) => {
//   console.log("THEN:", msg);//6
// });

// console.log("Finish");//4

// //
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
// console.log(1);

// Promise.resolve().then(() => {
//   console.log(2);
// });

// setTimeout(() => {
//   console.log(3);
// }, 0);

// Promise.resolve().then(() => {
//   setTimeout(() => {
//     console.log(4);
//   }, 0);
// });

// setTimeout(() => {
//   Promise.resolve().then(() => {
//     console.log(5);
//   });
// }, 0);

// console.log(6);


// console.log('A');

// setTimeout(() => {
//   console.log('B');
//   Promise.resolve().then(() => {
//     console.log('C');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('D');
//   setTimeout(() => {
//     console.log('E');
//   }, 0);
// });

// console.log('F');

// setTimeout(() => {
//   console.log('G');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('H');
// });

// console.log('I');

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
//   Promise.resolve().then(() => {
//     console.log('Promise 1');
//   });
//   Promise.resolve().then(() => {
//     console.log('Promise 2');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 3');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
//   Promise.resolve().then(() => {
//     console.log('Promise 4');
//   });
// });

// console.log('Middle');

// Promise.resolve().then(() => {
//   console.log('Promise 5');
// });

// setTimeout(() => {
//   console.log('Timeout 3');
//   Promise.resolve().then(() => {
//     console.log('Promise 6');
//   });
// }, 0);

// console.log('End');
console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => {
    console.log('3');
    setTimeout(() => {
      console.log('4');
    }, 0);
  });
}, 0);

Promise.resolve().then(() => {
  console.log('5');
  setTimeout(() => {
    console.log('6');
    Promise.resolve().then(() => {
      console.log('7');
    });
  }, 0);
});

setTimeout(() => {
  console.log('8');
}, 0);

Promise.resolve().then(() => {
  console.log('9');
  Promise.resolve().then(() => {
    console.log('10');
    Promise.resolve().then(() => {
      console.log('11');
    });
  });
});

console.log('12');

Promise.resolve().then(() => {
  console.log('13');
});

console.log('14');