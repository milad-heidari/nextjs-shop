import axios from 'axios';
const BASE_URL = 'https://fakestoreapi.com'
export const get = (endPoint,config= {})=>{
   return axios.get(`${BASE_URL}${endPoint}`,config)
}