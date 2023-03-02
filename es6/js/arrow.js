// Function declaration
function add (first, second){
    const total = first + second;
    return total;
}

// function expression
// function name optional
const add1 = function add1 (first, second){
    const total = first + second;
    return total;
}

// function expression with anonymous function 
const add2 = function (first, second){
    const total = first + second;
    return total;
}

function add3(first, second){
    return first + second;
}

const add4 = function add4 (first, second){
    return first + second;
}

// arrow function
const add5 = (first, second) => first + second;

const result = add5(11, 25);
console.log(result);

// Interview Question:
// Difference between function declaration, function expression and arrow function