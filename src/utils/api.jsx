import axios from "axios";
const BASEURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
