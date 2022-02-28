/*
 * @Author       : frank
 * @Date         : 2022-02-28 14:03:56
 * @LastEditTime : 2022-02-28 14:28:35
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
const myPromise = require('./myPromise')

// const promise1 = myPromise.resolve(123);

// promise1.then((value) => {
//   console.log(value);
//   // expected output: 123
// });

// // Resolve一个thenable对象
// var p1 = myPromise.resolve({
//   then: function (onFulfill) {
//     onFulfill("Resolving");
//   }
// });
// console.log(p1 instanceof myPromise) // true, 这是一个Promise对象

// setTimeout(() => {
//   console.log('p1 :>> ', p1);
// }, 1000);

// p1.then(function (v) {
//   console.log(v); // 输出"fulfilled!"
// }, function (e) {
//   // 不会被调用
// });

// // Thenable在callback之前抛出异常
// // myPromise rejects
// var thenable = {
//   then: function (resolve) {
//     throw new TypeError("Throwing");
//     resolve("Resolving");
//   }
// };

// var p2 = myPromise.resolve(thenable);
// p2.then(function (v) {
//   // 不会被调用
// }, function (e) {
//   console.log(e); // TypeError: Throwing
// });


// myPromise.reject(new Error('fail')).then(function () {
//   // not called
// }, function (error) {
//   console.error(error); // Error: fail
// });


// var p1 = new myPromise(function (resolve, reject) {
//   resolve('Success');
// });

// p1.then(function (value) {
//   console.log(value); // "Success!"
//   throw 'oh, no!';
// }).catch(function (e) {
//   console.log(e); // "oh, no!"
// }).then(function () {
//   console.log('after a catch the chain is restored');
// }, function () {
//   console.log('Not fired due to the catch');
// });