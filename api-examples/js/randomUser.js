const loadUsers = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;


    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;

    const location = user.results[0].location.street.number + ' , ' + user.results[0].location.street.name;
    document.getElementById('street').innerHTML = location;

    const city = user.results[0].location.city;
    document.getElementById('city').innerHTML = city;

    const picture = user.results[0].picture.large;
    document.getElementById('picture').innerHTML = `
    <img src= ${picture}>
    `;

    console.log(user.results[0].picture)
}

loadUsers();