// <-------------------->
// const first = () =>
//   new Promise((resolve, reject) => {
//     console.log(3);
//     let p = new Promise((resolve, reject) => {
//       console.log(7);
//       setTimeout(() => {
//         resolve(6);
//         console.log(5);
//       }, 0);
//       resolve(1);
//     });
//     resolve(2);
//     p.then((arg) => {
//       console.log(arg);
//     }).catch((err) => {
//       reject();
//       console.log(0);
//     });
//   });
// first()
//   .then((arg) => console.log(arg))
//   .catch((err) => console.log(8));
// console.log(4);

// console.log("my-answer:", 3, 7, 4, 5, 2, 1);
// right answer: 3,7,4,1,2,5
// <-------------------->
// var total = 0;
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => (total += i), 1);
// }
// setTimeout(() => console.log(total), 100);
// console.log("my-answer:", 100);
// <-------------------->
// let total2 = 0;
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => (total2 += i), 1);
// }
// setTimeout(() => console.log(total2), 100);
// console.log("my-answer:", 45);
// <-------------------->
// let total3 = "";
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => (total3 += i), 1);
// }
// setTimeout(() => console.log(total3), 100);
// console.log("my-answer:", "0123456789");
function test(...args) {
  // const [...args] = arguments;
  console.log(args, Array.isArray(arguments), arguments);
}
test(1, 2);
test({ asdas: 213123 });
