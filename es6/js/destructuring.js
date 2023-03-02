const fish = {
    name: 'King Hilsa',
    address: 'Chadpur',
    color: 'Silver',
    phone: '01303716457',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone, color, price, address} = fish;

console.log(price);
console.log(color);
console.log(phone);
console.log(address);

// array destructuring 
const [first, another, Third] = [44, 99, 88, 456];
console.log(first, another, Third);

const nayoks = ['sakib', 'bappi', 'raj'];
const [King, lost, notun] = nayoks;
console.log(King);

function getNames (){
    return ['Alim', 'Halim'];
}
const [baba, chacha] = getNames();
console.log(chacha, baba);