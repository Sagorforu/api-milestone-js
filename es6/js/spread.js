const max = Math.max(12, 85, 999, 78, 1111);
// console.log(max);
const numbers = [12, 85, 999, 78, 1111];
const largest = Math.max(...numbers);
console.log(largest);


// here pushed number got both of variable, coz numbers is a array so need access in array
// const numbers2 = numbers;

// if we want to add one variable array then, here numbers array got access in array using (...);
const numbers2 = [...numbers];

// we can add more value in one line in array, below the example
const numbers3 = [44, 22, ...numbers, 99, 111, 3333];

console.log(numbers3);
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);