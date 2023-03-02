const numbers = [12, 54, 65, 3, 54];
// for (const number of numbers){
//     console.log(number);
// }

// 1. for of can not used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// first option to loop through an objects
const keys = Object.keys(bottle);
// console.log(keys);

/*
3 ways to read object properties
    1. bottle.color
    2. bottle['color']
    3. bottle[key]
*/
for (const key of keys){
    // console.log(key, ':', bottle[key]);
}

// for in loop (easy to get object property keys and values)
for (const key in bottle){
    const value = bottle[key];
    // console.log(key, value);
}

// advanced
const pair = Object.entries(bottle);
// console.log(pair);
for (const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}