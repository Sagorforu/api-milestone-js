const loadPhones = async(searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.innerText = '';
    // display 10 phones
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10){
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none');
    }

    // display no found result
    const noPhones = document.getElementById('no-found-message');
    if(phones.length === 0){
        noPhones.classList.remove('d-none');
    } else {
        noPhones.classList.add('d-none');
    }

    // display all phones
    phones.forEach(phones => {
        const phonesDiv = document.createElement('div');
        phonesDiv.classList.add('col');
        phonesDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phones.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phones.phone_name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button onclick="loadPhoneDetails('${phones.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
            </div>
          </div>
        `;
        phoneContainer.appendChild(phonesDiv);
    });
    // stop spinner loader
    toggleSpinner(false);
}

const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

document.getElementById('btn-search').addEventListener('click', function(){
    // start loader
    processSearch(10);
})

// Search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        processSearch(10);
    }
})

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading){
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none');
    }
}
// not the best way to load show all
document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch();
})

const loadPhoneDetails = async(id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhonesDetails(data.data);
}

const displayPhonesDetails = phones => {
    console.log(phones)
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phones.name;
    const modalDetails = document.getElementById('phone-details');
    modalDetails.innerHTML = `
    <h4>Brand Name: ${phones.brand}</h4>
    <img src="${phones.image}">
    <p>Release Date: ${phones.releaseDate ? phones.releaseDate : 'Not found release date'}</p>
    <p>Storage: ${phones.mainFeatures.storage ? phones.mainFeatures.storage : 'Not found'}</p>
    <p>Memory: ${phones.mainFeatures.memory ? phones.mainFeatures.memory : 'Not found'}</p>
    <p>Display Size: ${phones.mainFeatures.displaySize ? phones.mainFeatures.displaySize : 'Not found'}</p>
    `
}

loadPhones('iphone');