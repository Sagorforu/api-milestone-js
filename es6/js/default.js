// function add (first, second){
//     console.log(first, second);
//     if (second === undefined){
//         second = 5;
//     }
//     const total = first + second;
//     return total;
// }

function add(first = 0 , second = 2){
    const total = first + second;
    return total;
}
const result = add (20);
console.log(result);

function nameCheck (first, last = 'Chowdhury'){
    const fullName = first + ' ' + last;
    return fullName;
}
const name = nameCheck ('Sagor');
console.log(name)