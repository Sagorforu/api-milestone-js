const numbers = [12, 5, 23, 45, 11, 17, 32, 44, 9, 55, 61, 1];
const bigNumber = numbers.filter(Number => Number > 20);
console.log(bigNumber);

const tiny = numbers.filter(Number => Number < 20);
console.log(tiny);

const tooTiny = numbers.filter(n => n < 10);
console.log(tooTiny);

const even = numbers.filter(num => num % 2 === 0);
console.log(even);

const odd = numbers.filter(oddNum => oddNum % 2 !== 0);
console.log(odd);

const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:2, name: 'iphone', price: 80000},
    {id:3, name: 'watch', price: 34000},
    {id:4, name: 'tablet', price: 23000}
];
const expensive = products.filter(product => product.price > 100000);
console.log(expensive);

const expensiveOver30K = products.filter(product => product.price > 30000);
console.log(expensiveOver30K);

const string = ['big', 'words', 'no', 'meaning'];
const biggestWord = string.filter(word => word.length > 5);
console.log(biggestWord);
const smallestWord = string.filter(word => word.length < 5);
console.log(smallestWord);