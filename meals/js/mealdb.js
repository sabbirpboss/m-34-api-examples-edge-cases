const searchFood = () => {
    const searchField = document.getElementById('search-field');
    //get input value
    const searchText = searchField.value;
    console.log(searchText);
    //do search field empty
    searchField.value = '';
    //set the url with https and make it *dynamic
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    console.log(url);
    //fetch the url and convert to json
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.meals));
}