import axios from "axios";
const BASEURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


  function searchRecipe(query) {
    return axios.get(BASEURL + query);
  }

  export {searchRecipe}
