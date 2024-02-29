import axios from "axios";
const BASEURL = "https://www.themealdb.com/api/json/v1/1";


  function searchRecipe(query) {
    return axios.get(BASEURL + '/search.php?s=' + query);
  }

  function mealLookUphById(query) {
    return axios.get(BASEURL + '/lookUphById?i=' + query);
  }


  function mealCategoriesList(query) {
    return axios.get(BASEURL + '/list.php?c=list');
  }

  function mealCountryList(query) {
    return axios.get(BASEURL + '/list.php?a=list');
  }

  function mealIngrecientList(query) {
    return axios.get(BASEURL + '/list.php?i=list');
  }

  function filterByCountry(query) {
    return axios.get(BASEURL + '/filter.php?a=' + query);
  }

  function filterByMainIngredients(query) {
    return axios.get(BASEURL + '/filter.php?i=' + query);
  }

  function randomnMeal(query) {
    return axios.get(BASEURL + '/random.php');
  } 

  function filterByCatergory(query){
    return axios.get(BASEURL + '/filter.php?c=' + query);  
  }

  export {searchRecipe, 
           mealLookUphById,
           mealCategoriesList, 
           mealCategoriesList,
           filterByCountry,
           filterByMainIngredients,
           randomnMeal,
           filterByCatergory
          }
