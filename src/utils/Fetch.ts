import axios from 'axios';

// const url = 'https://ariestobells.pythonanywhere.com/';
const customFetch = axios.create({
  baseURL: 'https://ariestobells.pythonanywhere.com/',
});
export default customFetch;
