function getSum(a, b=9){
    return a+b;
} 
const result = getSum(2, 7);
console.log(result);

const y = x => x*x; 
const z = y(5);
console.log(z);


const division = (num1, num2) => num1 / num2;
const results = division(4, 2);
console.log(results);


const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const output = [...nayikas];
console.log(output);

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 
console.log(newCars);
