const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter arrow function
const getPie = () => 3.14;

// One parameter arrow function
const doubleIt = (sum) => sum * 2;

// One parameter simple version arrow function
const fiveTimes = num => num * 5;

// multiLine arrow function
// if you want to return something, use the return
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const result = firstSum + secondSum;
    return result;
}

const total = doMath(5, 3, 6);
console.log(total);
const fullName = getFullName('Sagor', 'Islam');
console.log(fullName);
const result = multiply(7, 8);
console.log(result);