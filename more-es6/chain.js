const users = [ {id: 1, name: 'sagor', job: 'web-developer'} ];

console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'kabul', job: 'comedian'}
    ],
    people: 89,
    device: 'computer'
}
const firstJob = data.data[1].job;
console.log(firstJob);


const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side',
            fourth: [23, 64, 75]
        }
    },
    postOffice: 'cantonment',
    city: 'Dhaka'
}
const floorCheck = user.address.street.first;
console.log(floorCheck);