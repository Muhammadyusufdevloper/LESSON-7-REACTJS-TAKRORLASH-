import axios from "axios";

const mainApi = axios.create({
  baseURL:"https://dummyjson.com/products"  
})

export default mainApi