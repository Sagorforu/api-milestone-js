// int a = 5;
// string b = 'alim halim khalim';
// bool c = True;
// object student = {name: 'noya daman', id: 55}
// int[] numbers = [12, 45, 78]
// string [] friends = ['abul', 'babul']

// Javascript is a dynamic typed Language

// Primitive data type (take simple data)
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const c = true;

// Non-primitive data type (it's can take multiple data)
const ages = [45, 65, 48];
const student = {id: 23, class: 7};
// console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
q = {job: 'Backend developer'};
console.log(p, q);


let r = {job: 'web developer'};
let s = r;
s.job = 'Front end developer';
console.log(s, r);