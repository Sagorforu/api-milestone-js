// Practice problem 3.1
const squareResult = [];
const square = arrayNumber => {
    for (let i = 0; i < arrayNumber.length; i++){
        const element = arrayNumber[i];
        const power = (element * element);
        squareResult.push(power);
        sum = [...squareResult]
    }
    return sum;
}
const numbers = [8, 4, 6, 2, 9];
const result = square(numbers);
console.log(result);