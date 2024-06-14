import axios from 'axios';

// const url = 'https://ariestobells.pythonanywhere.com/';
const customFetch = axios.create({
  baseURL: 'https://ariestobells.pythonanywhere.com/',
});

export default customFetch;

export const productFetch = axios.create({
  baseURL: 'https://api.airtable.com/v0/app1MckGPjS7Qev6h',
  headers: {
    Authorization:
      'Bearer patSKaQQEiXSwil3S.b6fe7f8b1702140c6accd6c42bdc7ad0f3444652daf819740d9d0e2319bacbda',
    
  },
});
