const loadMeals = (searchText) => {
  const url =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // Step-1: Container element
    const mealContainer = document.getElementById('fish-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal)
        // Step-2: Create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // Step-3: set content of the child
        mealDiv.innerHTML = `
          <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
  Details
</button>
            </div>
          </div>
        `
        // Step-4: appendChild
        mealContainer.appendChild(mealDiv);
    });
}

const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText);
}

const loadMealDetail = idMeal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch (url)
  .then(res => res.json())
  .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
  document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
  const mealDetails = document.getElementById('mealDetailsBody');
  mealDetails.innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}">
  <p>Area:  ${meal.strArea}</p>
  <p>Category:  ${meal.strCategory}</p>
  <p>Instructions:  ${meal.strInstructions}</p>
  <p>Measure:  ${meal.strMeasure2}</p>
  `
}

loadMeals('chicken');