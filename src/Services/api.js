import axios from 'axios';


const api = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/current.json?key=853e62c4987342b7b1e170351232605&q='
});


export default api;
