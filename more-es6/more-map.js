const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
console.log(half);
const third = numbers.map(x => x/3);
console.log(third);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman', 'Sagor'];
const firstLetter = friends.map( friend => friend[0]);
console.log(firstLetter);
const nameLength = friends.map( friend => friend.length);
console.log(nameLength);

const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:2, name: 'iphone', price: 80000},
    {id:3, name: 'watch', price: 34000},
    {id:4, name: 'tablet', price: 23000}
];
// const items = products.map(product => console.log(product.price));
const itemsId = products.map(product => product.id);
const itemsName = products.map(product => product.name);
const itemsPrice = products.map(product => product.price);
console.log(itemsId);
console.log(itemsName);
console.log(itemsPrice);