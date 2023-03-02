const numbers = [12, 5, 23, 45, 11, 17, 32, 44, 9, 55, 61, 1];

// find will show only first result.
const isDividedFive = numbers.find(num => num % 5 === 0);
console.log(isDividedFive);

// filter will show all result, that is the difference between find or filter
const dividedFive = numbers.filter(n => n % 5 === 0);
console.log(dividedFive);

const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:2, name: 'iphone', price: 80000},
    {id:3, name: 'watch', price: 34000},
    {id:4, name: 'tablet', price: 23000}
];
const cheap = products.find(product => product.price < 40000);
console.log(cheap);