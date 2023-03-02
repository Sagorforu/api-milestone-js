const numbers = [2, 8, 4, 6, 3];
function getDoubles(arrayNumbers) {
    const output = [];
    for (const number of arrayNumbers) {
        const doubled = tripleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleIt (number){
    return number * 2;
}

const tripleIt = number => number * 3;
const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(number => number * 2);
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDouble);
// console.log(makeDoubleDirect);
// console.log(makeDouble2);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);

/*
purpose:
1. Get the array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

const result = getDoubles(numbers);
// console.log(result);