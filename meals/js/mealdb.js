const searchFood = () => {
    const searchField = document.getElementById('search-field');
    //get input value
    const searchText = searchField.value;
    // console.log(searchText);
    //do search field empty
    searchField.value = '';
    //set the url with https and make it *dynamic
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    // console.log(url);
    //fetch the url and convert to json
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));
}

//display search result function
const displaySearchResult = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}