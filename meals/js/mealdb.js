const searchFood = () => {
  const searchField = document.getElementById("search-field");
  //get input value
  const searchText = searchField.value;
  // console.log(searchText);
  //clear search field data
  searchField.value = "";
  //error handling
  if(searchText == ''){
      //please write something in search field
  }
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
  //clear all search result data
  searchResult.textContent = '';
  //error handling
  if(meals.length == 0){
      //show here no result found
  }
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
//async await function method(alternative fetch)
const loadMealDetail = async (mealId) => {
  // console.log(mealID);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const res = await fetch(url);
  const data = await res.json();
  displayMealDetail(data.meals[0]);
};
/* 
// get meal detail by meal id
const loadMealDetail = (mealId) => {
  // console.log(mealID);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};
 */

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
