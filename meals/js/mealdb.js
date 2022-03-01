const searchFood = () => {
  const searchField = document.getElementById("search-field");
  //get input value
  const searchText = searchField.value;
  // console.log(searchText);
  //do search field empty
  searchField.value = "";
  //set the url with https and make it *dynamic
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  // console.log(url);
  //fetch the url and convert to json
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.meals));
};

//display search result function
const displaySearchResult = (meals) => {
  // console.log(meals);
  const searchResult = document.getElementById("search-result");
  meals.forEach((meal) => {
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};

// get meal detail by meal id
const loadMealDetail = (mealId) => {
  // console.log(mealID);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};

//display meal detail by id
const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
};
