// var args = function(...allArgs) {
//   sum = 0;
//   for(var i of allArgs) {
//     sum += i;
//   }
//   return sum;

// };

// console.log(args(1,2,3,4,5,6,7));

const digits = [0,1,2,3,4,5,6,7,8,9];

const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next()); // logs {value: undefined, done: true}