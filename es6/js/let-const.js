// No more use var
// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'jaan pakhi';
// bird = "moyna pakhi";
const message = bird + ' potas potas';
console.log(message);

// Not working coz const not allow to reassign
const numbers = [12, 89, 65, 45];
// numbers = [77, 66, 55, 22, 99];
numbers.push(134);
numbers[1] = 90;
console.log(numbers);

// It's working coz let allow to reassign
let digits = [12, 89, 65, 45];
digits = [77, 66, 55, 22, 99];
console.log(digits);

const student = {
    name: 'mofiz', 
    address: 'Rongpur'
}
student.name = 'Sagor';
console.log(student);

// For loop
for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}