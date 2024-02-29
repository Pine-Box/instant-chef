import axios from "axios";
//const BASEURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const BASEURL = "https://www.themealdb.com/api/json/v1/1/";

function searchRecipe(query) {
	return axios.get(BASEURL + query);
}

export default {searchRecipe};
