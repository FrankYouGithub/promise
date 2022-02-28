/*
 * @Author       : frank
 * @Date         : 2022-02-28 14:03:56
 * @LastEditTime : 2022-02-28 19:25:19
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
const { resolve } = require('path/posix')
const { reject } = require('./myPromise')
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

// const p1 = new myPromise((resolve, reject) => {
//   resolve(1)
// }).then(result => {
//   console.log(result)
// }).finally(() => {
//   console.log('finally')
// })


// const promise1 = myPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new myPromise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo');
// });

// myPromise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// var p1 = new myPromise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'one');
// });
// var p2 = new myPromise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'two');
// });
// var p3 = new myPromise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'three');
// });
// var p4 = new myPromise((resolve, reject) => {
//   setTimeout(resolve, 4000, 'four');
// });
// var p5 = new myPromise((resolve, reject) => {
//   resolve('reject');
// });

// myPromise.all([p1, p2, p3, p4, p5]).then(values => {
//   console.log(values);
// }, reason => {
//   console.log(reason)
// });