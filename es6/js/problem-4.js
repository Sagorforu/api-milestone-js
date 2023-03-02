// Practice problem 4.1-2-3
const twoArray = (para1, para2) => {
    console.log(para1, para2);
    const arrayMixed = [...para1, ... para2];
    console.log(arrayMixed);
    const combinedArray = [...para1, ...para2];
    const biggestNumber = Math.max(...combinedArray);
    console.log(biggestNumber);
    const smallestNumber = Math.min(...combinedArray);
    console.log(smallestNumber);
    // return combinedArray;
}


const array1 = [13, 64, 23, 67, 25];
const array2 = [94, 63, 69, 132, 7];
const parameterCalled = twoArray (array1, array2);
// console.log(parameterCalled);

