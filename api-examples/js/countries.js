const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = country => {
    const countryContainer = document.getElementById('all-countries');
    country.forEach(country => {
        // console.log(country.cca2)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h2>Name: ${country.name.common}</h2>
        <p>Capital: ${country.capital ? country.capital : 'No Capital'}</p>
        <button onclick="loadCountriesDetails('${country.cca2}')">Details</button>
        `
        countryContainer.appendChild(countryDiv);
    });
}
const loadCountriesDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetails(data[0]))
}

const displayCountriesDetails = country => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src= "${country.flags.png}"> 
    `
}

loadCountries();