/*
8 ways to get Undefine
*/
// 1. Variable that is not initialized will give Undefined
let first;
// console.log(first);


// 2. Function with no return
function second (a, b){
    const total = a + b;
}
// const result = second();
// console.log(result);


// 3. Parameter that is not passed will be Undefined
function third (a, b, c, d){
    const total2 = a + b + c + d;
    // console.log(a, b, c, d)
}
third(2, 5);


// 4. if return has nothing on the right side will return undefined
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total3 = noNegative(2, -5);
// console.log(total3);


// 5. property that doesn't exists on an object will give you undefined
const fourth = {id: 2, name: 'ponchom', age: 40};
// console.log(fourth.age, fourth.salary);


// 6. Accessing array elements outside of the index range will give you undefined
const fifth = [12, 6, 64, 23, 73];
// console.log(fifth[2], fifth[6], fifth[20])


// 7. Deleting an element inside an array will give you undefined
const sixth = [99, 22, 15, 74, 53];
// You should not do it. Instead use splice
delete sixth[1];
// console.log(sixth);


// 8. Set a value directly to undefined will give you undefined
const eighth = undefined;
const ninth = null;
const data = {results: [], updated: null};
// console.log(typeof undefined);
console.log(typeof null);