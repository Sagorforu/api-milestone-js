// Create object using object literals
const player = {};
player.name = 'Big Sagor';
player.specialty = 'vasaiya deya';
player.bat = function (){
    // console.log('swiming your bat');
}
// console.log(player);
// player.bat();

const student = {
    name: 'Pandey',
    job: 'khai andey',
    ball: function(){
        // console.log('throw the ball')
    },
    salary: 10000
}
// console.log(student)

// 2. Object constructor
const person = new Object();
// console.log(person);

// 3. object create method
const item = Object.create(null);
// console.log(item);

const atel = Object.create(student);
// console.log(atel.ball);

// 4. class
class member{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}
const member1 = new member(56);
console.log(member1);

// 5. Function 
function car (model, price){
    this.model = model;
    this.price = price;
}
const tesla = new car('Elon', 32)
console.log(tesla);